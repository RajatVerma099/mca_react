
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
//   import './App.css';
//   import './tosem1';

  function Home() {
    var Heading="MCA Notes App :)";
    return (
    <>
    <center>
        <div className="welcome">
  <h1><b><u>Welcome</u></b></h1>
  <p style={{height:"100vh"}}>
  Hey CEGians :) <br></br>
  Welcome to our MCA Notes and Study Material App!

Get ready to master the world of computer applications with our comprehensive resources. Explore well-crafted notes, books that would help you through your semesters.
<br></br><br></br>
Share the app if you found it helpful in any way.

<br></br><br></br>
Welcome aboard,
<br></br> 
:)

  </p>
  </div>
    </center>
    </>
    
    );
  }
  
  export default Home;