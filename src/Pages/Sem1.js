/*
function Sem3() {
    var Heading="Semester 1 :)";
    return (
    <>

   <div className="appbar"><center><p className="headingText">{Heading}</p></center></div>
    
    <ol >
         <button className="styledbutton"><li><a href="https://drive.google.com/uc?export=view&id=1mm447nq0Y2EXr_pc9uaHyt0ztmK053ka">Syllabus</a></li></button><br></br>
         <button className="styledbutton"><li><a>Linear Algebra, Probability and Statistics</a></li></button><br></br>
         <button className="styledbutton"> <li>Data Structures & Algorithms</li> </button><br></br>
         <button className="styledbutton"> <li>Python Programming</li> </button><br></br>
         <button className="styledbutton"> <li>Network Programming and Device Management</li> </button><br></br>
         <button className="styledbutton"> <li>Content Technologies</li> </button><br></br>
         <button className="styledbutton"> <li>Research Methodology and IPR</li> </button>
         <br></br>
         <p>Labs :</p> 
         <br></br>
         <button className="styledbutton"> <li>Programming in Python Laboratory</li> </button><br></br>
         <button className="styledbutton"> <li>Data structures & Algorithms Laboratory</li> </button><br></br>
         </ol>
  
    </>
    
    );
  }
  
  export default Sem3;
  */



import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Sem2() {
  var accord = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < accord.length; i++) {
    accord[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
  return (
    <>

<div class="accordion">
    <button class="accordion-btn"> <span>Syllabus</span></button>
    <div class="panel">
        <button class="accordion-btn inner-accord"><a href='https://drive.google.com/uc?export=view&id=1nbOcH7ExKzrDTUPEvL7PN0MoZc5MCRFz'><span>Link to Syllabus</span></a></button>
        <div class="panel">
            {/* <div class="content1"><input type="checkbox"/>Subscription</div> */}
        </div>
        {/* <button class="accordion-btn inner-accord"><span>Auto Publish</span></button>
        <div class="panel">
            <div class="content1"><input type="checkbox"/>Cash Offers</div>
            <div class="content1"><input type="checkbox"/>Conditional Cash Offers</div>
            <div class="content1"><input type="checkbox"/>Cash Rebates</div>
            <div class="content1"><input type="checkbox"/>Conditional Cash Rebates</div>
            <div class="content1"><input type="checkbox"/>Formula Pricing Cash Offers</div>
        </div> */}
        
    </div>
    {/* <!-- panel --> */}
</div>

<div class="accordion">
    <button class="accordion-btn"><span>APR Offers</span></button>
    <div class="panel">
        <div class="content"><input type="checkbox"/>Subscription</div>
        <button class="accordion-btn inner-accord"><span>Auto Publish</span></button>
        <div class="panel">
            <div class="content1"><input type="checkbox"/>APR Offers</div>
            <div class="content1"><input type="checkbox"/>Conditional APR Offers</div>
            <div class="content1"><input type="checkbox"/>APR Rebates</div>
            <div class="content1"><input type="checkbox"/>Conditional APR Rebates</div>
                    <div class="content1"><input type="checkbox"/>Formula Pricing APR Rebates</div>
        </div>
    </div>
    {/* <!-- panel --> */}
</div>
<div class="accordion">
    <button class="accordion-btn"><span>LEASE Offers</span></button>
    <div class="panel">
        <div class="content"><input type="checkbox"/>Subscription</div>
        <button class="accordion-btn inner-accord"><span>Auto Publish</span></button>
        <div class="panel">
            <div class="content1"><input type="checkbox"/>Lease Offers</div>
            <div class="content1"><input type="checkbox"/>Lease Rebates</div>
        </div>
    </div>
</div>

    </>
   
  );
}









/*
 <div>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Syllabus</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Linear Algebra, Probability and Statistics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Data Structures & Algorithms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Network Programming and Device Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Content Technologies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Research Methodology and IPR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Programming in Python Laboratory</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Data structures & Algorithms Laboratory</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      </div>
      
      accordian
      */





















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