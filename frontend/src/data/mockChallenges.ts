export interface Leaderboard {
    rank: number;
    user: string;
    score: string;
}

export interface SubmissionGuideline {
    title: string;
    description: string;
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
    submissionGuidelines: SubmissionGuideline[];
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
        ],
        submissionGuidelines: [
            { 
                title: "GitHub Repository", 
                description: "Submit a link to a public GitHub repository with your code and documentation." 
            },
            { 
                title: "Technical Report", 
                description: "Include a detailed report (PDF format) explaining your approach, methodology, and results analysis (max 5 pages)." 
            },
            { 
                title: "Model Weights", 
                description: "Upload your trained model weights in a standard format (PyTorch .pt, TensorFlow .h5, or ONNX)." 
            },
            { 
                title: "Reproducibility", 
                description: "Include a requirements.txt file and clear instructions to reproduce your results." 
            },
            { 
                title: "Inference Script", 
                description: "Provide a simple script that takes input data and produces predictions using your model." 
            }
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
        ],
        submissionGuidelines: [
            { 
                title: "GitHub Repository", 
                description: "Submit a link to a public GitHub repository with your code and documentation." 
            },
            { 
                title: "Model Architecture", 
                description: "Provide a detailed diagram and explanation of your model architecture." 
            },
            { 
                title: "Training Process", 
                description: "Document your training process, including hyperparameters, data augmentation techniques, and hardware used." 
            },
            { 
                title: "Evaluation Results", 
                description: "Include a comprehensive evaluation of your model on the test set, with class-wise performance metrics." 
            },
            { 
                title: "Docker Container", 
                description: "Provide a Dockerfile to containerize your solution for easy reproduction." 
            }
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
        ],
        submissionGuidelines: [
            { 
                title: "Feature Engineering", 
                description: "Document all feature engineering steps with justification for each feature created." 
            },
            { 
                title: "Model Comparison", 
                description: "Compare at least three different forecasting approaches and explain your final choice." 
            },
            { 
                title: "Error Analysis", 
                description: "Provide detailed error analysis across different time horizons and patterns." 
            },
            { 
                title: "Visualization", 
                description: "Include visualizations of your predictions vs. actual values for representative time periods." 
            },
            { 
                title: "API Endpoint", 
                description: "Implement a simple API endpoint that accepts time series data and returns forecasts." 
            }
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
        ],
        submissionGuidelines: [
            { 
                title: "Pre-processing Pipeline", 
                description: "Detail your text pre-processing pipeline with clear explanation of each step." 
            },
            { 
                title: "Model Implementation", 
                description: "Provide complete implementation code with comments explaining the approach." 
            },
            { 
                title: "Evaluation Framework", 
                description: "Include your evaluation framework that measures both automated metrics and human evaluation if applicable." 
            },
            { 
                title: "Error Cases", 
                description: "Analyze and document common error cases and potential improvements." 
            },
            { 
                title: "Interactive Demo", 
                description: "Create a simple web interface or notebook that allows interactive testing of your model." 
            }
        ]
    }
]; 