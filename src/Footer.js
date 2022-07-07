import React from "react";

const Footer = () => {
    return(
        <>
        <div id="footer">
        <div className="container" >
            <div className="row">
                <div className="col-md-4">

                    <h1 style={{color:"white", textAlign:"start"}}>Important Links</h1>
<ul style={{color:"white", padding:"20px 20px" , textAlign:"start", textDecoration:"none", listStyleType:"none"}}>
    <li style={{padding:"10px 0px", color:"white"}}>
        <a style={{color:"white" , textDecoration:"none"}} href="#social">About Us </a>
    </li>

    <li style={{padding:"10px 0px", color:"white"}}>
        <a style={{color:"white" , textDecoration:"none"}}  href="#services1">Services </a>
    </li>
    <li style={{padding:"10px 0px", color:"white"}}>
        <a style={{color:"white" , textDecoration:"none"}}  href="#">Projects </a>
    </li>
    <li style={{padding:"10px 0px", color:"white"}}>
        <a style={{color:"white" , textDecoration:"none"}}  href="#social">Contact Us </a>
    </li>

</ul>
                </div>

                <div className="col-md-4">

<h1 style={{color:"white", textAlign:"start"}}>Featured Services</h1>
<ul style={{color:"white", padding:"20px 20px" , textAlign:"start", textDecoration:"none" ,listStyleType:"none"}}>
<li style={{padding:"10px 0px", color:"white"}}>
<a style={{color:"white" , textDecoration:"none"}} href="#">Searh Engine Optimizaion </a>
</li>

<li style={{padding:"10px 0px", color:"white"}}>
<a style={{color:"white" , textDecoration:"none"}}  href="#">Link Building </a>
</li>
<li style={{padding:"10px 0px", color:"white"}}>
<a style={{color:"white" , textDecoration:"none"}}  href="#">Keyword Targeting </a>
</li>
<li style={{padding:"10px 0px", color:"white"}}>
<a style={{color:"white" , textDecoration:"none"}}  href="#">Email Marketing </a>
</li>

</ul>
</div>


<div className="col-md-4">

<h1 style={{color:"white", textAlign:"start"}}>Contact Us</h1>
<ul style={{color:"white", padding:"20px 20px" , textAlign:"start", textDecoration:"none", listStyleType:"none"}}>
<li style={{padding:"10px 0px", color:"white"}}>
<a style={{color:"white" , textDecoration:"none"}} href="#">Office Address </a>
</li>

<li style={{padding:"10px 0px", color:"white"}}>
<a style={{color:"white" , textDecoration:"none"}}  href="#">121 King St, Melbourne VIC 3000, Karachi </a>
</li>
<li style={{padding:"10px 0px", color:"white"}}>
<a style={{color:"white" , textDecoration:"none"}}  href="#">03162759168 </a>
</li>
<li style={{padding:"10px 0px", color:"white"}}>
<a style={{color:"white" , textDecoration:"none"}}  href="#">Email: tiktak@admin.com</a>
</li>

</ul>
</div>

            </div>
        
        </div>
    <p style={{color:"white", paddingBottom:"10px"}}> © 2022 Ticktak Digital. All Rights Reserved.</p>

        </div>
   
        </>
    );
}

export default Footer;