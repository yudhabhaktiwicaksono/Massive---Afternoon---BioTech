import React from "react";
import "./card_record.css";
import eye from "../images/eye.png";
import cetak from "../images/cetak.png";
import unduh from "../images/unduh.png";
import profil from "../images/profil.png";
const Card_record = () => {
  return (
    <>
      <div class="container-card">
        <div class="data-container">
          <p class="name">Nurul Ain S.</p>
          <p class="female">Female, 19 yo</p>
          <img
            class="profil"
            alt=""
            src={profil}
            id="unsplashZDjhwOUvTwIcon1"
          />
          <div class="riwayat">
            <p className="diagnosa">Diagnosa Singkat Pneumonia</p>
            <p className="tanggal-temu"> Tanggal temu :12/09/2022</p>
            <p className="kontrol">Kontrol Selanjutnya : 12/09/2022</p>
            <div class="nama-dokter">Recorded by dr. Gandi, Sp.PD.</div>
          </div>
        </div>

        <div className="btn-container">
          <div class="button-container">
            <div class="see-button">
              <button class="btn1">
                See Details <img src={eye} alt="" />
              </button>
            </div>
          </div>
          <div class="button-container2">
            <div class="pdf-button">
              <button class="btn2">
                PDF <img src={unduh} alt="" />
              </button>
            </div>
          </div>
          <div class="button-container3">
            <div class="cetak-button">
              <button class="btn3">
                Cetak <img src={cetak} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_record;
