import React from "react";
import img51 from "./images/img-1.png"
import imgg51 from "./images/imgg51.png"
import img52 from "./images/img52.png"
import img53 from "./images/img53.png"
import img54 from "./images/img54.png"

const Analysis = () => {
    return (
 <>
 <div className="container" id="analysis">
<div className="row">

    <div className="col-md-4">
<img className="pic1" style={{width:"85%"}}  src={img51}/>
            

    </div>

    <div className="col-md-4" >

<div className="ana1" id="anal2">
    <div>
        <img style={{paddingLeft:"10px", width:"30%"}} src={imgg51}/>
    </div>
    <div>
        <h6>Email Marketing </h6>
        <p id="ana1" style={{fontSize:"12px"}}>Email Marketing is a strong marketing track,<br></br> for improving your business’s products or services.</p>
    </div>
</div>

   
<div className="ana1">
    <div>
        <img className="pic2" style={{paddingLeft:"10px", width:"22%"}} src={img52}/>
    </div>
    <div>
        <h6>Website Designing</h6>
        <p id="ana1" style={{fontSize:"10px"}}>Web design is the procedure of formulating the<br></br> pictorial look and feel of a website.As a web designer, you’ll concentrate on planning the user experience of the website, wireframe formats, content and images in a way that tells a story, and formulating the final UI.</p>
    </div>
</div>



</div>
            

    
<div className="col-md-4">


<div className="ana1">
    <div>
        <img style={{paddingLeft:"10px", width:"30%"}} src={img53}/>
    </div>
    <div>
        <h6>Technical SEO Audit</h6>
        <p id="ana1" style={{fontSize:"12px"}}>SEO is all about boosting a site’s scales in <br></br> the organic (non-paid) section of the search results.</p>
    </div>
</div>

   
<div className="ana1">
    <div>
        <img style={{paddingLeft:"10px", width:"30%"}} src={img54}/>
    </div>
    <div>
        <h6 >Social Media Strategy</h6>
        <p id="ana1" style={{fontSize:"12px"}}>Social media marketing (SMM) is a structure of <br></br> internet marketing that utilizes social media<br></br> apps as a marketing instrument. </p>
    </div>
</div>


</div>
    

</div>

 </div>
 
 </>

    );
}
export default Analysis;