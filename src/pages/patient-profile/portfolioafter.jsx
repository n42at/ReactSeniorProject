import { useEffect, useState } from "react";
import Portfoliolistafter from "./portfoliolistafter";
//import "./portfoliolistafter.scss";
import "./portfolioafter.scss";

import patient from "../../assets/patientadd.png";
import chest from "../../assets/chest scans.png";
import rep from "../../assets/medrep.png";
import scans from "../../assets/scans.png";

import {
  featuredPortfolio,

} from "./data";

export default function Portfolioafter() {
 

  return (
    <div className="portfolios" id="portfolios">
      {/* <h1>Patient Details</h1> */}
      
        
       {/* <button  className ="button1prof"> <img src={patient}/> Add patients </button> */}

      {/* <button  className ="button3prof"> <img src={rep}/> list of patients </button> */}
      {/* <button  className ="button4prof"> <img src={scans}/> Recent Scans</button>  */}

      {/* <button className ="button2prof"> <img src={chest}/> Upload a scan </button> */}

    
    </div>
  );
}