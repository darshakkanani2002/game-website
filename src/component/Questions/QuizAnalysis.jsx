import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import Footer from "../tournament/Footer";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function QuizAnalysis() {
    const location = useLocation();
    const [quizData, setQuizData] = useState({ wrong: 0, correct: 0, skipped: 0 });

    useEffect(() => {
        if (location.state) setQuizData(location.state);
    }, [location]);

    const data = {
        labels: ["Wrong", "Correct", "Skipped"],
        datasets: [
            {
                data: [quizData.wrong || 0.01, quizData.correct || 0.01, quizData.skipped || 0.01],
                backgroundColor: ["#DD292C", "#71AA0B", "#FFA600"],
            },
        ],
    };

    return (
        <div>
            <div className="question-bg">
                <div className="text-center">
                    <h3>View Your Quiz Result</h3>
                </div>
                <div style={{ width: "50%", margin: "0 auto" }}>
                    <Doughnut data={data} />
                </div>
                <Footer />
            </div>
        </div>
    );
}
