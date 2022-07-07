import React from "react";
import men from "./images/2men.png"
import icon1 from "./images/icon5.png";
import icon2 from "./images/icon6.png";
import icon3 from "./images/iconss.jpeg";

const Brilliance = () =>{
    return(
        <>
        <div style={{textAlign:"center"}}>
            
            
            <h4 style={{color:"orange"}}>Brilliance Is Our Business</h4>
            <h1 style={{color:"blue"}}>An Essential Aspect Of Creativity Is Not <br></br> Being Afraid To Fail</h1>
           </div>

<div className="container" style={{marginTop:"50px", marginBottom:"50px"}}>
    <div className="row">
        <div className="col-lg-6">
            <img style={{width:"100%"}} src={men}/>

        </div>
 <div className="col-lg-6" style={{ padding:"10px 10px",  background: "linear-gradient(to right,#fe4d23 0%,#ff28a7 100%)"}}>
  
<img  src={icon2}/>
<h2 style={{color:"white"}}>Define Your Ideas</h2>
<p style={{color:"white"}}>We are looking forward to build relationships based on trust,<br></br> persistence and reliability with our employees,<br></br> customers and other business partners.</p> 
   



<div style={{marginTop:"30px", padding:"10px 10px", backgroundImage: "linear-gradient(0deg,#12225d 0%,#0c32c0 100%)"
}}>



<img   src={icon1}/>
<h2 style={{color:"white"}}>Work On Design</h2>
<p style={{color:"white"}}>
We design  complete plan for your marketing<br></br> and services we have the best team and<br></br> skills to do your task on on time ..
</p>

</div>

</div>

 <div>

 </div>


    </div>

</div>


        </>
    );
}

export default Brilliance;