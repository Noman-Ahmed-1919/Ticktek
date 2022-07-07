import React from "react";
import check from "./images/circle-check.png"
import com from "./images/computer.png"

const Solution = () => {
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "200px", marginBottom: "60px" }} id="services1">
                <h2 style={{ color: "orange" }}>Social Media Strategy</h2>
                <h1>Creative Solutions To Improve <br></br> Your Business!</h1>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-4" >

                        <div className="check">
                            <div>
                                <h4 style={{ textAlign: "end" }}>Increase Your Research</h4>
                                <p style={{ textAlign: "start" }}>We do research about your buisness and find out the best strategy to make your buisness to the next level ..</p>
                            </div>

                            <div>
                                <img style={{ marginLeft: "30px" }} src={check} />
                            </div>
                        </div>

                      
                        <div className="check">
                            <div>
                                <h4 style={{ textAlign: "end" }}>Lead More Drives</h4>
                                <p style={{ textAlign: "start" }}>We know how to generate leads for you and enhance your buisness with our branding skills .</p>
                            </div>

                            <div>
                                <img style={{ marginLeft: "30px" }} src={check} />
                            </div>
                        </div>


                        <div className="check">
                            <div>
                                <h4 style={{ textAlign: "end" }}>Email Marketing</h4>
                                <p style={{ textAlign: "start" }}>Email Marketing is a strong marketing track, an aspect of immediate marketing for improving business’s products or services.

                                </p>
                            </div>

                            <div>
                                <img style={{ marginLeft: "30px" }} src={check} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 zoomIn" data-animation="zoomIn" data-animation-delay="300ms" style={{animationDelay: '100ms', transition: "all 1s"}} data-animated="true">
                        <img style={{ width: "100%" }} src={com} />
                    </div>

                    <div className="col-lg-4">

                        <div className="check">

                        <div >
                                <img style={{  marginLeft: "-30px",width:"90px" }} src={check} />
                            </div>

                            <div>
                                <h4 style={{ textAlign: "start" }}>Web Development & Design</h4>
                                <p style={{ textAlign: "start" }}>Web design is the procedure of formulating the pictorial look and feel of a website.</p>
                            </div>

                          
                        </div>

                        <div className="check">
                         
                        <div >
                                <img style={{ marginLeft: "-30px" ,width:"90px" }} src={check} />
                            </div>
                         
                         
                            <div>
                                <h4 style={{ textAlign: "start" }}>Branding It Better</h4>
                                <p style={{ textAlign: "start" }}>Sms marketing is sending promotional campaigns for marketing objectives using text messages (SMS). </p>
                            </div>

                           
                        </div>

                        <div className="check">
                         
                        <div>
                                <img style={{ marginLeft: "-30px" ,width:"90px"}} src={check} />
                            </div>
                         
                         
                            <div>
                                <h4 style={{ textAlign: "start" }}>Search Engine Advertising</h4>
                                <p style={{ textAlign: "start" }}>SEO is all about boosting a site’s scales in the organic (non-paid) section of the search results.

                                </p>
                            </div>

                           
                        </div>


                    </div>

                </div>

            </div>



        </>
    );
}

export default Solution;