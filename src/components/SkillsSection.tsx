import React from "react";

const SkillsSection = () => {
    return (
        <div className="section mt-5">

            <section className="skills-section py-5 ">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-6">
                            <h2 className="skills-title fw-bold">Talking to <br /> my skills</h2>
                        </div>
                        <div className="col-6 mb-3 mb-md-0">
                            <p className="skills-description">
                                As a passionated developer, I can wear many hats and possess skills that help me lead teams from discovery through delivery to build products and features faster, and achieve business outcomes.


                            </p>
                        </div>
                    </div>
                </div>
                {/* Skills Grid */}
                <div className="row ">
                    {/* First Row */}
                    <div className="col-6 col-lg-3 skills-cell">Frontend Development</div>
                    <div className="col-6 col-lg-3 skills-cell">Backend Development</div>
                    <div className="col-6 col-lg-3 skills-cell">Project Management</div>
                    <div className="col-6 col-lg-3 skills-cell">Database Management</div>

                    {/* Second Row */}
                    <div className="col-6 col-lg-3 skills-cell">Problem-solving</div>
                    <div className="col-6 col-lg-3 skills-cell">Adaptability</div>
                    <div className="col-6 col-lg-3 skills-cell">UI/UX Design</div>
                    <div className="col-6 col-lg-3 skills-cell">Photography</div>

                    {/* Third Row */}
                    <div className="col-6 col-lg-3 skills-cell">Videography</div>
                    <div className="col-6 col-lg-3 skills-cell">Git and version control</div>
                    <div className="col-6 col-lg-3 skills-cell">Deployment</div>
                    <div className="col-6 col-lg-3 skills-cell">Time management</div>
                </div>

                <br />
                <div className="container mt-5">

                    <h2 className="skills-title text-center fw-bold">My ToolKits</h2>
                    <p className=" text-center mb-4">I can seamlessly switch between tools and use whatever helps me put ideas across clearly and quickly so that the team can easily understand, give actionable feedback, and make better decisions faster.</p>
                </div>

                <div className="row ">
                    {/* First Row */}
                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/html.png" alt="" /><br /><h6 className="mt-3">HTML</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/css.png" alt="" /><br /><h6 className="mt-3">CSS</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/js.png" alt="" /><br /><h6 className="mt-3">JavaScript</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/node.png" alt="" /><br /><h6 className="mt-3">NodeJS</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/mongo.png" alt="" /><br /><h6 className="mt-3">MongoDB</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/mysql.png" alt="" /><br /><h6 className="mt-3">MySQL</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/bootstrap.png" alt="" /><br /><h6 className="mt-3">Bootstrap</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/tailwind.png" alt="" /><br /><h6 className="mt-3">Tailwind Css</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/php.png" alt="" /><br /><h6 className="mt-3">PHP</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/reactjs.png" alt="" /><br /><h6 className="mt-3">ReactJS</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/react-native.png" alt="" /><br /><h6 className="mt-3">React Native</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/nextjs.png" alt="" /><br /><h6 className="mt-3">NextJS</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/redux.png" alt="" /><br /><h6 className="mt-3">React Redux</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/github.png" alt="" /><br /><h6 className="mt-3">Github</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/figma.png" alt="" /><br /><h6 className="mt-3">Figma</h6> </div>


                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/aws.png" alt="" /><br /><h6 className="mt-3">AWS</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/iot.png" alt="" /><br /><h6 className="mt-3">IOT</h6> </div>

                    <div className="col-4 col-lg-2 skills-cell"><img src="/img/ae.png" alt="" /><br /><h6 className="mt-3">After Effects</h6> </div>




                </div>

            </section>
        </div>
    );
};

export default SkillsSection;
