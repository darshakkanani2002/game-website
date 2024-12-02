import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Test_API } from '../Config';

export default function Rules() {
    const [images, setImagesData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []); // Add an empty dependency array to prevent repeated calls

    const fetchData = () => {
        axios.post(`${Test_API}question/list`)
            .then(response => {
                console.log("Question Data ==>", response.data);
                // Ensure the data is an array before setting state
                setImagesData(Array.isArray(response.data.data) ? response.data.data : []);
            })
            .catch(error => {
                console.error("Error fetching question data:", error);
            });
    };

    return (
        <div>
            <div className='question-bg'>
                <div className='pt-4'>
                    {/* Rule Image */}
                    <div className='container-fluid'>
                        {Array.isArray(images) && images.map((item, index) => (
                            <div className='row align-items-center' key={index}>
                                <div className='col-4'>
                                    <div>
                                        <img
                                            crossOrigin="anonymous"
                                            src={`http://192.168.1.107:10500/${item.vImage}`}
                                            alt={`rule-img-${index}`}
                                            className='img-fluid'
                                        />
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <div>
                                        <h3 className='mb-0'>{item.vName}</h3>
                                        <p className='mb-0'>
                                            <span className='entry-coin-text'>
                                                Entry Fees: {item.iEntry}
                                            </span>
                                        </p>
                                        <h6>Your Current Balance: {item.currentBalance || "900"}</h6>
                                    </div>
                                    <div className='view-rank-sec'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <h6 className='mb-0'>View Rank</h6>
                                            </div>
                                            <div>
                                                <img
                                                    src={item.rankIconUrl || "../../../public/img/rule-rank-ic.png"}
                                                    alt={`rule-rank-ic-${index}`}
                                                    className='img-fluid'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 text-center'>
                                    <Link to={`/questions/${item._id}`}>
                                        <div className='question-no text-white py-2 px-4 mb-3 text-uppercase'>
                                            Start Tournament
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-3'>
                                <div>
                                    <h5 className='text-how-to-play'>How To Play</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='rule-shadow'>
                                <div className='rule-box p-5'>
                                    <div className='d-flex mb-3'>
                                        <div className='me-3'>
                                            <img src="../../../public/img/rule-arrow-ic.png" alt="rule-arrow-ic" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h5>You got 90 seconds.</h5>
                                        </div>
                                    </div>
                                    <div className='d-flex mb-3'>
                                        <div className='me-3'>
                                            <img src="../../../public/img/rule-arrow-ic.png" alt="rule-arrow-ic" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h5>Answer as many questions as you can.</h5>
                                        </div>
                                    </div>
                                    <div className='d-flex mb-3'>
                                        <div className='me-3'>
                                            <img src="../../../public/img/rule-arrow-ic.png" alt="rule-arrow-ic" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h5>Entry Fees: 5</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 text-center mt-4'>
                            <h5>Tap below to start playing this tournament. 5 coins will be deducted from your wallet when you tap below.</h5>
                        </div>
                        <div className='col-12 pb-4'>
                            <div className='tournament-rule-box p-4'>
                                <h2 className='tournament-rule-text'>Tournament Rules</h2>
                                <div>
                                    <ul className='tournament-rule-list'>
                                        <li className='mb-2 fw-semibold'>You'll get 90 seconds to answer as many questions as you can [Max questions you can answer is 25].</li>
                                        <li className='mb-2 fw-semibold'>There are 4 options for each question; one of them is the correct answer.</li>
                                        <li className='mb-2 fw-semibold'>You'll get 20 points for each right answer.</li>
                                        <li className='mb-2 fw-semibold'>You'll get (-10) points for each wrong answer.</li>
                                        <li className='mb-2 fw-semibold'>You'll get 10 points as a hattrick bonus if you answer 3 questions correctly in a row.</li>
                                        <li className='mb-2 fw-semibold'>The winner is decided based on the score of all participants in the quiz.</li>
                                        <li className='mb-0 fw-semibold'>The winner for each quiz will be declared at a predefined time.</li>
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
