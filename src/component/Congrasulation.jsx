import React from 'react'
import { Link } from 'react-router-dom'

export default function Congrasulation() {
    return (
        <div>
            <div className='question-bg'>
                <div className='congrasulation-banner d-flex align-items-center justify-content-center'>
                    <div className='text-center'>
                        <div className='text-cente'>
                            <h1 className='congratulation-text'>congratulation</h1>
                        </div>
                        <Link to='/tournament'>
                            <div className='question-no text-white py-2 px-4 mb-3 text-uppercase'>
                                Let's Start
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 mt-5'>
                            <div>
                                <h2 className='quiz-game-text'>Play Quiz and Games</h2>
                                <ul className='quiz-game-list'>
                                    <li>Explore over 45 categories of quizzes, including Entertainment, Cricket, Business, and more!</li>
                                    <li>Participate in hourly-updated tournaments and challenge yourself to win.</li>
                                    <li>Earn coins for each task you complete.</li>
                                    <li>Join millions of quiz enthusiasts who trust us as their go-to platform for quizzes.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
