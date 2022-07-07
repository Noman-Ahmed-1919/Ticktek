import React from "react";
import men1 from "./images/men.png"
import ques from "./images/icon-img.png"


const Digital = () => {
    return (
        <>
            <div className="container" style={{paddingTop:"100px", paddingBottom:"100px"}} id="elements">
                <div className="row">
                    <div className="col-lg-6 slideInRight"  data-animation="slideInRight" data-animation-delay="300ms" style={{animationDelay: '500ms', textAlign: "start" }}  data-animated="true">

                        <h2 style={{color:"black", paddingTop:"50px"}}>It's Your Time To Grow Through <br></br> Digital Marketing.</h2>
                        <p>We are providing digital marketing services for your business which will help you to grow your business ticktek digitals is a professional platform & offering new techniques of marketing such as (WB,SMM,SEM,GD,SEO,SMSM,CSR,EM)..</p>


<div className="questimg" style={{display:"flex"}}>

<div>
    <img style={{width: "129px", height: "31px", paddingRight: "10px"}} src={ques}/>
</div>

<div>

                        <h4 style={{color:"black"}}> We Are Here To Help You Out</h4>
                        <p>We,re a professional digital marketing team that is hardworking and devoting with sharp and creative skills to deliver best services on time to deliver the best selling results to your business.</p>
                        </div>
                        </div>               
                   
                    </div>

                    <div className="col-lg-6 zoomIn" data-animation="zoomIn" data-animated="true">
                        <img src={men1} style={{width:"100%"}}></img>

                    </div>

                </div>

            </div>

        </>

    );
}

export default Digital;