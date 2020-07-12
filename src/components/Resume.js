import React from 'react';
import Pdf from '../Shubham_Resume.PDF';

const Resume = () => {

  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
         <a href={Pdf} target="_blank"> <h2 title="Download">Resume <i className="bx bx-cloud-download" ></i></h2 ></a>  
          <p>Aim to work in a challenging , dynamic and progressive workenvironment where I can utilize fully my expertise in technical skills andsoft skills, towards individual goals and also the development andimplementation of the new ideas, contributing to growth of theorganization.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Shubham Jasani</h4>
              <p><em></em></p>
              <ul>
                <li>Surat , Gujarat , India.</li>
                <li>+91 8320600793</li>
                <li>jasanishubh@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Science &amp;Information Technology</h4>
              <h5>2019 - Present</h5>
              <p><em>Department Of ICT. Surat</em></p>
              <p></p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Science &amp; Information Technology</h4>
              <h5>2016 - 2019</h5>
              <p><em>Department Of ICT. Surat</em></p>
              <p>Completed My Graduation with 7.96 SGPA</p>
            </div>
            <div className="resume-item">
              <h4>HSC (GSEB Board)</h4>
              <h5>2014 - 2016</h5>
              <p><em>Jay Ambe Vidhyabhavan. Surat</em></p>
              <p>Completed My HSC (Science Stream) with 64%</p>
            </div>
            <div className="resume-item">
              <h4>SSC (GSEB Board)</h4>
              <h5>2014 - 2016</h5>
              <p><em>Ramkrishna Vidhyabhavan. Surat</em></p>
              <p>Completed My SSC  with 69%</p>
            </div>
          </div>



          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Freelancing</h4>

              <h5>March 2020 - July 2020</h5>
              <p><em>Surat , Gujarat </em></p>
              <h4> "Global Insurance"</h4>
              <ul>
                <li>Global Insurance is a Insurance Management System which provide facilities to store customer data , policy data, companies , and transaction of policy detail with particular policy details. </li>
                <li>Owner can manage easily details of staff members. also owner can find the relationship between staff member and transaction and all another entries and customer's all Policy</li>
                <li>Owner can manage commission percentage and detail and then after during transaction automatically store commission details of owner and agent which will depends on transaction</li>
                <li>There are facility to send SMS for successfully registration of customer and on purchase policy successfully. There are also provide reminder facility using SMS for remind before expired for renewal their policy.  </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Internship at Weingenious Technocrats</h4>

              <h5>July 2019 - December 2019</h5>
              <p><em>Surat , Gujarat </em></p>
              <h4> "Project Management System"</h4>
              <ul>
                <li>Project Management System provides facility for IT
                Company to create Task , Milestone , Module and
manage them in Such Time constraint. </li>
                <li>Project
                Management System support entire Employee
Management as well as Client Management. </li>

              </ul>
            </div>
            <div className="resume-item">
              <h4>Internship at Kakshi Infotech</h4>

              <h5>March 2019 - June 2019</h5>
              <p><em>Surat Gujarat</em></p>
              <h4>"Jalaram Fashion"</h4>
              <ul>
                <li>Jalaram Fashion provides platform for purchase
                sarees in wholesale rate with approval of order and
return facilities</li>
                <li>Jalaram Fashion provides feature to return the purchased sarees within 15 days after purchased</li>
                <li>For security purpose admin can approve the customer request after customer can purchase the sarees</li>
                <li>Customer can do online payment through Paytm. </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )

}
export default Resume