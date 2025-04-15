import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChallengesPage.css';
import MinimalistTextureBackground from '../components/StarfieldBackground';
import { mockChallenges, Challenge } from '../data/mockChallenges';

const ChallengesPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const openChallengeDetails = (challenge: Challenge) => {
        setSelectedChallenge(challenge);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
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
                
                <div className="challenges-list">
                    {filteredChallenges.length > 0 ? (
                        filteredChallenges.map(challenge => (
                            <div 
                                key={challenge.id} 
                                className="challenge-list-item"
                                onClick={() => openChallengeDetails(challenge)}
                            >
                                <div className="challenge-list-content">
                                    <h3 className="challenge-list-title">{challenge.title}</h3>
                                    <p className="challenge-list-description">{challenge.description}</p>
                                    <div className="challenge-list-meta">
                                        <span className="challenge-metric">
                                            <strong>Metric:</strong> {challenge.metric}
                                        </span>
                                        <span className="challenge-deadline">
                                            <strong>Deadline:</strong> {challenge.deadline}
                                        </span>
                                        <span className="challenge-submissions">
                                            <strong>Submissions:</strong> {challenge.submissions}
                                        </span>
                                    </div>
                                </div>
                                <div className="challenge-time-badge">
                                    <span>{challenge.timeRemaining}</span>
                                    <small>remaining</small>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-challenges-message">
                            <p>{searchTerm ? 'No challenges match your search.' : 'No challenges available yet. Create your first challenge!'}</p>
                        </div>
                    )}
                </div>
            </div>
            
            {showModal && selectedChallenge && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="challenge-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>×</button>
                        <h2 className="modal-title">{selectedChallenge.title}</h2>
                        <div className="modal-time-remaining">
                            <span>{selectedChallenge.timeRemaining}</span>
                            <small>remaining</small>
                        </div>
                        
                        <p className="modal-description">{selectedChallenge.description}</p>
                        
                        <div className="modal-stats">
                            <div className="modal-stat-item">
                                <div className="modal-stat-label">Submissions</div>
                                <div className="modal-stat-value">{selectedChallenge.submissions}</div>
                            </div>
                            <div className="modal-stat-item">
                                <div className="modal-stat-label">Metric</div>
                                <div className="modal-stat-value">{selectedChallenge.metric}</div>
                            </div>
                            <div className="modal-stat-item">
                                <div className="modal-stat-label">Deadline</div>
                                <div className="modal-stat-value">{selectedChallenge.deadline}</div>
                            </div>
                        </div>
                        
                        <div className="modal-section">
                            <h3 className="modal-section-title">Dataset</h3>
                            <div className="modal-dataset">
                                <div>
                                    <h4>{selectedChallenge.datasetTitle}</h4>
                                    <p>{selectedChallenge.datasetDescription}</p>
                                </div>
                                <button className="btn btn-secondary">Download</button>
                            </div>
                        </div>
                        
                        <div className="modal-section">
                            <h3 className="modal-section-title">Leaderboard</h3>
                            <div className="modal-leaderboard">
                                <div className="leaderboard-header">
                                    <span>Rank</span>
                                    <span>User</span>
                                    <span>Score</span>
                                </div>
                                {selectedChallenge.leaderboard.map(entry => (
                                    <div key={entry.rank} className="leaderboard-row">
                                        <span className="leaderboard-rank">{entry.rank}</span>
                                        <span className="leaderboard-user">{entry.user}</span>
                                        <span className="leaderboard-score">{entry.score}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="modal-section">
                            <h3 className="modal-section-title">Submission Guidelines</h3>
                            <div className="submission-guidelines">
                                <p className="guidelines-intro">
                                    Your submission will be evaluated based on the following criteria. Please ensure your 
                                    submission includes all required components:
                                </p>
                                <ul className="guidelines-list">
                                    {selectedChallenge.submissionGuidelines.map((guideline, index) => (
                                        <li key={index} className="guideline-item">
                                            <h4 className="guideline-title">{guideline.title}</h4>
                                            <p className="guideline-description">{guideline.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="modal-actions">
                            <button className="btn btn-primary">Start Challenge</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChallengesPage; 