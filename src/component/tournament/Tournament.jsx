import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Img_Url, Test_API } from '../Config';

export default function Tournament() {
    const [images, setImagesData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.post(`${Test_API}question/list`).then(response => {
            console.log("Tournament Data ==>", response.data.data);
            setImagesData(Array.isArray(response.data.data) ? response.data.data : []);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className='content-padding'>
            <div className='background-height-bg overflow-auto'>
                <div className='py-4'>
                    <div className='d-flex align-items-center'>
                        <div className='me-2'>
                            <img
                                src="/public/img/game-remoret-ic.svg"
                                alt="game-remoret-ic"
                                className='img-fluid'
                            />
                        </div>
                        <div>
                            <p className='mb-0'>Quiz Tournaments</p>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        {images.map((item) => (
                            <div className='col-4 mb-3' key={item._id}>
                                <div>
                                    <div className='position-relative'>
                                        <img
                                            crossOrigin="anonymous"
                                            src={`${Img_Url}${item.vImage}`}
                                            alt="tournament-img-01"
                                            className='img-fluid mb-1 border border-1 border-dark rounded'
                                        />
                                        <div className='tournament-lve-text rounded-3 text-center'>
                                            <p className='mb-0 px-2 '>
                                                Live <br></br><span>({item.liveUsers || 0} Users)</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='tournament-winner-text mb-0'>
                                            Winner declares in 0-4 : 0-13 : 0-26
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
                                                    <img
                                                        src="../../../public/img/entry-coin-ic.svg"
                                                        alt="entry-coin-ic"
                                                        className='img-fluid'
                                                    />
                                                </div>
                                                <div>
                                                    <span className='entry-coin-text'>
                                                        Entry : {item.iEntry} Coins
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to={`/rule/${item._id}`}>
                                                <button className='tournament-play-btn'>Play</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
