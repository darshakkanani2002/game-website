import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../tournament/Footer";

export default function Questions() {
    const [timeLeft, setTimeLeft] = useState(30);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [skippedAnswers, setSkippedAnswers] = useState(0);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [animate, setAnimate] = useState(true); // New state for animations
    const navigate = useNavigate();

    // Questions data
    const questions = [
        {
            question: "How many games did Mark Stein play for Bournemouth?",
            options: [
                { text: "800", option: "A" },
                { text: "100", option: "B" },
                { text: "500", option: "C" },
                { text: "400", option: "D" },
            ],
            correctAnswer: "B",
        },
        {
            question: "Who won the 2018 FIFA World Cup?",
            options: [
                { text: "France", option: "A" },
                { text: "Croatia", option: "B" },
                { text: "Germany", option: "C" },
                { text: "Brazil", option: "D" },
            ],
            correctAnswer: "A",
        },
        {
            question: "What is the capital of Australia?",
            options: [
                { text: "Sydney", option: "A" },
                { text: "Melbourne", option: "B" },
                { text: "Canberra", option: "C" },
                { text: "Perth", option: "D" },
            ],
            correctAnswer: "C",
        },
        {
            question: "What is the largest planet in our solar system?",
            options: [
                { text: "Earth", option: "A" },
                { text: "Jupiter", option: "B" },
                { text: "Saturn", option: "C" },
                { text: "Mars", option: "D" },
            ],
            correctAnswer: "B",
        },
        {
            question: "Which element has the chemical symbol O?",
            options: [
                { text: "Oxygen", option: "A" },
                { text: "Gold", option: "B" },
                { text: "Osmium", option: "C" },
                { text: "Oganesson", option: "D" },
            ],
            correctAnswer: "A",
        },
        {
            question: "What is the boiling point of water in Celsius?",
            options: [
                { text: "90°C", option: "A" },
                { text: "50°C", option: "B" },
                { text: "100°C", option: "C" },
                { text: "150°C", option: "D" },
            ],
            correctAnswer: "C",
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: [
                { text: "Charles Dickens", option: "A" },
                { text: "William Shakespeare", option: "B" },
                { text: "Mark Twain", option: "C" },
                { text: "Jane Austen", option: "D" },
            ],
            correctAnswer: "B",
        },
        {
            question: "Which is the smallest continent?",
            options: [
                { text: "Asia", option: "A" },
                { text: "Australia", option: "B" },
                { text: "Europe", option: "C" },
                { text: "Antarctica", option: "D" },
            ],
            correctAnswer: "B",
        },
        {
            question: "What is the chemical formula for water?",
            options: [
                { text: "H2O", option: "A" },
                { text: "CO2", option: "B" },
                { text: "O2", option: "C" },
                { text: "NaCl", option: "D" },
            ],
            correctAnswer: "A",
        },
        {
            question: "Which year did the Titanic sink?",
            options: [
                { text: "1905", option: "A" },
                { text: "1912", option: "B" },
                { text: "1920", option: "C" },
                { text: "1930", option: "D" },
            ],
            correctAnswer: "B",
        },
        {
            question: "How Many Year Ram go to Vanvaas",
            options: [
                { text: "15", option: "A" },
                { text: "16", option: "B" },
                { text: "14", option: "C" },
                { text: "18", option: "D" },
            ],
            correctAnswer: "C",
        },
    ];

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        if (timeLeft > 0 && !selectedAnswer) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0 && !selectedAnswer) {
            handleSkip();
        }
    }, [timeLeft, selectedAnswer]);

    const handleAnswerClick = (answer) => {
        if (selectedAnswer) return;
        setSelectedAnswer(answer);

        if (answer === currentQuestion.correctAnswer) {
            setCorrectAnswers((prev) => prev + 1);
        } else {
            setWrongAnswers((prev) => prev + 1);
            setShowCorrectAnswer(true); // Show the correct answer when the wrong answer is selected
        }

        setTimeout(() => {
            nextQuestion();
        },1100); // Delay to show the correct answer highlight
    };

    const handleSkip = () => {
        setSkippedAnswers((prev) => prev + 1);
        nextQuestion();
    };

    const nextQuestion = () => {
        setAnimate(false); // Trigger fade-out animation
        setTimeout(() => {
            setSelectedAnswer(null);
            setShowCorrectAnswer(false);
            setTimeLeft(30);

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            } else {
                handleQuizCompletion();
            }
            setAnimate(true); // Trigger fade-in animation
        }, 100); // Match duration with CSS animation timing
    };

    const handleQuizCompletion = () => {
        const quizData = {
            correct: correctAnswers,
            wrong: wrongAnswers,
            skipped: skippedAnswers,
        };

        navigate("/quiz-analysis", { state: quizData });
    };

    return (
        <div>
            <div className="question-bg">
                <div className="container-fluid pt-5">
                    <div className="d-flex justify-content-end">
                        <div className="timer-box d-flex align-items-center">
                            <div className="question-quize-time h6">
                                Quiz<br />time
                            </div>
                            <div className={`timer-circle quize-timer ${timeLeft <= 10 ? "warning" : ""}`}>
                                <h6 className="timer-text mb-0">{timeLeft}</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row mb-3">
                        <div className="col-12 text-center">
                            <h5 className="mb-0 fw-bold">
                                Question {currentQuestionIndex}/{questions.length}
                            </h5>
                        </div>
                        <div className="col-12 text-center mt-4 question-txt-shadow">
                            <div className={`questions-bg py-3 ${animate ? "fade-in" : "fade-out"}`}>
                                <h3>{currentQuestion.question}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-4">
                    <div className="row justify-content-center">
                        {currentQuestion.options.map(({ text, option }) => {
                            const isSelected = selectedAnswer === option;
                            const isCorrect = option === currentQuestion.correctAnswer;

                            const answerClass = isSelected
                                ? isCorrect
                                    ? "border-green"
                                    : "border-red"
                                : showCorrectAnswer && isCorrect
                                ? "border-green"
                                : "";

                            const answerAlpha = isSelected
                                ? isCorrect
                                    ? "bg-green"
                                    : "bg-red"
                                : showCorrectAnswer && isCorrect
                                ? "bg-green"
                                : "";

                            return (
                                <div
                                    key={option}
                                    className={`col-5 text-center mb-3 position-relative ${answerClass} ${
                                        animate ? "fade-in" : "fade-out"
                                    }`}
                                    onClick={() => timeLeft > 0 && !selectedAnswer && handleAnswerClick(option)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className={`question-answer-sec py-3 ${answerClass}`}>
                                        <h5 className="mb-0">{text}</h5>
                                    </div>
                                    <div className={`answers-text py-2 ${answerAlpha}`}>
                                        <span>{option}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="container my-4">
                    <button
                        className="btn btn-primary me-2"
                        onClick={handleSkip}
                        disabled={!!selectedAnswer}
                    >
                        Skip
                    </button>
                </div>

                <div className="container px-4 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-4 text-center">
                            <div className="correct-answer py-3">
                                <span className="fw-semibold">Correct: {correctAnswers}</span>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <div className="wrong-answer py-3">
                                <span className="fw-semibold">Wrong: {wrongAnswers}</span>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <div className="skipped-answer py-3">
                                <span className="fw-semibold">Skipped: {skippedAnswers}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
