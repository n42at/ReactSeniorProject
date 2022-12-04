import Topbar from "./components/topbar/Topbar"
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//import LeftBar from "./pages/AppInterface/portfolio/profile/sidebar/leftbar"
import Scan from "./pages/scanning/Scan"
import Intro from "./components/intro/intro"
import MainPortfolio from "./pages/AppInterface/portfolio/portfolio"
//import Works from "./components/works/works"
//import Testimonials from "./components/testimonials/testimonials"
//import Contact from "./components/contact/contact"
//import Signup from "./pages/SignUp/signup"
import Create from  "./create/create"
import "./app.scss"
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import PatientProf from "./pages/addpatient/patient-profile";
import RadioHome from "./pages/RadioHome/RadioHome"
import EditToolbar from "./pages/list/testing"
import PatientsTable2 from "./pages/Table/PatientsTable"
import AfterPatientProfile from "./pages/patient-profile/patient-profileafter";
//import { Table } from "react-bootstrap"
import Table from "./pages/AppInterface/portfolio/Tables"
import SignIn from "./pages/Sign in/signin"
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>


     <div className="sections">

     <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/patientmanage" element={<EditToolbar />} />
          <Route path="/Radio" element={<RadioHome />} />

          <Route path="/Register/main" element={<MainPortfolio/>} />
          <Route path="/Register" element={<Create/>} />
          <Route path="/Register/main/Scan" element={<Scan/>} />
          <Route path="/Register/main/PatientProf" element={<PatientProf/>} />
          
          <Route path="/Register/main/PatientProfile" element={<AfterPatientProfile/>} />
          <Route path="Table" element={<Table/>} />
          <Route path="/Signin" element={<SignIn/>} />

          
        </Routes>
      </Router>


      </div>
    </div>

  );
}

export default App;
    /*<div className="app">
      <Topbar/>
      <Signup/>
    </div>*/

    /*
    <Router>
     <div> 
     <Link to="/signup">Sign Up</Link>
     </div>
     <Routes>
      <Route path="/" exact>
        <Signup />
        </Route>
     </Routes>
     </Router>
     */
