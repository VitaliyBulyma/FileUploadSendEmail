import React from 'react';


const Card = () => {
    return (
       
 <div className="container-fluid px-0 py-5 mx-auto">
        <div className="row justify-content-center mx-0 mx-md-auto">
            <div className="col-lg-10 col-md-11 px-1 px-sm-2">
                <div className="card border-0 px-3">
                   
                    <div className="d-flex row py-5 px-5 bg-light">
                        <div className="green-tab p-2 px-3 mx-2">
                            <p className="sm-text mb-0">OVERALL RATING</p>
                            <h4>4.8</h4>
                        </div>
                        <div className="white-tab p-2 mx-2 text-muted">
                            <p className="sm-text mb-0">ALL REVIEWS</p>
                            <h4>124</h4>
                        </div>
                        <div className="white-tab p-2 mx-2">
                            <p className="sm-text mb-0 text-muted">POSITIVE REVIEWS</p>
                            <h4 className="green-text">93%</h4>
                        </div>                        
                    </div> 
                    
                
                    <div className="row bg-light">
                        <div className="col-md-2 col-4 text-center block py-5">
                            <div className="round-icon"> <img src="https://i.imgur.com/8lJt6UN.png" width="50px" height="50px" alt="" /> </div>
                            <p className="sm-text-1 grey-text mb-0">100</p>
                            <div className="fa fa-circle green-dot"></div>
                            <div className="fa fa-circle green-dot"></div>
                            <div className="fa fa-circle green-dot"></div>
                            <div className="fa fa-circle green-dot"></div>
                            <div className="fa fa-circle green-dot"></div>
                        </div>
                        <div className="col-md-2 col-4 text-center block py-5">
                            <div className="round-icon"> <img src="https://i.imgur.com/Grjnbah.png" width="50px" height="50px" /> </div>
                            <p className="sm-text-1 grey-text mb-0">100</p>
                            <div className="fa fa-circle red-dot"></div>
                            <div className="fa fa-circle red-dot"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                        </div>
                        <div className="col-md-2 col-4 text-center block py-5">
                            <div className="round-icon"> <img src="https://i.imgur.com/q2v8mqu.png" width="50px" height="50px" /> </div>
                            <p className="sm-text-1 grey-text mb-0">100</p>
                            <div className="fa fa-circle yellow-dot"></div>
                            <div className="fa fa-circle yellow-dot"></div>
                            <div className="fa fa-circle yellow-dot"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                        </div>
                        <div className="col-md-2 col-4 text-center block py-5">
                            <div className="round-icon"> <img src="https://i.imgur.com/EkmVVM1.png" width="50px" height="50px" /> </div>
                            <p className="sm-text-1 grey-text mb-0">100</p>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                        </div>
                        <div className="col-md-2 col-4 text-center block py-5">
                            <div className="round-icon"> <img src="https://i.imgur.com/ZbZzavI.png" width="50px" height="50px" /> </div>
                            <p className="sm-text-1 grey-text mb-0">100</p>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                        </div>
                        <div className="col-md-2 col-4 text-center block py-5">
                            <div className="round-icon"> <img src="https://i.imgur.com/S6SGKFQ.png" width="50px" height="50px" /> </div>
                            <p className="sm-text-1 grey-text mb-0">100</p>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                            <div className="fa fa-circle"></div>
                        </div>
                    </div> 
                    <div className="review p-5">
                        <div className="row d-flex">
                            
                            <div className="profile-pic"><img src="https://i.imgur.com/Mcd6HIg.jpg" width="60px" height="60px" /></div>
                            
                            <div className="d-flex flex-column pl-3">
                                <h4>Emily</h4>
                                <p className="grey-text">30 min ago</p>
                            </div>
                            <div className="ml-md-auto p-2 mx-md-2 pt-4 pt-md-3"> <button className="btn btn-red px-4">RESPOND TO THE REVIEW</button> </div>
                        </div>
                        <div className="row pb-3">
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="green-text">
                                <h5 className="mb-0 pl-3">Excellent</h5>
                            </div>
                        </div>
                        <div className="row pb-3">
                            <p>This store is incredibly well organized and is at the top of its game.</p>
                        </div>
                        <div className="row ml-1">
                            <div className="row bg-light via">
                                <div className="px-2"><img src="https://i.imgur.com/8lJt6UN.png" width="18px" height="18px" /></div>
                                <p className="grey-text mb-0 px-3">via Google</p>
                            </div>
                        </div>
                    </div>
                    <div className="review p-5">
                        <div className="row d-flex">
                            <div className="profile-pic"><img src="https://www.pngkit.com/png/detail/349-3499697_man-placeholder-blank-avatar-icon-png.png" width="60px" height="60px" /></div>
                            <div className="d-flex flex-column pl-3">
                                <h4>David </h4>
                                <p className="grey-text">50 min ago</p>
                            </div>
                            <div className="ml-md-auto p-2 mx-md-2 pt-4 pt-md-3"> <button className="btn btn-red px-4">RESPOND TO THE REVIEW</button> </div>
                        </div>
                        
                        <div className="row pb-3">
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="fa fa-circle green-dot my-auto rating-dot"></div>
                            <div className="green-text">
                                <h5 className="mb-0 pl-3">Excellent</h5>
                            </div>
                        </div>
                        <div className="row pb-3">
                            <p>This is the second time we've been to this location.
                              The first visit was disappointing as we were looking for
                              information but all we got was a list to choose from.  
                              This visit was much better as we got to speak with a very 
                              friendly and knowledgeable gentleman who took the time to give
                              us information so we could make a good choice.  Will definitely go back.</p>
                        </div>
                        <div className="row ml-1">
                            <div className="row bg-light via">
                                <div className="px-2"> <img src="https://i.imgur.com/8lJt6UN.png" width="18px" height="18px" alt="" /></div>
                                <p className="grey-text mb-0 px-3">via Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
       
    );
};

export default Card;