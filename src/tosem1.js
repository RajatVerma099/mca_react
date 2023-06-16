import './App.css';

export default function tosem1() {
  var Heading="First Semester";
  return (
  <>
 <div className="appbar"><center><p className="headingText">{Heading}</p></center></div>
  <center>
    <h5><u><b>Select Semester</b></u></h5>
  <button className="buttonstyle" onClick="tosem1">
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