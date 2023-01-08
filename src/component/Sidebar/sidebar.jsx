import React from "react";
import "./sidebar.css";
import home from "../images/home.png";
import medical from "../images/record.png";
import lab from "../images/lab.png";
import appoitment from "../images/appoitment.png"
import recent from "../images/recent.png";
import article from "../images/article.png";
import faq from "../images/faq.png";
import sign from "../images/sign.png";
import logo from "../images/logo.png";


const Sidebar = () =>{  
  
    return(
        
        <>
           <nav className="sidebar">
      <div class="sidebar-inner">
        <header class="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
          ></button>
          <img src={logo} class="sidebar-logo" />
        </header>
        <nav className="sidebar-menu">
            <a className="active" href=""> <img src={home} /> Home</a>
            <a href=""><img src={medical} /> Medical Records</a>
            <a href=""><img src={lab} />  Lab Reports</a>
            <a href=""> <img src={appoitment} /> Appoitments</a>
            <a href=""> <img src={recent} /> Recent Records</a>
            <a href=""><img src={article} />Article</a>       
            <a href=""><img src={faq} />FAQ</a>
            <a href=""> <img src={sign} />Sign Out</a>
        </nav>
      </div>
    </nav>

    
        
        </>
    
    )
    
}

export default Sidebar;

