import React from 'react'
import Footer from '../tournament/Footer'

export default function Questions() {
    return (
        <div>
            <div className='question-bg'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 pt-4 d-flex justify-content-end'>
                            <div className='d-flex align-items-center'>
                                <div className='question-quize-time'>
                                    <h6 className='mb-0'>Quiz <br /> Time</h6>
                                </div>
                                <div>
                                    <div className='quize-timer'>
                                        <h6 className='mb-0'>
                                            30
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className='row mb-3'>
                        <div className='col-12 text-center'>
                            <h5 className='mb-0 fw-bold'>Question 1/10</h5>
                        </div>
                        <div className='col-12 text-center mt-4 question-txt-shadow'>
                            <div className='questions-bg py-3'>
                                <h3>How many games did Mark Stein play for Bournemouth?</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container px-4'>
                    <div className='row justify-content-center'>
                        <div className='col-5 text-center mb-3 position-relative'>
                            <div className='question-answer-sec py-3'>
                                <h5 className='mb-0'>800</h5>
                            </div>
                            <div className='answers-text py-2'>
                                <span>A</span>
                            </div>
                        </div>
                        <div className='col-5 text-center mb-3 position-relative'>
                            <div className='question-answer-sec py-3'>
                                <h5 className='mb-0'>100</h5>
                            </div>
                            <div className='answers-text py-2'>
                                <span>B</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container px-4'>
                    <div className='row justify-content-center'>
                        <div className='col-5 text-center mb-3 position-relative'>
                            <div className='question-answer-sec py-3'>
                                <h5 className='mb-0'>500</h5>
                            </div>
                            <div className='answers-text py-2'>
                                <span>C</span>
                            </div>
                        </div>
                        <div className='col-5 text-center mb-3 position-relative'>
                            <div className='question-answer-sec py-3'>
                                <h5 className='mb-0'>400</h5>
                            </div>
                            <div className='answers-text py-2'>
                                <span>D</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='conatiner my-4'>
                    <div className='row justify-content-center'>
                        <div className='col-4 text-center'>
                            <div className='score-text py-3'>
                                <span className='fw-semibold'>Your Score : 0</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container px-4 pb-5'>
                    <div className='row justify-content-center'>
                        <div className='col-4 text-center'>
                            <div className='correct-answer py-3'>
                                <span className='fw-semibold'>Correct : 0</span>
                            </div>
                        </div>
                        <div className='col-4 text-center'>
                            <div className='wrong-answer py-3'>
                                <span className='fw-semibold'>Wrong : 0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}
