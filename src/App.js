import React, {useState} from 'react';
import './App.css';
import Nav from "./Nav.js"


import shape from "./images/shape2-1.png";
import img1 from "./images/banner-img-1.png"

import Digital from './Digital';
import Socials from './Socials';
import Brilliance from './Brilliance';
import Team from "./Team";

import { AiOutlineDown } from "react-icons/ai";
import Whatsapp from './Whatsapp';
import Solution from './Solution';
import Footer from './Footer';
import Analysis from './Analysis';
import Strategy from './Strategy';
import Video from './Video';


function App() {
const [loading,setLoading] = useState(true);
const spinner = document.getElementById("spinner");
if(spinner){
  setTimeout(() => {
    spinner.style.display="none";
    setLoading(false);
  },2000)
}
  return (
    !loading && (
    <div className="App">
      <>
        <Nav />

        <section className='sec1' id="home">
 
 <div className='container' id='jq1' >
            <div className='row'>
    <div className="col-lg-6 jc-center zoomIn" data-animation="zoomIn" data-animation-delay="100ms" style={{animationDelay: '100ms', paddingTop: "120px",     transition: "all 0.3s"}} data-animated="true">

   <h1 style={{ fontSize: "45px", fontWeight: "700", textAlign: "start" }}>Exquisite of Digital <br /> Marketing</h1>
                <p>
                Ticktek Digitals is a professional digital marketing team which is providing digital marketing services we will help you to make your business digital and online with new tactics . In this growing media world it is must to have a professional digital portfolio that will make huge impacts on your customers.so move ahead of the digital trends and make a difference in your market with the help of ticktek digital marketing team.
                </p>

 <button className='btn1'>Get Started Now</button>

                <button className='btn2'>Discover More</button>
              </div>
 <div className='col-lg-6  zoomIn' data-animation="zoomIn" data-animation-delay="100ms" style={{animationDelay: '100ms', transition: "all 0.3s"}} data-animated="true">
                <img style={{width:"100%"}}  src={img1}></img>
 </div>
 </div>
</div>
</section>


      

<Analysis/>
<Strategy/>
<Digital/>
 <Socials/>

 <div className="shape">
<img style={{marginTop:"-98px"}} src={shape}/>
</div>
{/* <button  id="scrollToTop" style={{display: "inline"}}>

  <AiOutlineDown className='arrow'/>

  </button> */}

<Brilliance/>
{/* <Team/> */}
<Solution/>
<Video/>
<Footer/>
<Whatsapp/>
      </>
    </div>
    )
  );
}

export default App;
