/* eslint-disable jsx-a11y/anchor-is-valid */
const Navs = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="../Image/mediCare.png"
              alt="Logo Medicare"
              width="120px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto p-auto">
              <li className="nav-item">
                <a
                  className="nav-link active mx-3"
                  aria-current="page"
                  href="/"
                >
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-3" href="#offer">
                  Artikel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-3" href="#pricing">
                  Hubungi Kami
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-success me-2 mx-3"
                type="submit"
              >
                <a
                  href="/login"
                  style={{ textDecoration: "none", color: "#2DE15B" }}
                >
                  Daftar
                </a>
              </button>
              <button className="btn btn-success mx-3" type="submit">
                <a
                  href="/login"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Masuk
                </a>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navs;
