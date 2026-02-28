import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    const mousePos = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        let animationFrameId;

        const updatePosition = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Update dot instantly
            if (dotRef.current) {
                dotRef.current.style.left = `${mousePos.current.x}px`;
                dotRef.current.style.top = `${mousePos.current.y}px`;
            }
        };

        const updateRing = () => {
            // Lerp ring position to mouse position for smooth trailing
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

            if (ringRef.current) {
                ringRef.current.style.left = `${ringPos.current.x}px`;
                ringRef.current.style.top = `${ringPos.current.y}px`;
            }

            animationFrameId = requestAnimationFrame(updateRing);
        };

        document.addEventListener('mousemove', updatePosition);
        animationFrameId = requestAnimationFrame(updateRing);

        // Add event listeners for hover state on interactive elements
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // MutationObserver to attach listeners to newly added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const newInteractiveElements = node.querySelectorAll('a, button, input, textarea, select, [role="button"]');
                            newInteractiveElements.forEach((el) => {
                                el.addEventListener('mouseenter', handleMouseEnter);
                                el.addEventListener('mouseleave', handleMouseLeave);
                            });
                            // Check the node itself
                            if (node.matches('a, button, input, textarea, select, [role="button"]')) {
                                node.addEventListener('mouseenter', handleMouseEnter);
                                node.addEventListener('mouseleave', handleMouseLeave);
                            }
                        }
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();

            // Clean up event listeners for current elements in DOM
            document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            })
        };
    }, []); // Empty dependency array ensures loop setup runs once, not on every layout coordinate

    return (
        <>
            <div
                ref={dotRef}
                className="fixed w-[10px] h-[10px] bg-[var(--blue2)] rounded-full pointer-events-none z-[9999] mix-blend-normal"
                style={{
                    left: '-100px',
                    top: '-100px',
                    transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
                    opacity: 1,
                    transition: 'transform 100ms ease-out'
                }}
            />
            <div
                ref={ringRef}
                className="fixed border rounded-full pointer-events-none z-[9998]"
                style={{
                    width: isHovering ? '50px' : '36px',
                    height: isHovering ? '50px' : '36px',
                    left: '-100px',
                    top: '-100px',
                    transform: 'translate(-50%, -50%)',
                    borderColor: isHovering ? 'rgba(37,99,235,0.8)' : 'rgba(37,99,235,0.5)',
                    transition: 'width 150ms ease-out, height 150ms ease-out, border-color 150ms ease-out'
                }}
            />
        </>
    );
}
