import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();

    // Helper function to determine active class
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div>
            <div className='container position-fixed w-51 bottom-0 footer-shadow'>
                <div className='row'>
                    <div className='col-4 text-center px-0'>
                        <Link to='/tournament'>
                            <div className={`fotter-img-txt-bg py-2 ${isActive('/tournament')}`}>
                                <img src="../../../public/img/tournament-ic.svg" alt="tournament-ic" className='img-fluid fotter-img' />
                                <h5 className='footer-text text-capitalize mb-0'>tournaments</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='col-4 text-center px-0'>
                        <Link to='/stories'>
                            <div className={`fotter-img-txt-bg py-2 ${isActive('/stories')}`}>
                                <img src="../../../public/img/story-ic.svg" alt="story-ic" className='img-fluid fotter-img' />
                                <h5 className='footer-text text-capitalize mb-0'>story</h5>
                            </div>
                        </Link>
                    </div>
                    <div className='col-4 text-center px-0'>
                        <Link to='/game'>
                            <div className={`fotter-img-txt-bg py-2 ${isActive('/game')}`}>
                                <img src="../../../public/img/game-ic.svg" alt="game-ic" className='img-fluid fotter-img' />
                                <h5 className='footer-text text-capitalize mb-0'>game</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
