import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Stories() {
    return (
        <div>
            <div>
                <div className='question-bg'>
                    <div className='container-fluid'>
                        <div class="row align-items-start pt-4">
                            <div className='col-4 position-sticky top-0'>
                                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="nav-link active py-3 text-start" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"> <img src='../../../public/img/all-stories-ic.svg' className='img-fluid me-2 stories-icon' /> All Stories</button>

                                    <button class="nav-link py-3 text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><img src='../../../public/img/entertariment-stories-ic.svg' className="img-fluid me-2 stories-icon" />Profile</button>

                                    <button class="nav-link py-3 text-start" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false"><img src='../../../public/img/beauty-stories-ic.svg' className="img-fluid me-2 stories-icon" />Beauty</button>

                                    <button class="nav-link py-3 text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><img src='../../../public/img/fashion-stories-ic.svg' className="img-fluid me-2 stories-icon" />Fashion</button>

                                    <button class="nav-link py-3 text-start" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><img src='../../../public/img/food-stories-ic.svg' className="img-fluid me-2 stories-icon" />Food</button>

                                    <button class="nav-link py-3 text-start" id="v-gadget-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gadget" type="button" role="tab" aria-controls="v-pills-gadget" aria-selected="false"><img src='../../../public/img/gadget-stories-ic.svg' className="img-fluid me-2 stories-icon" />Gadget</button>


                                    <button class="nav-link py-3 text-start" id="v-health-tab" data-bs-toggle="pill" data-bs-target="#v-pills-health" type="button" role="tab" aria-controls="v-pills-health" aria-selected="false"><img src='../../../public/img/health-stories-img.svg' className="img-fluid me-2 stories-icon" />Health</button>

                                    <button class="nav-link py-3 text-start" id="v-lifestyle-tab" data-bs-toggle="pill" data-bs-target="#v-pills-lifestyle" type="button" role="tab" aria-controls="v-pills-lifestyle" aria-selected="false"><img src='../../../public/img/lifestyle-stories-img.svg' className="img-fluid me-2 stories-icon" />Lifestyle</button>

                                    <button class="nav-link py-3 text-start" id="v-news-tab" data-bs-toggle="pill" data-bs-target="#v-pills-news" type="button" role="tab" aria-controls="v-pills-news" aria-selected="false"><img src='../../../public/img/news-stories-img.svg' className="img-fluid me-2 stories-icon" />News</button>

                                    <button class="nav-link py-3 text-start" id="v-agriculter-tab" data-bs-toggle="pill" data-bs-target="#v-pills-agriculter" type="button" role="tab" aria-controls="v-pills-agriculter" aria-selected="false"><img src='../../../public/img/agriculter-stories-ic.svg' className="img-fluid me-2 stories-icon" />Agriculture</button>

                                    <button class="nav-link py-3 text-start" id="v-sports-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sports" type="button" role="tab" aria-controls="v-pills-sports" aria-selected="false"><img src='../../../public/img/sport-stories-img.svg' className="img-fluid me-2 stories-icon" />Sports</button>

                                    <button class="nav-link py-3 text-start" id="v-technology-tab" data-bs-toggle="pill" data-bs-target="#v-pills-technology" type="button" role="tab" aria-controls="v-pills-technology" aria-selected="false"><img src='../../../public/img/technology-stories-img.svg' className="img-fluid me-2 stories-icon" />Technology</button>

                                    <button class="nav-link py-3 text-start" id="v-travel-tab" data-bs-toggle="pill" data-bs-target="#v-pills-travel" type="button" role="tab" aria-controls="v-pills-travel" aria-selected="false"><img src='../../../public/img/travel-stories-img.svg' className="img-fluid me-2 stories-icon" />Travel</button>

                                    <button class="nav-link py-3 text-start" id="v-festival-tab" data-bs-toggle="pill" data-bs-target="#v-pills-festival" type="button" role="tab" aria-controls="v-pills-festival" aria-selected="false"><img src='../../../public/img/festival-stories-img.svg' className="img-fluid me-2 stories-icon" />Festival</button>

                                    <button class="nav-link py-3 text-start" id="v-finance-tab" data-bs-toggle="pill" data-bs-target="#v-pills-finance" type="button" role="tab" aria-controls="v-pills-finance" aria-selected="false"><img src='../../../public/img/finance-stories-img.png' className="img-fluid me-2 stories-icon" />Finance</button>
                                </div>
                            </div>
                            <div className='col-8'>
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                        <div className='col-12 mb-3'>
                                            <Link to='/story'>
                                                <div>
                                                    <img src="../../../public/img/stories-img-01.png" alt="stories-img-01" className='img-fluid mb-2' />
                                                    <div>
                                                        <h4 className='text-black'>Liverpool Aim to Secure Top Spot at Selhurst Park</h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='col-12 mb-3'>
                                            <div>
                                                <img src="../../../public/img/stories-img-02.png" alt="stories-img-02" className='img-fluid mb-2' />

                                                <div>
                                                    <h4>Johnson Secures Tottenham Win Over Ferencvarosi</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12 mb-3'>
                                            <div>
                                                <img src="../../../public/img/stories-img-03.png" alt="stories-img-03" className='img-fluid mb-2' />

                                                <div>
                                                    <h4>Eminem to Become Grandfather Hailie Jade Pregnant</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12 mb-3'>
                                            <div>
                                                <img src="../../../public/img/stories-img-04.png" alt="stories-img-04" className='img-fluid mb-2' />

                                                <div>
                                                    <h4>Gunjadi Oil Recipe for Stronger, Healthier Hair</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12 mb-3'>
                                            <div>
                                                <img src="../../../public/img/stories-img-05.png" alt="stories-img-05" className='img-fluid mb-2' />

                                                <div>
                                                    <h4>Project 2025 Harris Criticizes Trump’s Controversial Plan</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12 mb-3'>
                                            <div>
                                                <img src="../../../public/img/stories-img-06.png" alt="stories-img-06" className='img-fluid mb-2' />

                                                <div>
                                                    <h4>Swift Backs Harris in ‘Childless Cat Lady’ Post</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                        Profile
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                                        Beauty
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                                        Fashion
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                                        Food
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-gadget" role="tabpanel" aria-labelledby="v-pills-gadget-tab" tabindex="0">
                                        Gadget
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-health" role="tabpanel" aria-labelledby="v-pills-health-tab" tabindex="0">
                                        Health
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-lifestyle" role="tabpanel" aria-labelledby="v-pills-lifestyle-tab" tabindex="0">
                                        Lifestyle
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-news" role="tabpanel" aria-labelledby="v-pills-news-tab" tabindex="0">
                                        News
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-agriculter" role="tabpanel" aria-labelledby="v-pills-agriculter-tab" tabindex="0">
                                        Agriculter
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-sports" role="tabpanel" aria-labelledby="v-pills-sports-tab" tabindex="0">
                                        Sports
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-technology" role="tabpanel" aria-labelledby="v-pills-technology-tab" tabindex="0">
                                        Technology
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-travel" role="tabpanel" aria-labelledby="v-pills-travel-tab" tabindex="0">
                                        Travel
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-festival" role="tabpanel" aria-labelledby="v-pills-festival-tab" tabindex="0">
                                        Festival
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-finance" role="tabpanel" aria-labelledby="v-pills-finance-tab" tabindex="0">
                                        Finance
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
