function Article() {
  return (
    <>
      <div className="container">
        <div className="card mb-5 rounded-5">
          <div className="row g-0">
            <div className="col-6">
              <img
                src="../../Image/artikel.png"
                className="img-fluid rounded-start"
                alt="..."
              ></img>
            </div>
            <div className="col-6">
              <div className="card-body">
                <p className="card-text">14 Desember 2022 | Ahmad</p>
                <h4 className="card-title">
                  Manfaat Medical Record Elektronik Untuk Kenyamanan Pasien dan
                  Dokter
                </h4>
                <p className="card-text">
                  Medical Record Eelektronik bermanfaat untuk meningkatkan
                  kualitas perawatan pasien dan kerja dokter. Dengan pengetahuan
                  medis yang dinamis, dokter perlu mendapat berbagai informasi
                  yang....
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-4">
            <div className="card" style={{ width: "20rem", height: "28rem" }}>
              <img
                src="../Image/artikel_1.png"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <p className="card-text">15 Desember 2022 | Yudha</p>
                <h5 className="card-title">
                  Komponen Dasar Sistem Rekam Medis Elektronik yang di terapkan
                  di Fasilitas Kesehatan
                </h5>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "20rem", height: "28rem" }}>
              <img
                src="../Image/artikel_1.png"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <p className="card-text">16 Desember 2022 | Amin</p>
                <h5 className="card-title">
                  Digitalisasi Pelayanan Rumah Sakit Untuk Meningkatkan Layanan
                  Kesehatan
                </h5>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "20rem", height: "28rem" }}>
              <img
                src="../Image/artikel_1.png"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <p className="card-text">20 Desember 2022 | Isra</p>
                <h5 className="card-title">
                  Peraturan BPJS Baru mengenai Rekam Medis Elektronik
                </h5>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
