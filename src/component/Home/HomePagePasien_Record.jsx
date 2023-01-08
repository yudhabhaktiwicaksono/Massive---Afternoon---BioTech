import React from "react";
import "./HomePagePasien_Record.css";
import "./global.css";
import Sidebar from "../Sidebar/sidebar";
import Date_time from "../date_time/date_time";
import eye from "../images/eye.png";
import cetak from "../images/cetak.png";
import unduh from "../images/unduh.png";
import profil from "../images/profil.png"
import notif from "../images/notif.png";
import pesan from "../images/pesan.png";
import search from "../images/search.png"
import Card_record from "./card_record";
const Medical = () =>{
    var unsplashZDjhwOUvTwIcon = document.getElementById("unsplashZDjhwOUvTwIcon");
    if (unsplashZDjhwOUvTwIcon) {
      unsplashZDjhwOUvTwIcon.addEventListener("click", function (e) {
        window.location.href = "./profile-pasien.html";
      });
    }
    
    var pastMedicalRecord = document.getElementById("pastMedicalRecord");
    if (pastMedicalRecord) {
      pastMedicalRecord.addEventListener("click", function (e) {
        // Please sync "Medical Record Pasien 1" to the project
      });
    }
    
    var unsplashZDjhwOUvTwIcon1 = document.getElementById(
      "unsplashZDjhwOUvTwIcon1"
    );
    if (unsplashZDjhwOUvTwIcon1) {
      unsplashZDjhwOUvTwIcon1.addEventListener("click", function (e) {
        window.location.href = "./profile-pasien.html";
      });
    }
    
    var frameContainer8 = document.getElementById("frameContainer8");
    if (frameContainer8) {
      frameContainer8.addEventListener("click", function (e) {
        window.location.href = "./artikel.html";
      });
    }
    
    var frameContainer9 = document.getElementById("frameContainer9");
    if (frameContainer9) {
      frameContainer9.addEventListener("click", function (e) {
        window.location.href = "./f-a-q.html";
      });
    }
    
    var frameContainer10 = document.getElementById("frameContainer10");
    if (frameContainer10) {
      frameContainer10.addEventListener("click", function (e) {
        window.location.href = "./hal-sebelum-login.html";
      });
    }
    
    var frameContainer11 = document.getElementById("frameContainer11");
    if (frameContainer11) {
      frameContainer11.addEventListener("click", function (e) {
        window.location.href = "./homapage-pasien1.html";
      });
    }

    return(
        <>
        
        <div class="medical-record-pasien">
      <div class="rectangle-parent">
        <input className="group-child" type="search" name="" id="" placeholder="Search..." /> 
        <img
          class="icround-search-icon"
          alt=""
          src={search}
        />
      </div>
      <div class="group-parent">
        <div class="rectangle-group">
          <div class="group-item"></div>
          <div class="pm-13-desember-2022"> <Date_time/> </div>
        </div>
        <div class="ellipse-parent">
          <img class="group-inner" alt="" src={pesan} />
          <img
            class="unsplashz-djhwouvtw-icon"
            alt=""
            src={profil}
            id="unsplashZDjhwOUvTwIcon"
          />
          <div class="div">20</div>
        </div>
        <div class="ellipse-group">
          <img class="group-inner" alt="" src={notif} /><img
            class="group-child2"
            alt=""
            src="public/ellipse-4.svg"
          />
          <div class="div1">5</div>
         
        </div>
      </div>
      <div class="medical-record-pasien-inner">
        <div class="latest-medical-record-parent">
          <div class="latest-medical-record">Latest Medical Record</div>
          <div class="past-medical-record" id="pastMedicalRecord">
            Past Medical Record
          </div>
        </div>
      </div>
      <div class="rectangle-container">
      <Card_record/>
      <Card_record/>
      <Card_record/>
      <Card_record/>
      <Card_record/>
      <Card_record/>
      </div>
      <div class="medical-records">Medical Records</div>
      <div class="rectangle-parent1">
        <Sidebar/>
      </div>
    </div>
        
        
        
        
        </>


    )

}

export default Medical;