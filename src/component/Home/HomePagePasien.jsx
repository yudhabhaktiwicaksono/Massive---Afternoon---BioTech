import React from "react";
import "./HomePagePasien.css";
import foto1 from "../images/foto1.png";
import foto4 from "../images/foto4.png";
import foto3 from "../images/foto3.png";
import foto5 from "../images/foto5.png";
import notif from "../images/notif.png";
import pesan from "../images/pesan.png";
import profil from "../images/profil.png";
import suhu from "../images/suhu.png";
import tb from "../images/tb.png";
import bb from "../images/tb.png";
import dj from "../images/dj.png";
import line from "../images/line.png";
import line2 from "../images/line2.png";
import search from "../images/search.png";
import Sidebar from "../Sidebar/sidebar";
import Date_time from "../date_time/date_time";
import Responsive from "../card_slide/card_slide";

const HomePagePasien = () => {
  var unsplashZDjhwOUvTwIcon = document.getElementById(
    "unsplashZDjhwOUvTwIcon"
  );
  if (unsplashZDjhwOUvTwIcon) {
    unsplashZDjhwOUvTwIcon.addEventListener("click", function (e) {
      window.location.href = "./profile-pasien.html";
    });
  }

  var groupContainer11 = document.getElementById("groupContainer11");
  if (groupContainer11) {
    groupContainer11.addEventListener("click", function (e) {
      window.location.href = "./artikel.html";
    });
  }

  var groupContainer13 = document.getElementById("groupContainer13");
  if (groupContainer13) {
    groupContainer13.addEventListener("click", function (e) {
      window.location.href = "./hal-sebelum-login.html";
    });
  }
  return (
    <>
      <div class="homepage-pasien">
        <div class="rectangle-parent">
          <div class="group-child">
            {" "}
            <input type="search" placeholder="Search...." />{" "}
          </div>
          <img class="icround-search-icon" alt="" src={search} />
        </div>
        <div class="group-parent">
          <div class="rectangle-group">
            <div class="group-item"></div>
            <div class="pm-13-desember-2022">
              {" "}
              <Date_time />{" "}
            </div>
          </div>
          <div class="group-container">
            <img class="group-inner" alt="" src={notif} />
            <img class="unsplashz-djhwouvtw-icon" alt="" src={profil} />
            <img class="ellipse-icon" alt="" src="public/ellipse-2.svg" />
            <div class="div">20</div>
          </div>
          <div class="ellipse-parent">
            <img class="group-inner" alt="" src={pesan} />
            <img class="group-child2" alt="" src="public/ellipse-4.svg" />
          </div>
        </div>
        <div class="rectangle-container">
          <div class="rectangle-div"></div>
          <b class="save-your-health-record">Save your health record</b>
          <img class="pexels-antoni-shkraba-5215024-icon" alt="" src={foto1} />
        </div>
        <div class="homepage-pasien-inner">
          <div class="group-div">
            <div class="group-child3"></div>
            <div class="group-child4"></div>
            <img class="unsplashwnolnjo7ts8-icon" src={foto5} alt="" />
            <b class="yudha-bakti-wicaksono">Yudha Bakti Wicaksono</b>
            <b class="your-profile">Your profile</b>
            <b class="b1">+6287734565543</b>
            <b class="male-19">Male, 19</b>
            <b class="jawa-barat">Jawa Barat</b>
            <b class="lihat-profil">Lihat profil</b>
            <img class="vector-icon" alt="" src="public/vector.svg" />
            <img class="group-icon" alt="" src={foto4} />
          </div>
        </div>
        <div class="homepage-pasien-child">
          <div class="group-div">
            <div class="group-child3"></div>
            <div class="group-child4"></div>
            <img class="unsplashwnolnjo7ts8-icon" alt="" src={foto5} />
            <b class="yudha-bakti-wicaksono">Yudha Bakti Wicaksono</b>
            <b class="your-profile">Medication</b>
            <b class="b1">+6287734565543</b>
            <b class="male-19">Male, 19</b>
            <b class="jawa-barat">Jawa Barat</b>
            <a href="" className="lihat-profil">
              Lihat Profil
            </a>
            <img class="vector-icon" alt="" src="public/vector.svg" />
            <img class="group-icon" alt="" src={foto4} />
          </div>
        </div>
        <div class="homepage-pasien-inner1">
          <div class="group-div">
            <div class="group-child3"></div>
            <div class="group-child4"></div>
            <img class="unsplashwnolnjo7ts8-icon" alt="" src={foto5} />
            <b class="yudha-bakti-wicaksono">Yudha Bakti Wicaksono</b>
            <b class="your-profile">Medication</b>
            <b class="b1">+6287734565543</b>
            <b class="male-19">Male, 19</b>
            <b class="jawa-barat">Jawa Barat</b>
            <a href="" className="lihat-profil">
              Lihat Profil
            </a>
            <img class="vector-icon" alt="" src="public/vector.svg" />
            <img class="group-icon" alt="" src={foto4} />
          </div>
        </div>
        <div class="homepage-pasien-inner2">
          <div class="group-div">
            <div class="group-child3"></div>
            <div class="group-child4"></div>
            <img class="unsplashwnolnjo7ts8-icon" alt="" src={foto5} />
            <b class="yudha-bakti-wicaksono">Yudha Bakti Wicaksono</b>
            <b class="your-profile">Allergies</b>
            <b class="b1">+6287734565543</b>
            <b class="male-19">Male, 19</b>
            <b class="jawa-barat">Jawa Barat</b>
            <a href="" className="lihat-profil">
              Lihat Profil
            </a>
            <img class="vector-icon" alt="" src="public/vector.svg" />
            <img class="group-icon" alt="" src={foto4} />
          </div>
        </div>
        <div class="homepage-pasien-inner3">
          <div class="group-div">
            <div class="group-child3"></div>
            <div class="group-child4"></div>
            <img class="unsplashwnolnjo7ts8-icon" alt="" src={foto5} />
            <b class="yudha-bakti-wicaksono">Yudha Bakti Wicaksono</b>
            <b class="your-profile">Your profile</b>
            <b class="b1">+6287734565543</b>
            <b class="male-19">Male, 19</b>
            <b class="jawa-barat">Jawa Barat</b>
            <a href="" className="lihat-profil">
              Lihat Profil
            </a>
            <img class="vector-icon" alt="" src="public/vector.svg" />
            <img class="group-icon" alt="" src={foto4} />
          </div>
        </div>
        <div class="group-parent1">
          <div class="rectangle-parent5">
            <div class="group-child17"></div>
            <div class="group-child18"></div>
            <b class="vital">Vital</b>
            <b class="lab-reports">Lab Reports</b>
            <a href="" class="view-all">
              View all
            </a>
            <img class="vector-icon5" alt="" src="public/vector.svg" />
            <img class="group-icon" alt="" src={foto4} />
          </div>
          <div class="temperature-parent">
            <b class="temperature">Temperature</b>
            <b class="f">98.2 F</b>
            <img class="temperature-icon" alt="" src={suhu} />
          </div>
          <div class="tinggi-badan-parent">
            <b class="temperature">Tinggi Badan</b>
            <b class="f">160 cm</b>
            <img class="temperature-icon" alt="" src={tb} />
          </div>
          <div class="berat-badan-parent">
            <b class="temperature">Berat Badan</b>
            <b class="f">50 kg</b>
            <img class="temperature-icon" alt="" src={bb} />
          </div>
          <div class="detak-jantung-parent">
            <b class="temperature">Detak Jantung</b>
            <b class="f">166 bpm</b>
            <img class="temperature-icon" alt="" src={dj} />
          </div>
        </div>
        <div class="group-parent2">
          <div class="rectangle-parent5">
            <div class="group-child17"></div>
            <div class="group-child18"></div>
            <b class="vital">Todays Appointment</b>
            <b class="lab-reports">Lab Reports</b>
            <a href="" class="view-all">
              View all
            </a>
            <img class="vector-icon5" alt="" src="public/vector.svg" />
            <img class="group-icon" alt="" src={foto4} />
          </div>
          <div class="temperature-parent">
            <b class="temperature">Temperature</b>
            <b class="f">98.2 F</b>
            <img class="temperature-icon" alt="" src={suhu} />
          </div>
          <div class="tinggi-badan-parent">
            <b class="temperature">Tinggi Badan</b>
            <b class="f">160 cm</b>
            <img class="temperature-icon" alt="" src={tb} />
          </div>
          <div class="berat-badan-parent">
            <b class="temperature">Berat Badan</b>
            <b class="f">50 kg</b>
            <img class="temperature-icon" alt="" src={bb} />
          </div>
          <div class="detak-jantung-parent">
            <b class="temperature">Detak Jantung</b>
            <b class="f">166 bpm</b>
            <img class="temperature-icon" alt="" src={dj} />
          </div>
        </div>
        <div class="homepage-pasien-inner4">
          <div class="rectangle-parent7">
            <div class="group-child23"></div>
            <div class="group-child24"></div>
            <b class="todays-article">Todays Article</b>
            <img class="vector-icon7" alt="" src="public/vector7.svg" />
            <img class="vector-icon8" alt="" src="public/vector8.svg" />
            <img class="group-child25" alt="" src={foto3} />
          </div>
        </div>
        <div class="unsplashrbde93-0hhs-parent">
          <div className="slider-container">
            <Responsive />
          </div>
        </div>

        <div class="line-div"></div>
        <div class="line-chart">
          <div class="rectangle"></div>
          <img class="x-axis-grid-icon" alt="" src="public/xaxis-grid.svg" />
          <img class="x-axis-grid-icon1" alt="" src="public/xaxis-grid.svg" />
          <img class="x-axis-grid-icon2" alt="" src="public/xaxis-grid.svg" />
          <img class="x-axis-grid-icon3" alt="" src="public/xaxis-grid.svg" />
          <img class="x-axis-grid-icon4" alt="" src="public/xaxis-grid.svg" />
          <img class="y-axis-grid-icon" alt="" src="public/yaxis-grid.svg" />
          <img class="y-axis-grid-icon1" alt="" src="public/yaxis-grid.svg" />
          <img class="y-axis-grid-icon2" alt="" src="public/yaxis-grid.svg" />
          <img class="y-axis-grid-icon3" alt="" src="public/yaxis-grid.svg" />
          <img class="y-axis-grid-icon4" alt="" src="public/yaxis-grid.svg" />
          <img class="y-axis-grid-icon5" alt="" src="public/yaxis-grid.svg" />
          <img class="y-axis-grid-icon" alt="" src="public/yaxis-grid.svg" />
          <img class="x-axis-grid-icon" alt="" src="public/xaxis-grid.svg" />
          <div class="text">Text</div>
          <div class="text1">Text</div>
          <div class="text2">Text</div>
          <div class="text3">Text</div>
          <div class="text4">Text</div>
          <div class="div2">0</div>
          <div class="div3">25</div>
          <div class="div4">50</div>
          <div class="div5">75</div>
          <div class="div6">100</div>
          <div class="div7">125</div>
          <img class="line-icon" alt="" src={line} />
          <img class="line-icon1" alt="" src={line2} />
          <img class="marker-icon" alt="" src="public/marker.svg" />
          <img class="marker-icon1" alt="" src="public/marker1.svg" />
          <img class="marker-icon2" alt="" src="public/marker2.svg" />
          <img class="marker-icon3" alt="" src="public/marker3.svg" />
          <img class="marker-icon4" alt="" src="public/marker4.svg" />
          <img class="marker-icon5" alt="" src="public/marker5.svg" />
          <img class="marker-icon6" alt="" src="public/marker6.svg" />
          <img class="marker-icon7" alt="" src="public/marker7.svg" />
          <img class="marker-icon8" alt="" src="public/marker8.svg" />
          <img class="marker-icon9" alt="" src="public/marker9.svg" />
        </div>
        <div class="rectangle-parent8">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default HomePagePasien;
