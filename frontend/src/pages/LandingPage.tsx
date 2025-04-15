import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import MinimalistTextureBackground from '../components/StarfieldBackground';
import ChallengeCard from 'components/ChallengeCard';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/challenges');
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className="landing-page">
            <div className="background-elements">
                <MinimalistTextureBackground />
                <div className="gradient-circle top-left"></div>
                <div className="gradient-circle bottom-right"></div>
                <div className="grid-lines"></div>
            </div>
            
            <div className="header">
                <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <div className="logo-image">
                        <img src="/logoOpenArena.png" alt="OpenArena logo" />
                    </div>
                    <span className="logo-text">OpenArena</span>
                </div>
            </div>
            
            <div className="content">
                <div className="hero-section">
                    <h1>
                        <span className="gradient-text">Bringing AI</span>
                        <br />
                        <span className="gradient-text">Challenges</span>
                        <br />
                        <span className="gradient-text">Onchain</span>
                    </h1>
                    <p>Launch AI competitions on a decentralized platform. Publish datasets, create challenges, and track submissions transparently.</p>
                    
                    <div className="cta-buttons">
                        <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
                    </div>
                </div>
                
                <div className="challenge-container">
                    <ChallengeCard
                        title="Sentiment Analysis Competition"
                        timeRemaining="08:25:15"
                        submissions={112}
                        metric="Accuracy"
                        deadline="July 19 2025"
                        datasetTitle="Movie Reviews Dataset"
                        datasetDescription="Sentiment-labeled movie reviews classification tasks"
                        leaderboard={[
                            { rank: 1, user: "datascientist42", score: "0.945" },
                            { rank: 2, user: "modelsage", score: "0.938" },
                            { rank: 3, user: "ALmaster", score: "0.932" }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage; 