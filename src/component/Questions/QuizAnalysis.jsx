import React from 'react'

export default function QuizAnalysis() {
    return (
        <div>
            <div className='question-bg'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 text-center pt-4'>
                            <div>
                                <img src="../../../public/img/rule-img.png" alt="rule-img" className='img-fluid' />
                            </div>
                            <div>
                                <h4>Play & Win upto 20,000 <br></br> Coins</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='conatiner my-4'>
                    <div className='row justify-content-center'>
                        <div className='col-4 text-center'>
                            <div className='score-text py-3'>
                                <p className='fw-semibold mb-0'>Your Score : 0</p>
                                <p className='fw-semibold mb-0'>11</p>
                            </div>
                        </div>

                        <div className='col-4 text-center'>
                            <div className='score-text py-3'>
                                <p className='fw-semibold mb-0'>Your Score : 0</p>
                                <p className='fw-semibold mb-0'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div>
                                <h3>View Your Quiz Result</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
