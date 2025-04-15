import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChallengesPage.css';
import MinimalistTextureBackground from '../components/StarfieldBackground';
import ChallengeCard from '../components/ChallengeCard';

const ChallengesPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className="challenges-page">
            <div className="background-elements">
                <MinimalistTextureBackground />
                <div className="gradient-circle top-left"></div>
                <div className="gradient-circle bottom-right"></div>
                <div className="grid-lines"></div>
            </div>
            
            <div className="challenges-top-header">
                <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <div className="logo-image">
                        <img src="/logoOpenArena.png" alt="OpenArena logo" />
                    </div>
                    <span className="logo-text">OpenArena</span>
                </div>
            </div>
            
            <div className="challenges-content">
                <div className="challenges-header">
                    <h1>
                        <span className="gradient-text">AI Challenges</span>
                    </h1>
                    <p>Browse and participate in community-driven AI challenges</p>
                    
                    <div className="cta-buttons">
                        <button className="btn btn-primary">Create Challenge</button>
                    </div>
                </div>
                
                <div className="challenges-container">
                    {/* Display challenge cards here */}
                    <div className="no-challenges-message">
                        <p>No challenges available yet. Create your first challenge!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengesPage; 