import Topbar from "./components/topbar/Topbar"
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
