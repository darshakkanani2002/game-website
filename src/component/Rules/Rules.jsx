import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Img_Url, Test_API } from '../Config';

export default function Rules() {
    const [images, setImagesData] = useState([]);
    const { id } = useParams();  // Get the ID from the URL parameter

    useEffect(() => {
        // Fetch data whenever the `id` changes
        fetchData();
    }, [id]);  // Dependency on `id` ensures it re-fetches when the URL changes

    const fetchData = () => {
        axios.post(`${Test_API}question/list`)
            .then(response => {
                console.log("Question Data ==>", response.data.data);
                // Filter and map data to only include required fields
                const filteredData = Array.isArray(response.data.data)
                    ? response.data.data.map(item => ({
                        _id: item._id,       // Keep the ID for linking
                        vImage: item.vImage, // Image URL
                        vName: item.vName,   // Name
                        iEntry: item.iEntry, // Entry fees
                        currentBalance: item.currentBalance || "900", // Default balance
                        rankIconUrl: item.rankIconUrl || "../../../public/img/rule-rank-ic.png" // Default rank icon
                    }))
                    : [];
                setImagesData(filteredData);
            })
            .catch(error => {
                console.error("Error fetching question data:", error);
            });
    };

    return (
        <div>
            <div className='question-bg'>
                <div className='pt-4'>
                    <div className='container-fluid'>
                        {images.length > 0 && images.filter(item => item._id === id).map((item, index) => (
                            <div className='row align-items-center' key={index}>
                                <div className='col-4 mb-5'>
                                    <img
                                        crossOrigin="anonymous"
                                        src={`${Img_Url}${item.vImage}`}
                                        alt={`rule-img-${index}`}
                                        className='img-fluid'
                                    />
                                </div>
                                <div className='col-8 mb-5'>
                                    <h3 className='mb-0'>{item.vName}</h3>
                                    <p className='mb-0'>
                                        <span className='entry-coin-text'>
                                            Entry Fees: {item.iEntry}
                                        </span>
                                    </p>
                                    <h6>Your Current Balance: {item.currentBalance - item.iEntry}</h6>
                                    <div className='view-rank-sec'>
                                        <div className='d-flex align-items-center'>
                                            <h6 className='mb-0'>View Rank</h6>
                                            <img
                                                src={item.rankIconUrl}
                                                alt={`rule-rank-ic-${index}`}
                                                className='img-fluid'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='row justify-content-center'>
                                        <div className='col-3'>
                                            <h5 className='text-how-to-play position-relative'>How To Play</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 mb-4'>
                                    <div className='rule-shadow'>
                                        <div className='rule-box p-5'>
                                            <div className='d-flex mb-3'>
                                                <img src="../../../public/img/rule-arrow-ic.png" alt="rule-arrow-ic" className='img-fluid me-3' />
                                                <h5>You got 90 seconds.</h5>
                                            </div>
                                            <div className='d-flex mb-3'>
                                                <img src="../../../public/img/rule-arrow-ic.png" alt="rule-arrow-ic" className='img-fluid me-3' />
                                                <h5>Answer as many questions as you can.</h5>
                                            </div>
                                            <div className='d-flex mb-3'>
                                                <img src="../../../public/img/rule-arrow-ic.png" alt="rule-arrow-ic" className='img-fluid me-3' />
                                                <h5>Entry Fees: 5</h5>
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
                        <div className='col-12 text-center mt-4'>
                            <h5>Tap below to start playing this tournament. 5 coins will be deducted from your wallet when you tap below.</h5>
                        </div>
                        <div className='col-12 pb-4'>
                            <div className='tournament-rule-box p-4'>
                                <h2 className='tournament-rule-text'>Tournament Rules</h2>
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
    );
}
