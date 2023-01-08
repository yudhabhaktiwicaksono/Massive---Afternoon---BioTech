import React from "react";
import "./daftar_rs.css";
import  rs from "../images/rs.png";
import syarat from "../images/syarat.png";


const Daftar_rs = () =>{

    return (
        <>
        <div className="container3">
            <img className="rumah-sakit" src={rs} alt="" />
            <div className="inp-container">
                <div className="daftar-inp2">
                    <h3>Daftarkan Rumah Sakit Anda Sekarang!</h3>
                    <form action="">
                      <h4>Nama Rumah Sakit</h4>
                      <input type="text" name="" id="" placeholder="Masukkan nama rumah sakit" />  

                      <h4>Jenis Rumah Sakit</h4>
                      <select name="" id="">
                        <option value="">Jenis Rumah Sakit</option>
                        <option value="">Jenis Rumah Sakit</option>
                        <option value="">Jenis Rumah Sakit</option>
                        <option value="">Jenis Rumah Sakit</option>
                        <option value="">Jenis Rumah Sakit</option>
                      </select>

                      <h4>Kab/Kota Rumah Sakit</h4>
                      <select name="" id="">
                        <option value="">Pilih Kota Rumah Sakit</option>
                        <option value="">Pilih Kota Rumah Sakit</option>
                        <option value="">Pilih Kota Rumah Sakit</option>
                        <option value="">Pilih Kota Rumah Sakit</option>
                        <option value="">Pilih Kota Rumah Sakit</option>
                      </select>

                      <h4>Alamat Rumah Sakit</h4>
                      <input type="text" name="" id="" placeholder="Masukkan nama rumah sakit" />  

                      <h4>Alamat Email</h4>
                      <input type="text" name="" id="" placeholder="Masukkan nama rumah sakit" />  

                      <h4>No.Telepon</h4>
                      <input type="text" name="" id="" placeholder="Masukkan nama rumah sakit" />  

                      <h4>Password</h4>
                      <input type="Password" name="" id="" placeholder="Masukkan Password " />  

                      <h4>Nama Rumah Sakit</h4>
                      <input type="text" name="" id="" placeholder="Masukkan Passowrd Sekali Lagi" />  


                    </form>
                    <div className="syarat2">
                        <img src={syarat} alt="" />
                        <p>Dengan menekan <strong>Daftar</strong>, Anda setuju dengan semua <a href="">Syarat & Ketentuan</a> serta  <a href="">Kebijakan Privasi</a> yang berlaku</p>
                    </div>
                    <button className="btn-daftar-dokter">Daftar</button>
                    <p>Anda sudah memiliki akun ? <a href="">Masuk disini</a></p>
                </div>
            </div>

            
        </div>
        
        </>
    )
}

export default Daftar_rs;