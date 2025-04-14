import React from 'react';
import '../styles/ChallengeCard.css';

interface LeaderboardEntry {
    rank: number;
    user: string;
    score: string;
}

interface ChallengeCardProps {
    title: string;
    timeRemaining: string;
    submissions: number;
    metric: string;
    deadline: string;
    datasetTitle: string;
    datasetDescription: string;
    leaderboard: LeaderboardEntry[];
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
    title,
    timeRemaining,
    submissions,
    metric,
    deadline,
    datasetTitle,
    datasetDescription,
    leaderboard
}) => {
    return (
        <div className="challenge-card">
            <div className="challenge-header">
                <div className="challenge-title">{title}</div>
                <button className="start-challenge-btn">Start Challenge</button>
            </div>
            
            <div className="time-remaining">{timeRemaining}</div>
            
            <div className="challenge-stats">
                <div className="stat-item">
                    <div className="stat-label">Submissions</div>
                    <div className="stat-value">{submissions}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Metric</div>
                    <div className="stat-value">{metric}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Deadline</div>
                    <div className="stat-value">{deadline}</div>
                </div>
            </div>
            
            <div className="section-title">Dataset</div>
            <div className="dataset-section">
                <div className="dataset-info">
                    <div className="dataset-title">{datasetTitle}</div>
                    <div className="dataset-description">{datasetDescription}</div>
                </div>
                <button className="download-btn">Download</button>
            </div>
            
            <div className="section-title">Leaderboard</div>
            <div className="leaderboard">
                <div className="leaderboard-header">
                    <div className="leaderboard-rank">Rank</div>
                    <div className="leaderboard-user">User</div>
                    <div className="leaderboard-score">Score</div>
                </div>
                
                {leaderboard.map((entry) => (
                    <div key={entry.rank} className="leaderboard-row">
                        <div className="leaderboard-rank">{entry.rank}</div>
                        <div className="leaderboard-user">{entry.user}</div>
                        <div className="leaderboard-score">{entry.score}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChallengeCard; 