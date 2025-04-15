export interface Leaderboard {
    rank: number;
    user: string;
    score: string;
}

export interface Challenge {
    id: string;
    title: string;
    description: string;
    timeRemaining: string;
    submissions: number;
    metric: string;
    deadline: string;
    datasetTitle: string;
    datasetDescription: string;
    leaderboard: Leaderboard[];
}

export const mockChallenges: Challenge[] = [
    {
        id: "challenge-1",
        title: "Sentiment Analysis Competition",
        description: "Develop models to classify movie reviews as positive or negative with high accuracy.",
        timeRemaining: "08:25:15",
        submissions: 112,
        metric: "Accuracy",
        deadline: "July 19 2025",
        datasetTitle: "Movie Reviews Dataset",
        datasetDescription: "Sentiment-labeled movie reviews classification tasks",
        leaderboard: [
            { rank: 1, user: "datascientist42", score: "0.945" },
            { rank: 2, user: "modelsage", score: "0.938" },
            { rank: 3, user: "ALmaster", score: "0.932" }
        ]
    },
    {
        id: "challenge-2",
        title: "Image Classification Challenge",
        description: "Create algorithms to classify images from a diverse dataset of everyday objects.",
        timeRemaining: "16:47:32",
        submissions: 89,
        metric: "F1 Score",
        deadline: "August 5 2025",
        datasetTitle: "Common Objects Dataset",
        datasetDescription: "10,000 labeled images across 100 common object categories",
        leaderboard: [
            { rank: 1, user: "visionpro", score: "0.912" },
            { rank: 2, user: "deeplearner", score: "0.897" },
            { rank: 3, user: "pixelmaster", score: "0.885" }
        ]
    },
    {
        id: "challenge-3",
        title: "Time Series Forecasting",
        description: "Predict future values in time series data from energy consumption patterns.",
        timeRemaining: "23:11:09",
        submissions: 65,
        metric: "RMSE",
        deadline: "September 12 2025",
        datasetTitle: "Energy Consumption Data",
        datasetDescription: "Hourly energy consumption readings from 10 cities over 5 years",
        leaderboard: [
            { rank: 1, user: "forecaster", score: "12.45" },
            { rank: 2, user: "timewizard", score: "13.78" },
            { rank: 3, user: "statsguru", score: "15.23" }
        ]
    },
    {
        id: "challenge-4",
        title: "Natural Language Understanding",
        description: "Build models that understand and respond to complex natural language queries.",
        timeRemaining: "05:59:40",
        submissions: 73,
        metric: "BLEU Score",
        deadline: "June 30 2025",
        datasetTitle: "Conversational Query Dataset",
        datasetDescription: "Multi-turn conversations with complex information-seeking queries",
        leaderboard: [
            { rank: 1, user: "languagemaster", score: "0.782" },
            { rank: 2, user: "nlp_expert", score: "0.769" },
            { rank: 3, user: "semantics101", score: "0.754" }
        ]
    }
]; 