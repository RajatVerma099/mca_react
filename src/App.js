import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Sem1 from "./Pages/Sem1";
import Sem2 from "./Pages/Sem2";
import Sem3 from "./Pages/Sem3";
import Sem4 from "./Pages/Sem4";

function App() {
  return (
    <>
    <Router>
      <center>
      <nav style={{backgroundColor:"black", height:"45pt"}}>
      {/* demo image */}
      {/* <img src='https://elements.envato.com/photos/city'/> */}
      {/* <button className="navbutton"> */}
        <Link to="/"> Home Page </Link>
        {/* </button> */}

      <br></br>
        <Link to="/Pages/Sem1"> Sem 1 </Link>

        <Link to="/Pages/Sem2"> Sem 2 </Link>

        <Link to="/Pages/Sem3"> Sem 3 </Link>

        <Link to="/Pages/Sem4"> Sem 4 </Link>
 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages/Sem1" element={<Sem1 />} />
        <Route path="/Pages/Sem2" element={<Sem2 />} />
        <Route path="/Pages/Sem3" element={<Sem3 />} />
        <Route path="/Pages/Sem4" element={<Sem4 />} />
      </Routes>
      <div>  </div>
      </center>
    </Router>
<img 
src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
alt="new"
/>
    </>
  );
}

export default App;




/*
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import './tosem1';
function App() {
  var Heading="MCA Notes App :)";
  return (
  <>
 <div className="appbar"><center><p className="headingText">{Heading}</p></center></div>
  <center>
    <h5><u><b>Select Semester</b></u></h5>
  <button className="buttonstyle" >
    Semester 1
  </button>
  <button className="buttonstyle">
    Semester 2
  </button>
  <br/>
  <button className="buttonstyle">
    Semester 3
  </button>
  <button className="buttonstyle">
    Semester 4
  </button>
  <br/>

  </center>
  </>
  
  );
}

export default App;
*/