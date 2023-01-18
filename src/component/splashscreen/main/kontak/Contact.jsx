function Contact() {
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-6">
            <img src="../Image/Phone.png" className="img-fluid"></img>
          </div>
          <div className="col-6">
            <form>
              <h3 className="text-center">HUBUNGI KAMI</h3>
              <div className="mb-3">
                <label for="exampleInputName" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNama"
                  aria-describedby="NamaHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Alamat Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputtext1" className="form-label">
                  No. Hp
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputtext1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Pesan
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
