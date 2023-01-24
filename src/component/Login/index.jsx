/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import LogoDokter from "../../assets/img/icon/dokter2.svg";
import LogoPasien from "../../assets/img/icon/pasien2.svg";
import LogoKlinik from "../../assets/img/icon/klink2.svg";

const Login = () => {
  const [contentRegister, setContentRegister] = useState("selected");
  const [showPassword, setShowPassword] = useState(false);

  const SelectedContent = () => {
    return (
      <div>
        <div className="title-selected">Login Sebagai :</div>
        <div className="item-login-selected">
          <button
            className="my-3 item-selected"
            onClick={() => setContentRegister("content")}
          >
            <object data={LogoDokter}></object>
            Dokter
          </button>
          <button
            className="my-3 item-selected"
            onClick={() => setContentRegister("content")}
          >
            <object data={LogoKlinik}> </object>
            Rumah Sakit
          </button>
          <button
            className="my-3 item-selected"
            onClick={() => setContentRegister("content")}
          >
            <object data={LogoPasien}> </object>
            Pasien
          </button>
        </div>
      </div>
    );
  };

  const LoginContent = () => {
    return (
      <div
        className="w-100 p-5 flex-column d-flex justify-content-center"
        style={{ height: window.innerHeight }}
      >
        <div>
          <div className="title-login">MediCare</div>
          <div className="pt-4">
            <div className="title-from">
              Email<span>*</span>
            </div>
            <input
              type="email"
              className="form-control mt-3"
              placeholder="Masukan Email Anda"
            />
          </div>
          <div className="pt-4">
            <div className="title-from">
              Password<span>*</span>
            </div>
            <div className="form-control mt-3 d-flex align-items-center">
              <input
                type={showPassword ? "text" : "password"}
                className="w-100 input-password"
                placeholder="Masukan Password Anda"
              />
              <i
                class={showPassword ? "ri-eye-line" : "ri-eye-off-line"}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center flex-column align-items-center mt-3">
          <div className="forgot">
            <a>Lupa Password?</a>
            <div onClick={() => setContentRegister("selected")}>Back</div>
          </div>
          <button>
            <a href="/HomePageDokter" style={{ textDecoration: "none" }}>
              Sign In
            </a>
          </button>
          <div className="text-bot">
            Anda belum memilik akun?<a>Daftar disini</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="overflow-hidden">
        <div className="row px-0 " style={{ height: window.innerHeight }}>
          <div className={`col-4 px-0 img-login-selected`}></div>
          <div className={`col-8 content-login-${contentRegister}`}>
            {contentRegister === "selected"
              ? SelectedContent()
              : contentRegister === "content"
              ? LoginContent()
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
