import React, { useEffect, useRef } from 'react';
import '../styles/ParticleBackground.css';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
}

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles: Particle[] = [];
    const particleCount = 50;
    const colors = ['#4361ee', '#3a0ca3', '#7209b7', '#4cc9f0'];

    // Initialize particles
    const initParticles = (canvas: HTMLCanvasElement) => {
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    };

    // Draw particles
    const drawParticles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1;
            }
            
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1;
            }
        });
        
        // Draw connections
        drawConnections(ctx);
        
        requestAnimationFrame(() => drawParticles(ctx, canvas));
    };
    
    // Draw connections between particles that are close to each other
    const drawConnections = (ctx: CanvasRenderingContext2D) => {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(107, 114, 218, ${0.2 - distance / 500})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        // Set canvas dimensions
        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        
        // Initialize and start animation
        initParticles(canvas);
        drawParticles(ctx, canvas);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="particle-canvas"></canvas>
    );
};

export default ParticleBackground; 