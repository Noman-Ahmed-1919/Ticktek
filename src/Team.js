import React from "react";

import shape from "./images/shape2-1.png";

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
 import { AiOutlineDown } from "react-icons/ai";
 import {  AiOutlineArrowRight } from "react-icons/ai";

const Team = () => {
    return (
        <>

            <section id="team">
                <br />
                <br />
                <br />
                <br />
                <div className="teamup" srtyle={{ textAlign: "center" }}>
                    <h1 style={{ color: "red" }}>Our Teams</h1>
                    <h2>Meet Our Expert Team Members</h2>


                    <div className="shape1">
<img style={{marginTop:"-200px", marginLeft:"1090px"}} src={shape}/>
</div>

                </div>

              

                <div className="container team1" id="body">
        <div className="row" style={{flexWrap:"nowrap"}}>
          <div className="col-md-6" id="col44">
            <div className="card d-flex mx-auto">
              <div className="card-image">
                <img className="img-fluid d-flex mx-auto" id="img11" src="https://i.imgur.com/3TlwnLF.jpg" />
              </div>
              <div className="card-text">
                <div className="card-title">Lorem Ipsum!</div>
              
              </div>
              <div className="footer">
                <span id="name">Noman <br /></span>
                <span id="position">CEO of <a href="#">Ticktek</a></span>
                <a href="https://www.facebook.com/affan.ak43" target='_blank'>   <FaFacebookF  className='icon1'/> </a>
            <a href="https://www.instagram.com/affan.ak43/" target="__blank"> <FaInstagram className='icon' /> </a>
              <a href="https://www.linkedin.com/in/affanak" target='_blank'>  <FaLinkedin className='icon'/></a>
              <a href="https://github.com/affankhan43" target="__blank"></a>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="col44">
            <div className="card d-flex mx-auto">
              <div className="card-image">
                <img className="img-fluid d-flex mx-auto" id="img11" src="https://i.imgur.com/Uz4FjGZ.jpg" />
              </div>
              <div className="card-text">
                <div className="card-title">Lorem Ipsum!</div>
              
              </div>
              <div className="footer">
                <span id="name">Ahmed<br /></span>
                <span id="position">CEO of <a href="#">Facebook.com</a></span>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="col44">
            <div className="card d-flex mx-auto ">
              <div className="card-image">
                <img className="img-fluid d-flex mx-auto" id="img11" src="https://i.imgur.com/udGH5tO.jpg" />
              </div>
              <div className="card-text">
                <div className="card-title">Lorem Ipsum!</div>
               
              </div>
              <div className="footer">
                <span id="name">Ali<br /></span>
                <span id="position">UX Designer at <a href="#">Youtube.com</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>

            </section>
        </>
    )
}

export default Team;