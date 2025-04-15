import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChallengesPage.css';
import MinimalistTextureBackground from '../components/StarfieldBackground';
import ChallengeCard from '../components/ChallengeCard';
import { mockChallenges, Challenge } from '../data/mockChallenges';

const ChallengesPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredChallenges = mockChallenges.filter(challenge => 
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.datasetTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    
                    <div className="search-container">
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search challenges..." 
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div className="challenges-container">
                    {filteredChallenges.length > 0 ? (
                        filteredChallenges.map(challenge => (
                            <div key={challenge.id} className="challenge-card-wrapper">
                                <ChallengeCard
                                    title={challenge.title}
                                    timeRemaining={challenge.timeRemaining}
                                    submissions={challenge.submissions}
                                    metric={challenge.metric}
                                    deadline={challenge.deadline}
                                    datasetTitle={challenge.datasetTitle}
                                    datasetDescription={challenge.datasetDescription}
                                    leaderboard={challenge.leaderboard}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="no-challenges-message">
                            <p>{searchTerm ? 'No challenges match your search.' : 'No challenges available yet. Create your first challenge!'}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChallengesPage; 