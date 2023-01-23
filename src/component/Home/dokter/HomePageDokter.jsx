import React from "react";
import "./homepagedokter.css";
import "./medical_dokter.css";
import Sidebar from "../../Sidebar/sidebar";
import "../global.css";
import search from "../../images/search.png";
import Date_time from "../../date_time/date_time";
import profil from "../../images/profil.png";
import notif from "../../images/notif.png";
import pesan from "../../images/pesan.png";
import HPD from "../../images/HPD.png";
import patient from "../../images/Patient.png";
import appo from "../../images/appoinment.png";
import graf from "../../images/graf.png";
import listap from "../../images/list.png";
import grafik from "../../images/grafik.png";

function HomePageDokter() {
  return (
    <>
      <Sidebar />
      <div>
        <div className="rectangle-parent">
          <input
            className="group-child"
            type="search"
            name=""
            id=""
            placeholder="Search..."
          />
          <img className="icround-search-icon" alt="" src={search} />
        </div>
        <div className="group-parent">
          <div className="rectangle-group">
            <div className="group-item"></div>
            <div className="pm-13-desember-2022">
              {" "}
              <Date_time />{" "}
            </div>
          </div>
          <div className="ellipse-parent">
            <img className="group-inner" alt="" src={pesan} />
            <img
              className="unsplashz-djhwouvtw-icon"
              alt=""
              src={profil}
              id="unsplashZDjhwOUvTwIcon"
            />
            <div className="div">20</div>
          </div>
          <div className="ellipse-group">
            <img className="group-inner" alt="" src={notif} />
            <img className="group-child2" alt="" src="public/ellipse-4.svg" />
            <div className="div1">5</div>
          </div>
        </div>
        <div className="container-dokter">
          <div
            className="card mb-3 rounded-4"
            style={{ backgroundColor: "#B9F5C8" }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <h2 className="ms-5">
                    <b>Keep your patient record</b>
                  </h2>
                  <h5 className="ms-5 mt-5">
                    <b>
                      Membantu Anda dalam melayani pasien dan <br />
                      mencatat rekam medis pasien secara elektronik
                    </b>
                  </h5>
                </div>
                <div className="col-4 ">
                  <img src={HPD} style={{ width: "200px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div
                className="card rounded-5"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-4">
                      <img src={patient} />
                    </div>
                    <div className="col-8">
                      <h5>My Patients</h5>
                    </div>
                  </div>
                  <h1 className="mb-3">213</h1>
                  <div className="row">
                    <div className="col-8">
                      <h5>last 7 days</h5>
                    </div>
                    <div className="col-4">
                      <img src={graf} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card rounded-5"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <div className="card-body">
                  <div className="row ">
                    <div className="col-3">
                      <img src={appo} />
                    </div>
                    <div className="col-9">
                      <h5>Today Appoinments</h5>
                    </div>
                  </div>
                  <h1 className="mb-2">13</h1>
                  <div className="row">
                    <div className="col-8">
                      <h5>last 7 days</h5>
                    </div>
                    <div className="col-4">
                      <img src={graf} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card rounded-5"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-4">
                      <img src={patient} />
                    </div>
                    <div className="col-8">
                      <h5>Today Patients</h5>
                    </div>
                  </div>
                  <h1 className="mb-3">23</h1>
                  <div className="row">
                    <div className="col-8">
                      <h5>last 7 days</h5>
                    </div>
                    <div className="col-4">
                      <img src={graf} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card rounded-5"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-4">
                      <img src={patient} />
                    </div>
                    <div className="col-8">
                      <h5>New Patient</h5>
                    </div>
                  </div>
                  <h1 className="mb-3">9</h1>
                  <div className="row">
                    <div className="col-8">
                      <h5>last 7 days</h5>
                    </div>
                    <div className="col-4">
                      <img src={graf} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 mb-3">
            <div className="col-2">
              <h5>Patients List</h5>
            </div>
            <div className="col-8">
              <img src={listap} style={{ width: "30px" }} />
            </div>
            <div className="col-2">
              <button
                className="btn btn-outline-success me-md-2 rounded-5"
                type="button"
                style={{ color: "black" }}
              >
                View All
              </button>
            </div>
          </div>
          <table className="table">
            <tr style={{ backgroundColor: "grey" }}>
              <td>Name</td>
              <td>Doctor</td>
              <td>Diagnosa</td>
              <td>Latest Control</td>
              <td>Next Control</td>
            </tr>
            <tr>
              <td>Yudha Bakti W. </td>
              <td>dr. Andre M.KEG</td>
              <td>...</td>
              <td>12/6/2022</td>
              <td>12/10/2022</td>
            </tr>
            <tr>
              <td>Yudha Bakti W. </td>
              <td>dr. Andre M.KEG</td>
              <td>...</td>
              <td>12/6/2022</td>
              <td>12/10/2022</td>
            </tr>
            <tr>
              <td>Yudha Bakti W. </td>
              <td>dr. Andre M.KEG</td>
              <td>...</td>
              <td>12/6/2022</td>
              <td>12/10/2022</td>
            </tr>
            <tr>
              <td>Yudha Bakti W. </td>
              <td>dr. Andre M.KEG</td>
              <td>...</td>
              <td>12/6/2022</td>
              <td>12/10/2022</td>
            </tr>
          </table>
          <img src={grafik} />
        </div>
      </div>
    </>
  );
}

export default HomePageDokter;
