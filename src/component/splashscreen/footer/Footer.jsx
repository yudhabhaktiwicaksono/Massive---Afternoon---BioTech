/* eslint-disable jsx-a11y/alt-text */
import { Icon } from "@iconify/react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="fot container-fluid">
        <div className="container">
          <div className="text-center">
            <h5 className="">
              Social Media &nbsp;
              <Icon icon="ic:baseline-facebook" />
              <Icon icon="entypo-social:instagram-with-circle" />
              <Icon icon="ant-design:twitter-circle-filled" />
              <Icon icon="entypo-social:linkedin-with-circle" />
            </h5>
          </div>
          <div className="row">
            <div className="mt-5 col-3 text-center">
              <img src="../Image/mediCare_putih.png"></img>
              <h5>Save your health record</h5>
            </div>
            <div className="mt-5 col-3">
              <p>
                <b>About The Company</b>
              </p>
              <p>
                Since 2022, mediCare as Medical Record Electronic has helped
                patient, doctor, and hospital to improve their medical record
                system from convensional to digital system.
              </p>
            </div>
            <div className="mt-5 col-3">
              <p>
                <b>User Guide</b>
              </p>
              <p>Term and Conditions</p>
              <p>Privacy Policy</p>
              <p>FAQ's</p>
              <p>Help</p>
            </div>
            <div className="mt-5 col-3">
              <p>
                <b>Visit Us</b>
              </p>
              <p>Company Adress :</p>
              <p>
                Jl. Cempaka Indah 2 No A.9, Kebun raya, Jakarta Selatan,
                Indonesia, 30162
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
