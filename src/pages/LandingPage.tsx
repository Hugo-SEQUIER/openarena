import React from 'react';
import '../styles/LandingPage.css';
import GlowingOrb from '../components/GlowingOrb';
import ChallengeCard from 'components/ChallengeCard';
import StarfieldBackground from '../components/StarfieldBackground';
import CosmicDust from '../components/CosmicDust';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <div className="background-elements">
                <StarfieldBackground />
                <CosmicDust />
                <div className="gradient-circle top-left"></div>
                <div className="gradient-circle bottom-right"></div>
                <div className="grid-lines"></div>
                <GlowingOrb position="top-right" size={120} color="rgba(67, 97, 238, 0.6)" />
                <GlowingOrb position="bottom-left" size={150} color="rgba(114, 9, 183, 0.6)" />
                <GlowingOrb position="center" size={300} color="rgba(76, 201, 240, 0.2)" />
            </div>
            
            <div className="header">
                <div className="logo">
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
                        <button className="btn btn-primary">Get Started</button>
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