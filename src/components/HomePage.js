import React, { Component } from 'react';

const HomePage = () => (
    
            <div>
                <h1>HOME PAGE </h1>

                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src="../img/1.jpeg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="../img/2.jpeg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="../img/3.jpeg" alt="Third slide" />
                        </div>
                    </div>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>

            </div>
        );

export default HomePage;