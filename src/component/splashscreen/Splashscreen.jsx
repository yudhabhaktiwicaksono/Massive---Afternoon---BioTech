import React from "react";
import Navs from "../splashscreen/header/Navbar";
import Footer from "../splashscreen/footer/Footer";
import Rekam from "../splashscreen/main/hero/Rekam";
import About from "../splashscreen/main/tentang/About";
import Article from "../splashscreen/main/artikel/Article";
import Contact from "../splashscreen/main/kontak/Contact";
const Splashscreen = () => {
  return (
    <section>
      <Navs />
      <Rekam />
      <About />
        <Article />
        <Contact />
        <Footer />
    </section>
  );
};

export default Splashscreen;
