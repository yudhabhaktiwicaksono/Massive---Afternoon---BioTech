import React from "react";
import "./daftar_dokter.css";
import dokter2 from "../images/dokter2.png";


const Daftar_dokter = () =>{

    return (
        
        <>
        
        <div className="container2">
            <img className="dokter-img" src={dokter2} alt="" />
        <div className="inp-container">
            <div className="daftar-inp">
                <h3>Daftar MediCare Sekarang!</h3>
                <form action="">
                   <h4>Nama Dokter</h4>
                    <input type="text" name="" id="" placeholder="Masukkan Dokter" />
                    <h4>No. Handphone</h4>
                    <input type="email" name="" id="" placeholder="Masukkan Masukkan Nomor Handphone Anda" />
                    <h4>Email</h4>
                    <input type="text" name="" id="" placeholder="Masukkan Email Anda" />
                    <h4>Password</h4>
                    <input type="password" name="" id="" placeholder="Masukkan Password Anda" />
                    <h4>Konfirmasi Password</h4>
                    <input type="password" name="" id="" placeholder="Masukkan Password Anda Sekali Lagi" />
                </form>
                <div className="syarat">
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
export default Daftar_dokter;