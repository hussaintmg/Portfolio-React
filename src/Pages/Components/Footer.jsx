import React from "react";
import "../SCSS/Footer.scss";
import logo from "../Assets/tmg-removebg-preview.png";
import Mail from "../Assets/mail_rem.png";
import Phone from "../Assets/mob_rem.png";
import Address from "../Assets/address.png";
import facebook from "../Assets/fb.png";
import insta from "../Assets/ig.png";
import linkedin from "../Assets/in.png";
import github from "../Assets/github.png";

import RevealSection from "../Components/RevealSection";
function Footer() {
  const socials = [
    {
      title: "Facebook",
      link: "facebook.com",
      icon: facebook,
      colour: "rgba(10, 46, 164, 1)",
      shape: "circle",
    },
    {
      title: "Intagram",
      link: "instagram.com",
      icon: insta,
      colour: "transparent",
      shape: "square",
    },
    {
      title: "LinkedIn",
      link: "linkedin.com",
      icon: linkedin,
      colour: "rgba(20, 34, 179, 1)",
      shape: "square",
    },
    {
      title: "GitHub",
      link: "github.com",
      icon: github,
      colour: "rgba(178, 179, 189, 1)",
      shape: "circle",
    },
  ];

  const contacts = [
    {
      text: "hussaintmerng@gmail.com",
      img: Mail,
      shape: "circle",
      colour: "white",
    },
    {
      text: "+923191634446",
      img: Phone,
      shape: "circle",
      colour: "white",
    },
    {
      text: "Pakistan",
      img: Address,
      shape: "circle",
      colour: "white",
    },
  ];

  return (
    <RevealSection trigger="scroll">
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="txt">
          <div className="contacts">
            <h2>Contact:</h2>
            <div className="content">
              {contacts.map((item, index) => (
                <div className="item" key={index}>
                  <div
                    className={"img " + item.shape}
                    style={{ background: item.colour }}
                  >
                    <img src={item.img} alt={item.text} />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="social">
            <h2>Social Media:</h2>
            <div className="content">
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="item"
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className={"img " + social.shape}
                    style={{ background: social.colour }}
                  >
                    <img src={social.icon} alt="icon" />
                  </div>
                  <span>{social.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
export default Footer;
