import React from 'react';
import '../styles/GlowingOrb.css';

interface GlowingOrbProps {
    position: 'top-right' | 'bottom-left' | 'center';
    size: number;
    color: string;
}

const GlowingOrb: React.FC<GlowingOrbProps> = ({ position, size, color }) => {
    return (
        <div 
            className={`glowing-orb ${position}`} 
            style={{ 
                width: `${size}px`, 
                height: `${size}px`,
                background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 70%)`
            }}
        >
            <div className="orb-core" style={{ background: color }}></div>
        </div>
    );
};

export default GlowingOrb; 