import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import Footer from '../tournament/Footer';

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export default function QuizAnalysis() {
  // Get the quiz results from the location state
  const location = useLocation();
  
  // Set default values for quizData in case location.state is null or undefined
  const [quizData, setQuizData] = useState({
    wrong: 0,
    correct: 0,
    skipped: 0,
  });

  useEffect(() => {
    // Check if location.state exists before accessing it
    if (location.state) {
      setQuizData(location.state);  // Update quiz data with the passed results
    }
  }, [location]);

  const data = {
    labels: ['Wrong', 'Correct', 'Skipped'],
    datasets: [
      {
        label: 'Quiz Result',
        data: [quizData.wrong, quizData.correct, quizData.skipped],
        backgroundColor: ['#DD292C', '#71AA0B', '#FFA600'],
        hoverBackgroundColor: ['#DD292C', '#71AA0B', '#FFA600'],
      },
    ],
  };

  return (
    <div className='content-padding'>
      <div className="question-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center pt-4">
              <div>
                <img
                  src="../../../public/img/rule-img.png"
                  alt="rule-img"
                  className="img-fluid"
                />
              </div>
              <div>
                <h4>
                  Play & Win upto 20,000 <br /> Coins
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="conatiner my-4">
          <div className="row justify-content-center">
            <div className="col-4 text-center">
              <div className="score-text py-3">
                <p className="fw-semibold mb-0">Your Score: {quizData.correct}</p>
                <p className="fw-semibold mb-0">Correct Answers: {quizData.correct}</p>
              </div>
            </div>

            <div className="col-4 text-center">
              <div className="score-text py-3">
                <p className="fw-semibold mb-0">Your Score: {quizData.wrong}</p>
                <p className="fw-semibold mb-0">Wrong Answers: {quizData.wrong}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h3>View Your Quiz Result</h3>
              </div>
            </div>
            <div className="col-12 pb-5">
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ width: '45%' }}>
                    <Doughnut data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
