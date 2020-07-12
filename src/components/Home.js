import React from 'react';
import Pdf from '../Shubham_Resume.PDF';





const Home = () => {

  return (

    <section id="hero" className="d-flex flex-column justify-content-center">

      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Shubham Jasani</h1>
        <p>I'm Developer
        </p>
        <div className="social-links">
          <a href="https://twitter.com/jasanishubh?s=09"  target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/shubh.jasani" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/jasani_shu__bham/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/shubham-jasani-396493189" target="_blank"  className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/jasanishubh123/" target="_blank" className="github"><i className="bx bxl-github"></i></a>
          {/* <a href={Pdf} target="_blank">Resume</a> */}
        </div>
      </div>
    </section>
  )

}
export default Home