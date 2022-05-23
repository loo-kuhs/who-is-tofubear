import React from "react";
import "./nav.css";
import { VscHome } from "react-icons/vsc";
import { SiAboutdotme } from "react-icons/si";
import { GiClassicalKnowledge } from "react-icons/gi";
/* import {RiServiceLine} from 'react-icons/ri' */
import { BiMailSend, BiCommentCheck } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#me"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        rel="tooltip"
        title="Home"
      >
        <VscHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        rel="tooltip"
        title="About me"
      >
        <SiAboutdotme />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        rel="tooltip"
        title="My experience"
      >
        <GiClassicalKnowledge />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
        rel="tooltip"
        title="Testimonials"
      >
        <BiCommentCheck />
      </a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''} rel='tooltip' title='My services'><RiServiceLine/></a> */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        rel="tooltip"
        title="Keep in touch"
      >
        <BiMailSend />
      </a>
    </nav>
  );
};

export default Nav;
