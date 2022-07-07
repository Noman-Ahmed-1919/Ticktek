import React from "react";
import video from "./images/video.mp4";
import videocha2 from "./images/nomi.png";
import videocha1 from "./images/ahmed.jpg";
import shape from "./images/shape2-1.png";
const Video = () => {
    return (
        <>

<section className='secondVMain' id="videotik">

    <div className="container" >
      <div className="row">
        <div className="col-sm-10 col-9" >
        
  
           <iframe className="vidiframe" width="100%" height="100%"  src={video} frameborder="0" allowfullscreen>
          </iframe>

           <img className='videoCharacter1' src={videocha1} alt="video" />
      
           <img className='videoCharacter3' src={videocha2} alt="video"/>
    
        </div>
      </div>
    </div>

  </section>


 

        
        </>
    )
}

export default Video;