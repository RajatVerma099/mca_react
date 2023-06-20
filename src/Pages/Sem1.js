function Sem3() {
    var Heading="Semester 1 :)";
    return (
    <>
   <div className="appbar"><center><p className="headingText">{Heading}</p></center></div>
    <center>
    <ol >
         <li><a href="https://drive.google.com/uc?export=view&id=1mm447nq0Y2EXr_pc9uaHyt0ztmK053ka">Syllabus</a></li>
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
  
    </center>
    </>
    
    );
  }
  
  export default Sem3;






























// import PdfPage from "./PdfPage";
// import { Document, Page, pdfjs } from 'react-pdf'
// import React,{useState} from 'react';
// function Sem1() {
//     var Heading="Semester 1 :)";
//     pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
// const [state,setState]= useState("")

// const changeState=()=>{
//     setState("https://drive.google.com/uc?export=view&id=1mm447nq0Y2EXr_pc9uaHyt0ztmK053ka");//https://cac.annauniv.edu/uddetails/udpg_2019/ice/18.M.C.A.%20(2%20years)%20-2021-22.pdf");
//     //PdfPage();
// }
//     return (
//     <>
//     <Document
//   file={{ url: "https://drive.google.com/uc?export=view&id=1mm447nq0Y2EXr_pc9uaHyt0ztmK053ka" }}
//   //onLoadSuccess={onDocumentLoadSuccess}
// >
//   // pages here, we will get back to that later
// </Document>
//    <div className="appbar"><center><p className="headingText">{Heading}</p></center></div>
//     <button onClick={changeState}>
//         Syllabus
//     </button>
//         <ol>
//         <li><a>Linear Algebra, Probability and Statistics</a></li>
//         <li>Data Structures & Algorithms</li>
//         <li>Python Programming</li>
//         <li>Network Programming and Device Management</li>
//         <li>Content Technologies</li>
//         <li>Research Methodology and IPR</li>
//         <p>Labs :</p>
//         <li>Programming in Python Laboratory</li>
//         <li>Data structures & Algorithms Laboratory</li>
//         </ol>
//         <PdfPage link={state}/>
//     </>

//     );
//   }
  
//   export default Sem1;