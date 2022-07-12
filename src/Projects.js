import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom'
import $ from 'jquery';


import tick from "./images/tick.png";
import follow from "./images/followup.png";
import client from "./images/client.png";
import experience from "./images/experience.png";

const Projects = ()=>{
   

    // var [selectCustomer,setSelectCustomer] =useState({})
    
  
    var [project,setproject] =useState(0)
    var [customer,setcustomer] =useState(0)
    var [developer,setdeveloper] =useState(0)
    var [clientCount,setClientCount] =useState(0)
  
    var [counterData,setCounterData] =useState({
      project:1,
      customer:1,
      developer:0,
      loc:1,
    })



    useEffect(()=>{
        // Projects()
        
        CounterAnimate()
       },[])
      

      
       function CounterAnimate() {
            
        // Function which adds the 'animated' class to any '.animatable' in view
        var doAnimations = function() {
        "use strict";
          
            // Calc current offset and get all animatables
            var offset = $(window).scrollTop() + $(window).height(),
                $counterSec = $('.counterSec');
            
            // Unbind scroll handler if we have no counterSec
            if ($counterSec.length == 0) {
              $(window).off('scroll', doAnimations);
            }
            
            // Check all counterSec and animate them if necessary
                $counterSec.each(function(i) {
               var $counterS = $(this);
                    if (($counterS.offset().top + $counterS.height() - 20) < offset) {
                    $counterS.removeClass('counterSec').addClass('counterOn');
                    // console.log(offset);
                    handleCounter()
                    handleCustomersData()
                    }
                     
            });
        
            };
          
          // Hook doAnimations on scroll, and trigger a scroll
            $(window).on('scroll', doAnimations);
          $(window).trigger('scroll');
      
      }
        const handleCounter =() =>{
       
      
          var startproject=project
          var endproject= 14;
          var startCustomer=customer
          var endCustomer= 41;
          var startDeveloper=developer
          var endDeveloper= 25;
          var startClient=clientCount
          var endClient= 2;
      
          var projectCounting = setInterval(function(){
              if(startproject < endproject) {
                  startproject++
              } else {
                  clearInterval(projectCounting)
              }
              // console.log(startproject);
              setproject(startproject)
          }, 10);
      
          var developerCounting = setInterval(function(){
              if(startDeveloper < endDeveloper) {
                startDeveloper++
              } else {
                  clearInterval(developerCounting)
              }
              // console.log(startDeveloper);
              setdeveloper(startDeveloper)
          }, 100);
      
          var clientCounting = setInterval(function(){
              if(startClient < endClient) {
                startClient++
              } else {
                  clearInterval(clientCounting)
              }
              // console.log(startClient);
              setClientCount(startClient)
          }, 100);
        }
      
        const handleCustomersData =() =>{
          var startCustomer=customer
          var endCustomer= 41;
      
          var customerCounting = setInterval(function(){
            if(startCustomer < endCustomer) {
              startCustomer++
            } else {
                clearInterval(customerCounting)
            }
            // console.log(startCustomer);
            setcustomer(startCustomer)
        }, 10);
        }







   
    return(
        <>
          <section className='projectCounter1' >
    <div className='container'>
      <div className="shadowMain">
        <div className="shadow"></div>
        <div className="counterMain">
          <div className="countCard counterSec" >
            <div className="imgDiv">
              {/* <i class="fas fa-2x fa-briefcase"></i> */}
              <img src={tick} alt="Finished Projects" />
            </div>
            <div className="contentCard">
              <h3>{project}</h3>
              <p>Finished Projects</p>
            </div>
          </div>
          <div className="countCard counterSec">
            <div className="imgDiv">
              {/* <i class="fas fa-2x fa-user"></i> */}
             
              <img src={client} alt="Happy client" />
            </div>
            <div className="contentCard">
              <h3>{customer}</h3>
             
              <p>Happy client</p>

            </div>
          </div>
          <div className="countCard">
            <div className="imgDiv">
            {/* <i class="fas fa-2x fa-code"></i> */}
            {/* <img src={client} alt="Happy client" /> */}
            <img src={experience} alt="Years of Experience" />
            </div>
            <div className="contentCard">
              <h3>{clientCount}</h3>
              {/* <p>Happy client</p> */}
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="countCard">
            <div className="imgDiv">
              {/* <i class="fas fa-2x fa-user-circle"></i> */}
              {/* <img src={experience} alt="Years of Experience" /> */}
               <img src={follow } alt="Ongoing Projects" />
            </div>
            <div className="contentCard">
              <h3>{developer }</h3>
              {/* <p>Years of Experience</p> */}
               <p>Ongoing Projects</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
        
        </>
    )
}
export default Projects;