import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Img_Url, Test_API } from '../Config';

export default function Tournament() {
    const [images, setImagesData] = useState([]);
    useEffect(() => {
        fetchData();
    })

    const fetchData = () => {
        axios.post(`${Test_API}question/list`).then(response => {
            console.log("tournament Data ==>", response.data.data);
            setImagesData(Array.isArray(response.data.data) ? response.data.data : []);
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div>
                <div className='question-bg'>
                    <div className='py-4'>
                        <div className='d-flex align-items-center'>
                            <div className='me-2'>
                                <img src="/public/img/game-remoret-ic.svg" alt="game-remoret-ic" className='img-fluid' />
                            </div>
                            <div>
                                <p className='mb-0'>Quiz Tournaments</p>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='row'>
                            {images.map((item, index) => (
                                <div className='col-4 mb-3'>
                                    <div>
                                        <img 
                                        crossOrigin="anonymous"
                                        src={`${Img_Url}${item.vImage}`} alt="tournament-img-01" className='img-fluid mb-1' />
                                        <div>
                                            <p className='tournament-winner-text mb-0'>
                                                Winner declaires in 0-4 : 0-13 : 0-26
                                            </p>
                                            <h6 className='movi-name-text mb-0'>
                                                {item.vName}
                                            </h6>
                                            <p className='tournament-user-playing-text mb-0'>
                                                143 Users Playing
                                            </p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <div className='d-flex'>
                                                    <div className='me-1'>
                                                        <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                    </div>
                                                    <div>
                                                        <span className='entry-coin-text'>Entry : {item.iEntry} Coins</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link to={`/rule/${item._id}`}> <button className='tournament-play-btn'>Play</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-01.png" alt="tournament-img-01" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to='/rule'> <button className='tournament-play-btn'>Play</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-02.png" alt="tournament-img-02" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-03.png" alt="tournament-img-03" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-04.png" alt="tournament-img-04" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-05.png" alt="tournament-img-05" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-06.png" alt="tournament-img-06" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-07.png" alt="tournament-img-07" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-08.png" alt="tournament-img-08" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-09.png" alt="tournament-img-09" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-10.png" alt="tournament-img-10" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-11.png" alt="tournament-img-11" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-12.png" alt="tournament-img-12" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-13.png" alt="tournament-img-13" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-14.png" alt="tournament-img-14" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-15.png" alt="tournament-img-15" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-15.png" alt="tournament-img-15" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-16.png" alt="tournament-img-16" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mb-3'>
                                <div>
                                    <img src="../../../public/img/tournament-img-17.png" alt="tournament-img-17" className='img-fluid mb-1' />
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declaires in 0-4 : 0-13 : 0-26
                                        </p>
                                        <h6 className='movi-name-text mb-0'>
                                            Play Harry Potter Quiz & Win Upto 40000 Coins
                                        </h6>
                                        <p className='tournament-user-playing-text mb-0'>
                                            143 Users Playing
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <div className='d-flex'>
                                                <div className='me-1'>
                                                    <img src="../../../public/img/entry-coin-ic.svg" alt="entry-coin-ic" className='img-fluid' />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>Entry : 10 Coins</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='tournament-play-btn'>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}
