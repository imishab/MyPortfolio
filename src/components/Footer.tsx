import React from 'react';

const Footer = () => {
    return (
        <footer className=" mt-5">

            <section className="skills-section  ">

                {/* Skills Grid */}
                <div className="row ">
                    {/* First Row */}
                    <div className="col-md-6 col-sm-6 footer-cell">Frontend Development</div>
                    <div className="col-md-6 col-sm-6 footer-cell">Backend Development</div>

                </div>



                <div className="row ">
                    {/* First Row */}
                    <div className="col-md-3 col-sm-6 footer-content-cell">
                        <div className='content'>
                            <h4>Mishab.</h4>
                            <p className='desc'>Full Stack Developer</p>

                            <br /><br />
                            <p className='desc'> © 2021 Qode Interactive, All Rights Reserved </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 footer-content-cell">
                        <div className='content'>
                            <h6>* ADDRESS.</h6>
                            <p className='desc'>Zürich, Switzerland <br />
                                Bahnhofstrasse 7/1<br /><br />

                                44 1793 123 456<br /><br />

                                laurits@qodeinteractive.com</p>

                            <br />

                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 footer-content-cell">
                        <div className='content'>
                            <div className="row">
                                <h6>* SOCIAL</h6>
                                <div className="col-lg-6">
                                    <a href="">Instagram</a> <br />
                                    <a href="">Facebook</a><br />
                                    <a href="">Twitter</a><br />
                                    <a href="">LinkedIn</a><br />
                                </div>
                                <div className="col-lg-6">
                                    <a href="">Discord</a> <br />
                                    <a href="">Thread</a><br />
                                    <a href="">Pinterst</a><br />
                                    <a href="">Whatsapp</a><br />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 footer-content-cell">
                        <div className='content'>
                            <h6>Mishab.</h6>
                            <p className='desc'>Full Stack Developer</p>

                            <br />
                            <p className='desc'> © 2021 Qode Interactive, All Rights Reserved </p>
                        </div>
                    </div>





                </div>

            </section>
        </footer>
    );
};

export default Footer;
