import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/assets/scss/styles.scss";
import "remixicon/fonts/remixicon.css";
import reportWebVitals from "./reportWebVitals";
import HomeDokter from "./component/Home/dokter/HomeDokter";
import Splashscreen from "./component/splashscreen/Splashscreen";
import MedicalDokter from "./component/Home/dokter/MedicalDokter";
import Medical from "./component/Home/HomePagePasien_Record";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Cetak from "./component/Home/dokter/Cetak";
import HomePageDokter from "./component/Home/dokter/HomePageDokter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splashscreen />}></Route>
        <Route path="/Home" element={<HomeDokter />}></Route>
        <Route path="/Medical" element={<Medical />}></Route>
        <Route path="/MedicalDokter" element={<MedicalDokter />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/  Cetak" element={<Cetak />}></Route>
        <Route path="/HomePageDokter" element={<HomePageDokter />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
