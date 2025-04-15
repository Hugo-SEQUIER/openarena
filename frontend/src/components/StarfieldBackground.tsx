import React, { useEffect, useRef } from 'react';
import '../styles/StarfieldBackground.css';

interface Dot {
    x: number;
    y: number;
    size: number;
    opacity: number;
}

const MinimalistTextureBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dotsRef = useRef<Dot[]>([]);
    const numDots = 400;

    const createDots = (width: number, height: number): Dot[] => {
        const dots: Dot[] = [];
        
        for (let i = 0; i < numDots; i++) {
            dots.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.06 + 0.02
            });
        }
        
        return dots;
    };

    const drawDots = (ctx: CanvasRenderingContext2D, dots: Dot[], width: number, height: number): void => {
        ctx.clearRect(0, 0, width, height);
        
        dots.forEach(dot => {
            ctx.beginPath();
            ctx.fillStyle = `rgba(58, 46, 39, ${dot.opacity})`;
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            ctx.fill();
        });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const resizeCanvas = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                dotsRef.current = createDots(canvas.width, canvas.height);
                drawDots(ctx, dotsRef.current, canvas.width, canvas.height);
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // No animation needed for static pattern
        drawDots(ctx, dotsRef.current, canvas.width, canvas.height);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
    
    return <canvas ref={canvasRef} className="texture-canvas" />;
};

export default MinimalistTextureBackground; 