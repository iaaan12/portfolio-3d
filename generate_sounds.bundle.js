import fs from 'fs';

// Helper to write a simple basic WAV file
function writeWAV(filename, duration, hzFn) {
    const sampleRate = 44100;
    const numChannels = 1;
    const bitsPerSample = 16;
    const bytesPerSample = bitsPerSample / 8;
    const blockAlign = numChannels * bytesPerSample;
    const byteRate = sampleRate * blockAlign;
    const dataSize = Math.floor(sampleRate * duration) * blockAlign;

    const buffer = Buffer.alloc(44 + dataSize);

    // RIFF chunk descriptor
    buffer.write('RIFF', 0);
    buffer.writeUInt32LE(36 + dataSize, 4);
    buffer.write('WAVE', 8);

    // fmt sub-chunk
    buffer.write('fmt ', 12);
    buffer.writeUInt32LE(16, 16); // Subchunk1Size
    buffer.writeUInt16LE(1, 20); // AudioFormat (PCM)
    buffer.writeUInt16LE(numChannels, 22);
    buffer.writeUInt32LE(sampleRate, 24);
    buffer.writeUInt32LE(byteRate, 28);
    buffer.writeUInt16LE(blockAlign, 32);
    buffer.writeUInt16LE(bitsPerSample, 34);

    // data sub-chunk
    buffer.write('data', 36);
    buffer.writeUInt32LE(dataSize, 40);

    for (let i = 0; i < dataSize / 2; i++) {
        const t = i / sampleRate;
        let sample = hzFn(t, duration) * 32767;
        // clip
        if (sample > 32767) sample = 32767;
        if (sample < -32768) sample = -32768;
        buffer.writeInt16LE(Math.round(sample), 44 + i * 2);
    }

    fs.writeFileSync(filename, buffer);
}

// hover.wav: short whoosh (white noise with envelope)
writeWAV('public/assets/sounds/hover.wav', 0.2, (t, dur) => {
    const noise = (Math.random() * 2 - 1) * 0.4;
    const env = Math.sin((t / dur) * Math.PI);
    return noise * env;
});

// click-tech.wav: short tech pop
writeWAV('public/assets/sounds/click-tech.wav', 0.1, (t, dur) => {
    const freq = 1500 - (t / dur) * 1000;
    const env = Math.pow(1 - (t / dur), 3);
    return Math.sin(2 * Math.PI * freq * t) * env * 0.3;
});

console.log("Synthetic sounds generated!");
