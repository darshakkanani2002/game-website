import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Game() {
    return (
        <div className='content-padding'>
            <div className='background-height-bg overflow-auto'>
                <div className='py-4'>
                    <div className='d-flex align-items-center'>
                        <div className='me-2'>
                            <img src="/public/img/all-game-ic.svg" alt="all-game-ic" className='img-fluid' />
                        </div>
                        <div>
                            <p className='mb-0'>All Games</p>
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className='row py-3'>
                            <div className='col-3'>
                                <div className='position-relative'>
                                    <img src="../../../public/img/all-game-img-01.png" alt="all-game-img-01" className='img-fluid all-game-img' />
                                    <div className='game-name-plate'>
                                        <div className='d-flex align-items-center justify-content-between game-name-btn py-3 px-2'>
                                            <div>
                                                <span className='fw-semibold'>Merge Block</span>
                                            </div>
                                            <div>
                                                <Link to='/' className='game-play-btn py-2 px-3 rounded-pill'>Play</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-3'>
                                <div className='position-relative'>
                                    <img src="../../../public/img/all-game-img-02.png" alt="all-game-img-02" className='img-fluid all-game-img' />
                                    <div className='game-name-plate'>
                                        <div className='d-flex align-items-center justify-content-between game-name-btn py-3 px-2'>
                                            <div>
                                                <span className='fw-semibold'>Sling Tomb</span>
                                            </div>
                                            <div>
                                                <Link to='/' className='game-play-btn py-2 px-3 rounded-pill'>Play</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-3'>
                                <div className='position-relative'>
                                    <img src="../../../public/img/all-game-img-03.png" alt="all-game-img-03" className='img-fluid all-game-img' />
                                    <div className='game-name-plate'>
                                        <div className='d-flex align-items-center justify-content-between game-name-btn py-3 px-2'>
                                            <div>
                                                <span className='fw-semibold'>Sling Tomb</span>
                                            </div>
                                            <div>
                                                <Link to='/' className='game-play-btn py-2 px-3 rounded-pill'>Play</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-3'>
                                <div className='position-relative'>
                                    <img src="../../../public/img/all-game-img-04.png" alt="all-game-img-04" className='img-fluid all-game-img' />
                                    <div className='game-name-plate'>
                                        <div className='d-flex align-items-center justify-content-between game-name-btn py-3 px-2'>
                                            <div>
                                                <span className='fw-semibold'>Sling Tomb</span>
                                            </div>
                                            <div>
                                                <Link to='/' className='game-play-btn py-2 px-3 rounded-pill'>Play</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}
