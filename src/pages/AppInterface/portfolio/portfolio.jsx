import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PortfolioList from "./portfoliolist";
import "./portfolio.scss";
import patient from "../../../assets/patientadd.png";
import chest from "../../../assets/chest scans.png";
import rep from "../../../assets/medrep.png";
import scans from "../../../assets/scans.png";
import radiologist from "../../../assets/radiologist.png";
import { DataGrid } from '@material-ui/data-grid'
import Popup from "./popup";
import Table from "./Tables";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "./data";
import { Report } from "@material-ui/icons";


export default function MainPortfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
    },
    
  ];

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `./Scan`; 
    navigate(path);
  }

  const routeChange2 = () =>{ 
    let path = `./PatientProf`;; 
    navigate(path);
  }

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
  
  const [tableData, setTableData] = useState([])
  
  const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'name', width: 200 },
    { field: 'mobile_number', headerName: 'Mobile Number', width: 400 },
    { field: 'national_id', headerName: 'National id', width: 600 },

  ]
  
    
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/patients/")
        .then((data) => data.json())
        .then((data) => setTableData(data))
  
    }, [])
  
    console.log(tableData);

  return (
   

    
    <div className="portfolio" id="portfolio">
     
     
      
     
      <div className="sectioni">
      
      
        <h1 className="sectiontitle"></h1>
        
        <img src={radiologist} alt="radiologist" className="radiologist"/>
        <div className="textbox">
        {/* <button type="button" class="btn btn-outline-primary">Primary</button> */}
        <h1 style={{ fontSize: "1.8rem" }}  className="scans">Scans</h1>
        <h1 style={{ fontSize: "1.8rem" }} className="scans2">340</h1>
        

        <h1 style={{ fontSize: "1.8rem" }} className="patnum">Patients</h1>
        <h1 style={{ fontSize: "1.8rem" }} className="patnum2">101</h1>
        </div>
      <button onClick={routeChange2} className ="button1port"> <img src={patient}/> Add patients </button>
      <button onClick={() => setOpenModal(true)} className ="button2port"> <img src={chest}/> Upload a scan </button>
       
      {/*<button onClick={routeChange} className ="button3port"> <img src={rep}/> list of patients </button> */}
      
      <button onClick={routeChange} className ="button4port"> <img src={scans}/> Recent Scans</button>
        </div>
        
        <Popup 
      open={openModal} 
      onClose={() => setOpenModal(false)} /> 
        
        <Table />


      {/* <div className="mainapp"> */}
      
      {/* { <div class= "table1" style={{ height: 500, width: '100%' }}>
              <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={10}
                checkboxSelection
                onSelectionModelChange={({ selectionModel }) => {
                  const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
                  const rowsToDelete = tableData.filter(row => rowIds.includes(row.id));
                  setDeletedRows(rowsToDelete);
                  console.log(deletedRows);
                }}
              />
            </div> } */}



          
            
            
          
        
      


      {/* </div> */}
      
    </div>
    
    
  );
}