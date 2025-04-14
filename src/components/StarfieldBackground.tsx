import React, { useEffect, useRef } from 'react';
import '../styles/StarfieldBackground.css';

interface Star {
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
}

const StarfieldBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const numStars = 200;

    const createStars = (width: number, height: number): Star[] => {
        const stars: Star[] = [];
        const colors = ['#ffffff', '#eeeeee', '#ccccff', '#99ccff', '#7ca9ff'];
        
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * 1000,
                size: Math.random() * 1.5,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
        
        return stars;
    };

    const moveStars = (stars: Star[], width: number, height: number): void => {
        stars.forEach(star => {
            // Move the star closer to the viewer
            star.z -= 0.3;
            
            // If the star is too close, reset it
            if (star.z <= 0) {
                star.z = 1000;
                star.x = Math.random() * width - width / 2;
                star.y = Math.random() * height - height / 2;
            }
        });
    };

    const drawStars = (ctx: CanvasRenderingContext2D, stars: Star[], width: number, height: number): void => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, width, height);
        
        // Set center of canvas as origin
        ctx.save();
        ctx.translate(width / 2, height / 2);
        
        stars.forEach(star => {
            const x = star.x * (1000 / star.z);
            const y = star.y * (1000 / star.z);
            
            const scale = 1000 / star.z;
            const size = scale * star.size;
            
            // Only draw stars that are in the viewport
            if (x > -width/2 && x < width/2 && y > -height/2 && y < height/2) {
                const opacity = Math.min(1, (1000 - star.z) / 1000);
                
                ctx.beginPath();
                // Create radial gradient for glowing effect
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
                gradient.addColorStop(0, star.color);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                
                ctx.fillStyle = gradient;
                ctx.arc(x, y, size * 2, 0, Math.PI * 2);
                ctx.fill();
                
                // Center dot
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        });
        
        ctx.restore();
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
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Initialize stars
        starsRef.current = createStars(canvas.width, canvas.height);
        
        // Animation loop
        let animationId: number;
        const animate = () => {
            if (canvas) {
                moveStars(starsRef.current, canvas.width, canvas.height);
                drawStars(ctx, starsRef.current, canvas.width, canvas.height);
            }
            animationId = requestAnimationFrame(animate);
        };
        
        animate();
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);
    
    return <canvas ref={canvasRef} className="starfield-canvas" />;
};

export default StarfieldBackground; 