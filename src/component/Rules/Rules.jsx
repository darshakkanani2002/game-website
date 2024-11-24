import React from 'react'
import { Link } from 'react-router-dom'

export default function Rules() {
    return (
        <div>
            <div className='question-bg'>
                <div className='pt-4'>
                    {/* Rule Image  */}
                    <div className='container-fluid'>
                        <div className='row align-items-center'>
                            <div className='col-4'>
                                <div>
                                    <img src="../../../public/img/rule-img.png" alt="rule-img" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-8'>
                                <div>
                                    <h3 className='mb-0'>Play Harry potter & Win upto 20,000 Coins</h3>
                                    <p className='mb-0'>
                                        <span className='entry-coin-text'>Entry Fees : 05</span>
                                    </p>
                                    <h6>Your Current Balance : 100</h6>
                                </div>
                                <div className='view-rank-sec'>
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <h6 className='mb-0'>View Rank</h6>
                                        </div>
                                        <div>
                                            <img src="../../../public/img/rule-rank-ic.png" alt="rule-rank-ic" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <div className='me-3' >
                                            <img src="../../../public/img/rule-arrow-ic.png" alt="rule-arrow-ic" className='img-fluid' />
                                        </div>
                                        <div>
                                            <h5>Entry Fees : 5</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 text-center mt-4'>
                            <h5>Tap below to start Playing this tournament. 5 coins will be deduct from your wallet when you tap below.</h5>
                        </div>
                        <div className='col-12 text-center'>
                            <Link to='/questions'>
                                <div className='question-no text-white py-2 px-4 mb-3 text-uppercase'>
                                    Start Tournament
                                </div>
                            </Link>
                        </div>
                        <div className='col-12 pb-4'>
                            <div className='tournament-rule-box p-4'>
                                <h2 className='tournament-rule-tetx'>Tournaments Rules</h2>
                                <div>
                                    <ul className='tournament-rule-list'>
                                        <ol className='mb-2 fw-semibold'>You'll get 90 second to answer as many questions as you can [Max questions you can answer is 25].</ol>
                                        <ol className='mb-2 fw-semibold'>There are 4 option for each questions, One of them is the answer for the questions.</ol>
                                        <ol className='mb-2 fw-semibold'>You'll get 20 points for each right answer.</ol>
                                        <ol className='mb-2 fw-semibold'>You'll get (-) 10 points for each wrong answer.</ol>
                                        <ol className='mb-2 fw-semibold'>You'll get 10 points as hattrick bonus if you answer 3 questions correctly in a row.</ol>
                                        <ol className='mb-2 fw-semibold'>The winner for the quiz is decided depending upon the score of all the users that participated in the quiz.</ol>
                                        <ol className='mb-0 fw-semibold'>Winner for each quiz will be declared at a predefined time.</ol>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
