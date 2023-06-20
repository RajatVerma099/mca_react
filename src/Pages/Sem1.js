import PdfPage from "./PdfPage";
import React,{useState} from 'react';
function Sem1() {
    var Heading="Semester 1 :)";
    
const [state,setState]= useState("")

const changeState=()=>{
    setState("https://cac.annauniv.edu/uddetails/udpg_2019/ice/18.M.C.A.%20(2%20years)%20-2021-22.pdf");
    //PdfPage();
}
    return (
    <>
   <div className="appbar"><center><p className="headingText">{Heading}</p></center></div>
    <button onClick={changeState}>
        Syllabus
    </button>
        <ol>
        <li><a>Linear Algebra, Probability and Statistics</a></li>
        <li>Data Structures & Algorithms</li>
        <li>Python Programming</li>
        <li>Network Programming and Device Management</li>
        <li>Content Technologies</li>
        <li>Research Methodology and IPR</li>
        <p>Labs :</p>
        <li>Programming in Python Laboratory</li>
        <li>Data structures & Algorithms Laboratory</li>
        </ol>
        <PdfPage link={state}/>
    </>

    );
  }
  
  export default Sem1;