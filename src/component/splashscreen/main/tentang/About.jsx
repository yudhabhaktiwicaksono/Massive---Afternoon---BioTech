function About() {
  return (
    <>
      <div className="container">
        <div>
          <h3 className="text-center">About Us</h3>
          <div className="row">
            <div className="mt-3 mb-5 col-5">
              <img src="../Image/About.png"></img>
            </div>
            <div className="mt-3 col-7">
              <h3 color="#2DE15B" className="m-0">
                Rekam Medis Elektronik
              </h3>
              <h5 color="#2DE15B">Save your health record</h5>
              <p className="me-5 fs-5">
                mediCare adalah layanan rekam medis berbasis website yang dapat
                menunjang aktivitas klinik ataupun rumah sakit secara mudah,
                aman dan dapat diakses kapan saja. Kamu tidak perlu khawatir
                lagi masalah riwayat pasien, karena sudah menyediakan layanan
                yang dapat melihat riwayat pasien dan bagaimana progress
                kesehatannya. Tidak perlu ada pencatatan secara manual, karena
                semua data pasien dapat diakses secara online dan website ini
                menjamin kerahasiaan & keamanan data pasien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
