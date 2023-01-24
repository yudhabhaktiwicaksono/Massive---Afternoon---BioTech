import SidebarDokter from "../../Sidebar/sidebarDokter";
import "./cetak.css";
import "../global.css";
import search from "../../images/search.png";
import Date_time from "../../date_time/date_time";
import profil from "../../images/profil.png";
import notif from "../../images/notif.png";
import pesan from "../../images/pesan.png";
import kesehatan from "../../images/logo_kesehatan.png";
import dokter from "../../images/logo_rm.png";

function Cetak() {
  return (
    <>
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
          <div className="mt-3">
            <div className="row">
              <div className="col-2">
                <img src={dokter} />
              </div>
              <div className="col-8 text-center">
                <h3>
                  <b>PEMERINTAH KABUPATEN BOGOR</b>
                </h3>
                <h3>BADAN PELAYANAN KESEHATAN</h3>
                <h3>RUMAH SAKIT HANDAYANI BOGOR</h3>
                Jl. Jend. Sudirman No. 33 Telp (0452) 2107, 23465 Fax. 324360
                Bogor
              </div>
              <div className="col-2">
                <img src={kesehatan} style={{ width: "110px" }} />
              </div>
            </div>
            <hr style={{ border: "3px solid", color: "black" }} />
            <table className="table tabel">
              <tr className="tabel-judul">
                <th>Tanggal</th>
                <th>Poli</th>
                <th>Anamnesa dan Pemeriksaan Fisik</th>
                <th>Diagnosa</th>
                <th>Terapi</th>
                <th>Kode ICD</th>
                <th>Dokter/Petugas</th>
              </tr>
              <tr>
                <td>13/12/2019</td>
                <td>Poli Umum</td>
                <td>Anamnesa</td>
                <td>Sakit Kepala</td>
                <td>Pijit</td>
                <td>125</td>
                <td>Dr.Oki</td>
              </tr>
              <tr>
                <td>23/09/2020</td>
                <td>Poli Umum</td>
                <td>Anamnesa</td>
                <td>Sakit Kepala</td>
                <td>Pijit</td>
                <td>125</td>
                <td>Dr.Oki</td>
              </tr>
              <tr>
                <td>15/11/2020</td>
                <td>Poli Umum</td>
                <td>Anamnesa</td>
                <td>Sakit Kepala</td>
                <td>Pijit</td>
                <td>125</td>
                <td>Dr.Oki</td>
              </tr>
            </table>
            <button type="button" class="btn btn-light">
              <a href="/MedicalDokter" style={{ textDecoration: "none" }}>
                Kembali
              </a>
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default Cetak;
