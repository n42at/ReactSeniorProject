import { useEffect, useState } from "react";
import PortfolioList from "./portfoliolist";
import "./portfolio.scss";
import {
  featuredPortfolio,

} from "./data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Patient Details</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img 
              src={d.img}
              alt="image"
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}