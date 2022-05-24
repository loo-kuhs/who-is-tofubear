import React from "react";
import "./nav.css";
import { VscHome } from "react-icons/vsc";
import { SiAboutdotme } from "react-icons/si";
import { GiClassicalKnowledge } from "react-icons/gi";
/* import {RiServiceLine} from 'react-icons/ri' */
import { BiMailSend, /* BiCommentCheck */ } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>

      {/* Dir to Header Section */}
      <a
        href="#me"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        rel="tooltip"
        title="Home"
      >
        <VscHome />
      </a>

      {/* Dir to About Me Section */}
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        rel="tooltip"
        title="About me"
      >
        <SiAboutdotme />
      </a>

      {/* Dir to Experience Section */}
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        rel="tooltip"
        title="My experience"
      >
        <GiClassicalKnowledge />
      </a>

      {/* Dir to Portfolio Section */}
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        rel="tooltip"
        title="My works"
      >
        <MdWorkOutline />
      </a>

      {/* Dir to Testimonials Section */}
      {/* <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
        rel="tooltip"
        title="Testimonials"
      >
        <BiCommentCheck />
      </a> */}
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''} rel='tooltip' title='My services'><RiServiceLine/></a> */}
      
      {/* Dir to Contact Section */}
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
