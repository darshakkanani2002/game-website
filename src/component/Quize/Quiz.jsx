import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      text: 'Which one is your favorite movie? Select one.',
      options: [
        { img: '../../public/img/movie-img-01.png' },
        { img: '../../public/img/movie-img-02.png' },
        { img: '../../public/img/movie-img-03.png' },
        { img: '../../public/img/movie-img-04.png' },
      ],
    },
    {
      id: 2,
      text: 'Which one is your favorite game? Select one.',
      options: [
        { img: '../../public/img/game-img-01.png' },
        { img: '../../public/img/game-img-02.png' },
        { img: '../../public/img/game-img-03.png' },
        { img: '../../public/img/game-img-04.png' },
      ],
    },
  ];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setSelectedAnswer(null);

      if (currentQuestion === questions.length) {
        navigate('/congrasulation'); // Navigate to the congratulation page
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    }, 1000); // Animation duration
  };

  const current = questions.find((q) => q.id === currentQuestion);

  return (
    <div>
      <div className="question-bg">
        <div>
          <div className="text-center pt-5 question-text">
            <h2 className="fw-bold">Let’s start with your Fantastic Brain</h2>
            <h3>Answer these 2 Simple Questions and</h3>
            <h2 className="coins-text">Get 100 Coins</h2>
            <div className="question-no text-white p-2 mb-3">
              Question {currentQuestion}/2
            </div>
          </div>
        </div>
        <div>
          <div className="container-fluid">
            <div className={`row ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              <div className="col-12 text-center">
                <p className="queation-text text-capitalize">{current.text}</p>
              </div>
              {current.options.map((option, index) => (
                <div className="col-3" key={index}>
                  <div
                    className={`answer-option ${selectedAnswer === index ? 'selected' : ''
                      }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <img src={option.img} alt="" className="img-fluid" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mt-5">
                <div>
                  <h2 className="quiz-game-text">Play Quiz and Games</h2>
                  <ul className="quiz-game-list">
                    <li>
                      Explore over 45 categories of quizzes, including
                      Entertainment, Cricket, Business, and more!
                    </li>
                    <li>
                      Participate in hourly-updated tournaments and challenge
                      yourself to win.
                    </li>
                    <li>Earn coins for each task you complete.</li>
                    <li>
                      Join millions of quiz enthusiasts who trust us as their
                      go-to platform for quizzes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
