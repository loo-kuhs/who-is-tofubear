import React from "react";
import "./contact.css";
import { BiMailSend } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6nvcq9r",
      "template_n6lhazj",
      form.current,
      "WAEk2C5G7hQ1JpWpa"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiMailSend className="contact__option-icon" />
            <h4>Email</h4>
            <h5>
              <Typed
                strings={["rukazu89@live.com.mx"]}
                typeSpeed={100}
                backSpeed={65}
                loop
              />
            </h5>
            <a
              href="mailto:rukazu89@live.com.mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Carlos Lucas</h5>
            <a
              href="https://m.me/takotrasher"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>56 XXXX XXXX</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+525610183216"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name here please"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email here please"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your messsage"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send the message!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
