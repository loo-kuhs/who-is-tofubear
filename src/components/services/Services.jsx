import React from "react";
import "./services.css";
import { IoIosCheckmark } from "react-icons/io";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Software Engineering</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>MVC</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>WEB Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/*  END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
