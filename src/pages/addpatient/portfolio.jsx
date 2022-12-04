import { useEffect, useState } from "react";
import PortfolioList from "./portfoliolist";
import "./portfolio.scss";
import patient from "../../assets/patientadd.png";
import chest from "../../assets/chest scans.png";
import rep from "../../assets/medrep.png";
import scans from "../../assets/scans.png";
import radiologist from "../../assets/radiologist.png";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "./data";

export default function Portfolio() {
  
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  
  


  return (
    
      
    <div className="portfolio1" >
      <div className="section2">
        
       

      <div className="mainapp2">
        <div className="mainapp3">
      <button className ="b1p"> <img src={patient}/> update patient info </button>
      <button className ="b2p"> <img src={chest}/> Upload a scan to the patient </button>
      <button className ="b4p"> <img src={scans}/> Recent Scans</button>

      </div>
      </div>
      </div>
    </div>
    
    
    
  );
};


