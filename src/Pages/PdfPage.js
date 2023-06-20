import React,{useState} from "react";
import Sem1 from "./Sem1";

export const PdfPage=(props)=>
{
    console.log(props)
return (
    <div className='container' style={{height:"100vh"}}>
        <iframe src={props.link} width={"100%"} height={"100%"} ></iframe>
    </div>
    )
}
export default PdfPage;