import React from "react";
import "./Daftar.css";
import dokter from "../images/dokter.png";
import rumah from "../images/rumah.png"
import doctor from "../images/doctor.png";
import pasien from "../images/pasien.png";

const Daftar = () =>{
    return(
        <>
        <div className="container">
            <div className="daftar-img">
            <img src={dokter} alt="" />
            </div>
            <div className="btn-container">
            <div className="btn-daftar">
               <h3>Daftar Sebagai :</h3>
               <button className="daftar-btn"><img src={doctor} alt=""/> <a href="">Dokter</a></button>
               <button  className="daftar-btn"><img src={rumah} alt="" /><a href="">Rumah Sakit</a></button>
               <button  className="daftar-btn"><img src={pasien} alt=""/><a href="">Pasien</a></button>
            </div>
            </div>
        </div>

        
        
        </>
    )
}

export default Daftar;