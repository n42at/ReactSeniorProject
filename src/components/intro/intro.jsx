import "./intro.scss";
import { useNavigate} from 'react-router-dom';
import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import doctor from '../../assets/Doctor.png'
import videoBg from '../../assets/video.mp4'
import Testimonials from "../testimonials/testimonials";
//import MainPortfolio from "../../pages/AppInterface/portfolio/portfolio";

export default function Intro() {
 
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `./Register`; 
    navigate(path);
  }
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: [ ],
    });
  }, []);
  
 
  return (


    <div className="intro" id="intro">
          <video className='videoTag' autoPlay loop muted>
    <source src={videoBg} type='video/mp4' />
    </video>

      <div className="left">
      
        <div className="imgContainer">

          <img src={doctor} alt="doctor" />
        </div>
      </div>
      
      <div className="right">
      
        <div className="wrapper">
        
          <h2>Welcome! </h2>
          <h1> </h1>
          
          <h3>
            Best application for abnormality classification!<span ref={textRef}></span>
          </h3>
          
          
          <button onClick={routeChange} className="startbutton"> Start</button>
          
          
          
          
        </div>
        
      </div>
      {/* <div className="testimonials">
    <Testimonials/>  
    </div>   */}
    </div>
    
    
  );
}
