import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroBanner = () => {
    return (
        <div className="hero-section position-relative overflow-hidden">
            <div className="row min-vh-100 align-items-center">
                <div className="col-lg-7 py-5 banner-content">
                    <h5 className="greeting mb-1">{` Hello I'm Mishab `}</h5>
                    <h1 className="banner-title mb-2">
                        Passionate Frontend Web Developer, experienced in creating user friendly Websites & Web applications
                    </h1>
                    <p className="banner-description mb-4">
                        A web designer and developer with experience in MERN stack and Python, proficient in Web/App development, IoT, and AWS.
                    </p>
                    <div className="d-flex gap-2">
                        <button className="banner-btn">Connect Me</button>
                        <button className="banner-btn-two">Hire Me</button>
                    </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                    <div className="illustration-container">
                        <div className="gradient-bg"></div>
                        <img
                            src="/img/banner-1.png"
                            alt="Developer Illustration"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;