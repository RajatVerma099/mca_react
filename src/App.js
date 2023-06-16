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
