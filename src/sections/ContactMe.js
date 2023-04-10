import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./ContactMe.css";

export default function ContactMe() {
  const formRef = useRef();
  const [form, setForm] = useState({
    sender: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const emailSubmitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fqpdjx",
        "template_zt674vd",
        formRef.current,
        "oJS8hmpQV8_cFfhi7"
      )
      .then(() => {
        alert("Thankyou! I will get back to you soon.");
        setForm({
          sender: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      });
  };

  return (
    <section id="contact">
      <div className="contact-outercontainer">
        {/* Star background */}

        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="star star6"></div>
        <div className="star star7"></div>
        <div className="star star8"></div>

        {/* Main content */}
        <div className="contact-innercontainer">
          <h3 data-aos="fade-down">Get in touch</h3>
          <h2 data-aos="fade-down">Contact Me!</h2>
          <div className="contact-content">
            <form
              className="contact-form"
              onSubmit={emailSubmitHandler}
              ref={formRef}
              data-aos="fade-right"
            >
              <input
                type="text"
                name="sender"
                placeholder="Your Name"
                onChange={inputHandler}
                value={form.sender}
                autoComplete="nope"
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                onChange={inputHandler}
                value={form.email}
                autoComplete="nope"
              />
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                onChange={inputHandler}
                value={form.subject}
                autoComplete="nope"
              />
              <textarea
                name="message"
                cols="30"
                rows="8"
                placeholder="Your Message"
                onChange={inputHandler}
                value={form.message}
                autoComplete="nope"
              />
              <button className={`btn form-btn`} type="submit">
                Send Message
              </button>
            </form>

            <div className="info-container" data-aos="fade-left">
              <div className="info-content">
                <i className="fa-solid fa-envelope"></i>
                <p>suprachanda97@gmail.com</p>
              </div>
              <div className="info-content">
                <i className="fa-solid fa-location-dot"></i>
                <p>Dhaleswar, Agartala, Tripura.</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d58388.944116434024!2d91.27597675490908!3d23.843158590349713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDUwJzIyLjciTiA5McKwMTcnNDYuNiJF!5e0!3m2!1sen!2sin!4v1681110014705!5m2!1sen!2sin"
                className="map"
                title="map"
                width="100%"
                height="300"
                style={{ border: "0", borderRadius: "4px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
