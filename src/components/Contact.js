import React from 'react';
import * as emailjs from 'emailjs-com'
// import {toast} from 'react-toastify'




// const Contact=()=>{

//     return(

//         <section id="contact" className="contact">
//         <div className="container" data-aos="fade-up">

//           <div className="section-title">
//             <h2>Contact</h2>
//           </div>

//           <div className="row mt-1">

//             <div className="col-lg-4">
//               <div className="info">
//                 <div className="address">
//                   <i className="icofont-google-map"></i>
//                   <h4>Location:</h4>
//                   <p>B-305 , Happy Palace , L.H Road , Surat</p>
//                 </div>

//                 <div className="email">
//                   <i className="icofont-envelope"></i>
//                   <h4>Email:</h4>
//                   <p>jasanishubh@gmail.com</p>
//                 </div>

//                 <div className="phone">
//                   <i className="icofont-phone"></i>
//                   <h4>Call:</h4>
//                   <p>+91 8320600793</p>
//                 </div>

//               </div>

//             </div>

//             <div className="col-lg-8 mt-5 mt-lg-0">

//               <form className="contact_form">
//                 <div className="form-row">
//                   <div className="col-md-6 form-group">
//                     <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                     <div className="validate"></div>
//                   </div>
//                   <div className="col-md-6 form-group">
//                     <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
//                     <div className="validate"></div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
//                   <div className="validate"></div>
//                 </div>
//                 <div className="form-group">
//                   <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
//                   <div className="validate"></div>
//                 </div>
//                 <div className="mb-3">
//                   <div className="loading">Loading</div>
//                   <div className="error-message"></div>
//                   <div className="sent-message">Your message has been sent. Thank you!</div>
//                 </div>
//                 <div className="text-center"><button type="submit">Send Message</button></div>
//               </form>

//             </div>

//           </div>

//         </div>
//       </section>

//     )

// }


class Contact extends React.Component {

  constructor(props){
    super(props)
    this.state={
      name:"",
      email:"",
      subject:"",
      message:""
    }
   
    // toast.configure()
    this.handleChange=this.handleChange.bind(this)
    this.handlesubmit=this.handlesubmit.bind(this)

  }

  handleChange=(e)=>{

    this.setState({[e.target.name]:[e.target.value]})
  }

  handlesubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm(
      "gmail",
      "inquiryfromportfolio",
      ".contact_form",
      "user_CPQon9ugFdkcLSRkhOuiS"

    ).then().catch();
    this.setState({
      name : "",
      email:"",
      subject:"",
      message:""

    })
   
  //  toast.success('Successfully Message Sent')
   
  }



  render() {
    return (
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row mt-1">

            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>B-305 , Happy Palace , L.H Road , Surat</p>
                </div>

                <div className="email">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>jasanishubh@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 8320600793</p>
                </div>

              </div>

            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">

              <form className="contact_form" onSubmit={this.handlesubmit.bind(this)}>
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" required={true} name="name" value={this.state.name} className="form-control" id="name" placeholder="Your Name" onChange={this.handleChange.bind(this)}  />
                   
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" required={true} className="form-control" value={this.state.email} name="email" id="email" placeholder="Your Email" onChange={this.handleChange.bind(this)}  />
                  
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" required={true} className="form-control" name="subject" value={this.state.subject} id="subject" placeholder="Subject" onChange={this.handleChange.bind(this)} />
                  
                </div>
                <div className="form-group">
                  <textarea className="form-control" required={true} name="message"  value={this.state.message}  onChange={this.handleChange.bind(this)}  placeholder="Message"/>
                  
                </div>
                {/* <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div> */}
                <div className="text-center"><input type="submit" className="btn btn-info" value="Send Message"/></div>
                
              </form>
              
            </div>

          </div>

        </div>
      </section>
    )
  }
}

export default Contact