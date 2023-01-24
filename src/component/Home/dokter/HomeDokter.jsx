import SidebarDokter from "../../Sidebar/sidebarDokter";
import "./home_dokter.css";
import "../global.css";
import search from "../../images/search.png";
import Date_time from "../../date_time/date_time";
import profil from "../../images/profil.png";
import notif from "../../images/notif.png";
import pesan from "../../images/pesan.png";
function HomeDokter() {
  return (
    <>
      <SidebarDokter />
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
      </div>
      <div className="container-pasien">
        <div className="row">
          <div className="col-8">
            <div className="judul">
              <h3>
                <b style={{ color: "#2DE15B" }}>TABEL DATA PASIEN</b>
              </h3>{" "}
              Silahkan klik tombol Add Data untuk menambah data pasien
              <br /> atau <br />
              Edit Data untuk melakukan perubahan data Pasien
            </div>
          </div>
          <div className="col-4 align-items-end">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end align-items-end">
              <button className="btn btn-success me-md-2" type="button">
                <a href="/MedicalDokter" style={{ textDecoration: "none" }}>
                  Add Data
                </a>
              </button>
              <button className="btn btn-success" type="button">
                <a href="/MedicalDokter" style={{ textDecoration: "none" }}>
                  Edit Data
                </a>
              </button>
            </div>
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
              <th>Tgl Masuk</th>
              <th>Tgl Lahir</th>
              <th>Usia</th>
              <th>Pekerjaan</th>
              <th>No KTP</th>
              <th>Alergi Obat</th>
              <th>Jenis Pasien</th>
            </tr>
            <tr>
              <td>1</td>
              <td>RM-997</td>
              <td>Muh Amin</td>
              <td>Laki-laki</td>
              <td>Tn</td>
              <td>28/12/2022</td>
              <td>20/12/2001</td>
              <td>21</td>
              <td>Swasta</td>
              <td>665461354564</td>
              <td>Asma</td>
              <td>BPJS</td>
            </tr>
            <tr>
              <td>2</td>
              <td>RM-996</td>
              <td>Muh roman</td>
              <td>Laki-laki</td>
              <td>Tn</td>
              <td>28/12/2022</td>
              <td>20/12/2001</td>
              <td>21</td>
              <td>Swasta</td>
              <td>665461354564</td>
              <td>Asma</td>
              <td>BPJS</td>
            </tr>
            <tr>
              <td>3</td>
              <td>RM-995</td>
              <td>Muh fori</td>
              <td>Laki-laki</td>
              <td>Tn</td>
              <td>28/12/2022</td>
              <td>20/12/2001</td>
              <td>21</td>
              <td>Swasta</td>
              <td>665461354564</td>
              <td>Asma</td>
              <td>BPJS</td>
            </tr>
            <tr>
              <td>4</td>
              <td>RM-995</td>
              <td>Muh Amin</td>
              <td>Laki-laki</td>
              <td>Tn</td>
              <td>28/12/2022</td>
              <td>20/12/2001</td>
              <td>21</td>
              <td>Swasta</td>
              <td>665461354564</td>
              <td>Asma</td>
              <td>BPJS</td>
            </tr>
            <tr>
              <td>5</td>
              <td>RM-994</td>
              <td>Muh Amin</td>
              <td>Laki-laki</td>
              <td>Tn</td>
              <td>28/12/2022</td>
              <td>20/12/2001</td>
              <td>21</td>
              <td>Swasta</td>
              <td>665461354564</td>
              <td>Asma</td>
              <td>BPJS</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default HomeDokter;
