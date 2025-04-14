import React, { useEffect, useRef } from 'react';
import '../styles/CosmicDust.css';

interface Dust {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    velocity: {
        x: number;
        y: number;
    };
    color: string;
}

const CosmicDust: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dustParticles = useRef<Dust[]>([]);
    const dustCount = 40;

    const createDust = (width: number, height: number): Dust[] => {
        const particles: Dust[] = [];
        const colors = ['#4361ee', '#3a0ca3', '#7209b7', '#4cc9f0', '#560bad'];

        for (let i = 0; i < dustCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 30 + 10,
                alpha: Math.random() * 0.2 + 0.05,
                velocity: {
                    x: (Math.random() - 0.5) * 0.2,
                    y: (Math.random() - 0.5) * 0.2
                },
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        return particles;
    };

    const drawDust = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        ctx.clearRect(0, 0, width, height);
        
        dustParticles.current.forEach(dust => {
            ctx.beginPath();
            
            // Create a gradient for the dust
            const gradient = ctx.createRadialGradient(
                dust.x, dust.y, 0,
                dust.x, dust.y, dust.radius
            );
            
            gradient.addColorStop(0, `${dust.color}${Math.floor(dust.alpha * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.arc(dust.x, dust.y, dust.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Update position
            dust.x += dust.velocity.x;
            dust.y += dust.velocity.y;
            
            // Bounce off walls
            if (dust.x - dust.radius < 0 || dust.x + dust.radius > width) {
                dust.velocity.x *= -1;
            }
            
            if (dust.y - dust.radius < 0 || dust.y + dust.radius > height) {
                dust.velocity.y *= -1;
            }
            
            // Slightly change dust properties for animation
            dust.radius += Math.sin(Date.now() * 0.001) * 0.1;
            dust.alpha = Math.max(0.05, Math.min(0.2, dust.alpha + Math.sin(Date.now() * 0.002) * 0.01));
        });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                
                // Reset dust particles
                dustParticles.current = createDust(canvas.width, canvas.height);
            }
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        
        let animationId: number;
        
        const animate = () => {
            if (canvas) {
                drawDust(ctx, canvas.width, canvas.height);
            }
            animationId = requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="cosmic-dust-canvas" />;
};

export default CosmicDust; 