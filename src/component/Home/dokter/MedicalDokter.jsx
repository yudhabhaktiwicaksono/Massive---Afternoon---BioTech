import React, { useState } from "react";
import "./medical_dokter.css";
import Sidebar from "../../Sidebar/sidebar";
import "../global.css";
import search from "../../images/search.png";
import Date_time from "../../date_time/date_time";
import profil from "../../images/profil.png";
import notif from "../../images/notif.png";
import pesan from "../../images/pesan.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MedicalDokter() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
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
          <div className="row">
            <div className="col-8">
              <div className="judul">
                <h3>
                  <b style={{ color: "#2DE15B" }}>FORM REKAM MEDIS</b>
                  <hr className="hr-dokter" />
                </h3>
              </div>
            </div>
            <div className="col-4 align-items-end">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end align-items-end">
                <Button
                  variant="success"
                  onClick={handleShowAdd}
                  style={{ fontSize: "18px" }}
                >
                  Add
                </Button>

                <Modal
                  show={showAdd}
                  onHide={handleCloseAdd}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Hapus Data
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Data rekam medis berhasil ditambah</Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseAdd}>
                      Ok
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  variant="success"
                  onClick={handleShow}
                  style={{ fontSize: "18px" }}
                >
                  Delete
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Hapus Data
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Apakah akan menghapus data <br />
                    Apakah anda yakin ?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      No
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <button
                  className="btn btn-success"
                  type="button"
                  style={{ fontSize: "18px" }}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div className="row dok-tabel">
            <div className="col-4">
              <label>No. RM</label>
              <br />
              <input
                type={"text"}
                className="border border-1 border-dark"
                style={{ width: "300px" }}
              />
              <br />
              <label>Nama Pasien</label>
              <br />
              <input
                type={"text"}
                className="border border-1 border-dark"
                style={{ width: "300px" }}
              />
              <br />
              <div className="row">
                <div className="col-5">
                  <label>Jenis Kelamin</label>
                  <br />
                  <input
                    type={"text"}
                    className="border border-1 border-dark"
                    style={{ width: "125px" }}
                  />
                  <br />
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                  <label>Status </label>
                  <br />
                  <input
                    type={"text"}
                    className="border border-1 border-dark"
                    style={{ width: "125px" }}
                  />
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <label>Tanggal</label>
                  <br />
                  <input
                    type={"date"}
                    className="border border-1 border-dark"
                    style={{ width: "125px" }}
                  />
                  <br />
                </div>
                <div className="col-1"></div>
                <div className="form-group col-md-4">
                  <label for="inputState">State</label>
                  <br />
                  <select style={{ width: "125px" }}>
                    <option selected>Umum</option>
                    <option>Gigi</option>
                    <option>Kandungan</option>
                    <option>Kandungan</option>
                    <option>Jantung</option>
                    <option>THT</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <label>Kode ICD</label>
                  <br />
                  <input
                    type={"text"}
                    className="border border-1 border-dark"
                    style={{ width: "80px" }}
                  />
                  <br />
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                  <label>Nama Dokter</label>
                  <br />
                  <input
                    type={"text"}
                    className="border border-1 border-dark"
                    style={{ width: "185px" }}
                  />
                  <br />
                </div>
              </div>
            </div>
            <div className="col-4">
              <label>Hasil Anamnesa</label>
              <br />
              <input
                type={"text area"}
                className="border border-1 border-dark"
                style={{ width: "250px", height: "52px" }}
              />
              <br />
              <label>Diagnosa</label>
              <br />
              <input
                type={"text area"}
                className="border border-1 border-dark"
                style={{ width: "250px", height: "52px" }}
              />
              <br />
              <label>Terapi</label>
              <br />
              <input
                type={"text area"}
                className="border border-1 border-dark"
                style={{ width: "250px", height: "52px" }}
              />
              <br />
            </div>
            <div className="col-4">
              <label>Cari Nama Pasien</label>
              <br />
              <input
                type={"text"}
                className="border border-1 border-dark me-2"
                style={{ width: "340px" }}
              />
              <br />
              <br />
              <table className="table dok">
                <tr>
                  <th style={{ backgroundColor: "#d9d9d9" }}>
                    No. Rekam Medis
                  </th>
                  <th style={{ backgroundColor: "#d9d9d9" }}>Nama Pasien</th>
                </tr>
                <tr>
                  <td>RM-997</td>
                  <td>Rens</td>
                </tr>
                <tr>
                  <td>RM-997</td>
                  <td>Rens</td>
                </tr>
                <tr>
                  <td>RM-997</td>
                  <td>Rens</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="mt-3">
            <table className="table tabel">
              <tr className="tabel-judul">
                <th>No.</th>
                <th>No. RM</th>
                <th>Nama Pasien</th>
                <th>Jenis Kelamin</th>
                <th>Status</th>
                <th>Tanggal</th>
                <th>Poli</th>
                <th>Kode ICD</th>
                <th>Dokter</th>
                <th>Hasil anamne</th>
                <th>Diagnosa</th>
                <th>Terapi</th>
              </tr>
              <tr>
                <td>1</td>
                <td>RM-997</td>
                <td>Muh Amin</td>
                <td>Laki-laki</td>
                <td>Tn</td>
                <td>28/12/2022</td>
                <td>Gigi</td>
                <td>131</td>
                <td>Dr.Firman</td>
                <td>Hasil Anamne</td>
                <td>Sakit Gigi</td>
                <td>-</td>
              </tr>
            </table>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
            <button
              className="btn btn-success me-md-2"
              type="button"
              style={{ fontSize: "18px" }}
            >
              <a href="/Cetak" style={{ textDecoration: "none" }}>
                Cetak RM
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicalDokter;
