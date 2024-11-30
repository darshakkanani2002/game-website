import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    // Check if the current path matches specific routes
    const isSpecialRoute = 
        location.pathname === '/tournament' || 
        location.pathname === '/stories' || 
        location.pathname === '/game';

    return (
        <div>
            {isSpecialRoute ? (
                // First navbar for special routes
                <div className="bg-white py-4 navigationbar">
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to="/" className="logo">GamecWebs</Link>
                        </div>
                        <div className="navbar-coins px-5 py-2">
                            <span>500 coins</span>
                            <img src="/img/coins-ic.svg" alt="coins-ic" className="img-fluid" />
                        </div>
                    </div>
                </div>
            ) : (
                // Second navbar for all other routes (default)
                <div className="bg-white py-4 navigationbar">
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to="/" className="logo">GamecWebs</Link>
                        </div>
                        <div>
                            <img src="/img/day-mode-ic.svg" alt="day-mode-ic" className="img-fluid" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
