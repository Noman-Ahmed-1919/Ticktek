import React from "react";
import shape from "./images/shape2-1.png";
import { AiTwotonePhone } from "react-icons/ai";


const Socials = () => {
    return (
        <>
            <section id="social">

                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{textAlign:"start", color:"white", paddingTop:"90px"}}>
                            <h2>We're On A Mission To Change<br></br> Your View of SEO</h2>
                            <p>We have skills to give tough time to your competetors by<br></br>  professional technical SEO.</p>
                         <div style={{display:"flex"}}>
                            <h4>For Any query</h4>
                            < AiTwotonePhone style={{    width: "69px",height: "46px", color: "red"}} className='icon'/>
                           <h2>03162759168</h2>

                           </div> 
                         </div>


                        <div className="col-md-6" id="input1">
                          
                          {/* <div className="col-lg-6 col-md-6 c0l-sm-6 col-xs-12">
                            <div >
                            <span style={{position:"relative"}}>      <input className="form-row" placeholder="Name" /> </span> 
                        
                            </div>
                    
                          </div>

                        
                            
                          <div className="col-lg-6 col-md-6 c0l-sm-6 col-xs-12"  >
                            <div>
                          
                          <span> <input type="tel" name="Number" value="" size="40" className="form-row" aria-required="true" aria-invalid="false" placeholder="Phone Number"/>
                          </span> 
                            </div>
                          </div> */}

<div className="inputdiv">
<div className="col-lg-6 col-md-6 c0l-sm-6 col-xs-12">
                            <div >
                            <span style={{position:"relative"}}>      <input className="form-row" placeholder="Name" /> </span> 
                        
                            </div>
                    
                          </div>

                          <div className="col-lg-6 col-md-6 c0l-sm-6 col-xs-12"  >
                            <div>
                          
                          <span> <input type="tel" name="Number" value="" size="40" className="form-row" aria-required="true" aria-invalid="false" placeholder="Phone Number"/>
                          </span> 
                            </div>
                          </div>



</div>


                           <div className="col-lg-12 col-md-12 c0l-sm-12 col-xs-12"> 
                           <div>
                           <input className="form-row4" placeholder="Email" />
                           </div>
                         </div>

                           <div className="col-lg-12 col-md-12 c0l-sm-12 col-xs-12">
                            <div>

                            <textarea className="form-row5" name="Comment" cols="40" rows="10" aria-required="true" aria-invalid="false" placeholder="Comment"/>
                            </div>
                            
                             
                             </div>
                           

                            <button className="btn">
                                SEND MESSAGE
                            </button>
                        </div>

                    </div>

                </div>


            </section>

        </>
    )
}
export default Socials;