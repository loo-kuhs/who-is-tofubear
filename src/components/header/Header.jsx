import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

const Header = () => {
  return (
    <header id="me">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
          <Typed
            strings={[
              "Carlos Lucas",
              "<a href='https://www.instagram.com/tofoobear/' target='_blank' rel='noreferrer'>@tofooBear</a>",
              "<a href='https://linkedin.com/in/lucasbear/' target='_blank' rel='noreferrer'>@lucasbear</a>",
              "<a href='https://github.com/tGraffe/' target='_blank' rel='noreferrer'>@tGraffe</a>",
              "<a href='https://bitbucket.com/lucasB_py/' target='_blank' rel='noreferrer'>@lucasB_py</a>",
            ]}
            smartBackspace
            typeSpeed={150}
            backSpeed={60}
            startDelay={100}
            backDelay={55}
            loop
          />
        </h1>
        <h5 className="text-light">
          Software{" "}
          <span>
            <Typed
              strings={["Enginee", "Develope", "Code"]}
              smartBackspace
              typeSpeed={70}
              backSpeed={65}
              cursorChar="r"
              loop
            />
          </span>
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
