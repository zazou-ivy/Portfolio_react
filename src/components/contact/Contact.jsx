import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import phone from "../../assets/phone2.jpg";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x1hewh5",
        "template_2ki8hlo",
        form.current,
        "vxDcl4UI2jbOQBn6f"
      )
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title retro__style">Get in touch 👋</h2>
      <span className="section__subtitle">Ask any questions or want to work together, feel free to contact me !</span>

      <div className="contact__container container grid">
        <div className="contact__content">

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">lea.myriam.zaoui@gmail.com</span>

              <a
                href="mailto:examplemail@gmail.com.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+336 816 945 39</span>

              <a
                href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">@leazaoui</span>

              <a href="https://www.linkedin.com/in/leazaoui/" className="contact__button">
                Watch my profile{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="image__position">         
          <img src={phone} alt="" className="contact__img" />


        </div>
      </div>
    </section>
  );
};

export default Contact;
