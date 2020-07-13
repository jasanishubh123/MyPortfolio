import React from 'react';

const Portfolio=()=>{

    return(
        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Portfolio</h2>
              <p>These all projects are developed during college time  as a intern in companies using PHP CI , Java EE, Primefaces , Bootfaces ,JSF, Node JS , Angular 8, Next JS and React JS. </p>
            
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  {/* <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li> */}
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/phpadmin.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4> PHP CI </h4>
                    <p>Jalaram Fashion Admin Panel</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/phpadmin.png" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/next.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Next.js</h4>
                    <p>Movie Application</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/next.png" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/gia.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Java EE [Primefaces]</h4>
                    <p>Global Insurance [Admin Panel]</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/gia.png" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/angu.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Node.js &amp; Angular 8</h4>
                    <p>Shopping cart</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/angu.png" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/gia1.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Java EE [Primefaces]</h4>
                    <p>Global Insurance [User Panel]</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/gia1.png" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/phpuser.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>PHP CI</h4>
                    <p>Jalaram Fashion User Panel</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/phpuser.png" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>React.js</h4>
                    <p>My Portfolio</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio.png" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        </section>

    )

}

export default Portfolio