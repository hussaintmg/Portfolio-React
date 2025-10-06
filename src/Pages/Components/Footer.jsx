import React, { useState, useRef } from "react";
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
  const [copied, setCopied] = useState(null);
  const timerRef = useRef(null);

  const socials = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/hussain.ali.963081",
      icon: facebook,
      colour: "rgba(10, 46, 164, 1)",
      shape: "circle",
    },
    {
      title: "Intagram",
      link: "https://www.instagram.com/hussianug/",
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
      link: "https://github.com/hussaintmg",
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
      copyable: true,
    },
    {
      text: "+923191634446",
      img: Phone,
      shape: "circle",
      colour: "white",
      copyable: true,
    },
    {
      text: "Pakistan",
      img: Address,
      shape: "circle",
      colour: "white",
      copyable: false,
    },
  ];

  const copyText = async (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        console.error("Clipboard error:", err);
      }
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Fallback copy error:", err);
      }
      document.body.removeChild(textarea);
    }
  };

  const handleHoldToCopy = (text) => {
    timerRef.current = setTimeout(() => {
      copyText(text).then(() => {
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
      });
    }, 70);
  };

  const cancelHold = () => {
    clearTimeout(timerRef.current);
  };

  return (
    <RevealSection trigger="scroll">
      {" "}
      <div className="footer">
        {" "}
        <div className="logo">
          {" "}
          <img src={logo} alt="logo" />{" "}
        </div>{" "}
        <div className="txt">
          {" "}
          <div className="contacts">
            {" "}
            <h2>Contact:</h2>{" "}
            <div className="content">
              {contacts.map((item, index) => (
                <div
                  className="item"
                  key={index}
                  onMouseDown={() =>
                    item.copyable && handleHoldToCopy(item.text)
                  }
                  onMouseUp={cancelHold}
                  onTouchStart={() =>
                    item.copyable && handleHoldToCopy(item.text)
                  }
                  onTouchEnd={cancelHold}
                >
                  <div
                    className={"img " + item.shape}
                    style={{ background: item.colour }}
                  >
                    {" "}
                    <img src={item.img} alt={item.text} />{" "}
                  </div>
                  <span
                    style={{
                      userSelect: item.copyable ? "none" : "text",
                      cursor: item.copyable ? "pointer" : "default",
                    }}
                  >
                    {item.text}{" "}
                  </span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div className="social">
            {" "}
            <h2>Social Media:</h2>{" "}
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
                    {" "}
                    <img src={social.icon} alt="icon" />{" "}
                  </div>{" "}
                  <span>{social.title}</span>{" "}
                </a>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {copied && <div className="copied-toast">{copied} copied!</div>}{" "}
      </div>{" "}
    </RevealSection>
  );
}

export default Footer;
