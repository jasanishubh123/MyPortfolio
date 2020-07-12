import React from 'react';

const About=()=>{

    return(
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>About</h2>
              <p>I'm Shubham Jasani, 22 Year old Fullstack Developer living in Surat , India. I am a Software Engineer , with Completed B.Sc(I.T) and Persuing M.Sc(I.T)
                  I'm Expertise in Java , Node.js , PHP and .Net .
                 </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img src="assets/img/shubh1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                {/* <h3>UI/UX Designer &amp; Web Developer.</h3> */}
                <h3>Fullstack Developer</h3>
                <p className="font-italic" style={{fontSize:"18px;"}}>
                I am always tried to complete my ambitions with my skills and hard working , positive attitude.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 30 july 1999</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> 8320600793</li>
                      <li><i className="icofont-rounded-right"></i> <strong>City:</strong>  Surat , Gujarat</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 22</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Master [Running]</li>
                      <li><i className="icofont-rounded-right"></i> <strong>PhEmailone:</strong> jasanishubh@gmail.com</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                    </ul>
                  </div>
                </div>
                <p>
                
          </p>
              </div>
            </div>

          </div>
        </section>

    )
}

export default About