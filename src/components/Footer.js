import React from 'react';
const Footer=()=>{

    return(
        <footer id="footer">
        <div className="container">
          <h3>Shubham Jasani</h3>
          <p>"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. " - By Thomas A. Edison </p>
          <div className="social-links">
          <a href="https://twitter.com/jasanishubh?s=09"  target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/shubh.jasani" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/jasani_shu__bham/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/shubham-jasani-396493189" target="_blank"  className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/jasanishubh123/" target="_blank" className="github"><i className="bx bxl-github"></i></a>
        </div>
          <div className="copyright">
            &copy; Copyright <strong><span>jasanishubh</span></strong>. All Rights Reserved
                                        </div>
          <div className="credits">


          </div>
        </div>
      </footer>
    )

}

export default Footer