import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const resend = new Resend(process.env.RESEND_API_KEY);

// Security Middleware
app.use(helmet()); // Sets various HTTP headers to secure the app

// Configurar CORS restrictivo (en un entorno real debés reemplazar '*' por la URL de tu frontend)
app.use(cors({
    origin: process.env.FRONTEND_URL || '*', // Usa FRONTEND_URL en produccion, sino permite todo
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Apply rate limiting to all /api/ requests
const apiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 3, // limit each IP to 3 requests per windowMs
    message: { error: 'Demasiadas solicitudes desde esta IP, por favor intenta nuevamente después de una hora.' },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use('/api/', apiLimiter);

// API Route for sending emails with validation and sanitization
app.post(
    '/api/contact',
    [
        // Validate and sanitize fields
        body('name')
            .trim()
            .notEmpty().withMessage('El nombre es obligatorio.')
            .isLength({ max: 100 }).withMessage('El nombre no puede tener más de 100 caracteres.')
            .escape(), // Convierte <script> a entitas HTML
        body('email')
            .trim()
            .notEmpty().withMessage('El email es obligatorio.')
            .isEmail().withMessage('Debe ser un correo electrónico válido.')
            .normalizeEmail(), // Canonicaliza el email
        body('message')
            .trim()
            .notEmpty().withMessage('El mensaje es obligatorio.')
            .isLength({ max: 1500 }).withMessage('El mensaje no puede tener más de 1500 caracteres.')
            .escape()
    ],
    async (req, res) => {
        // Evaluate validation results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg }); // Devolvemos el primer error de validación
        }

        try {
            const { name, email, message } = req.body;

            const data = await resend.emails.send({
                from: 'Portfolio Contact <onboarding@resend.dev>', // Usar cuenta verificada o default de resend para testing
                to: ['matiservicios17@gmail.com'], // El correo donde quieres recibir los mensajes
                subject: `Nuevo mensaje de tu Portfolio de: ${name}`,
                html: `
                    <h3>Nuevo mensaje de contacto</h3>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p>${message}</p>
                `,
                replyTo: email
            });

            res.status(200).json({ success: true, data });
        } catch (error) {
            console.error('Error enviando email:', error);
            res.status(500).json({ error: 'Hubo un error al enviar el mensaje.' });
        }
    }
);

// Serve frontend in production
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing, return all requests to React app
app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
