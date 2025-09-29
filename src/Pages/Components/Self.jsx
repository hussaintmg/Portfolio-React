import React from "react";
import "../SCSS/Self.scss";
import ShinyText from "./ShinyText";

function Self() {
  const MSB = "I'm Hussain,";
  const MS =
    "a MERN Stack Web developer with a passion for building web applications. I specialize in developing efficient, scalable, and user-friendly solutions";
  return (
    <ShinyText
      text={
        <>
          <strong className="name">{MSB}</strong> {MS}
        </>
      }
      disabled={false}
      speed={3}
      className="custom-class"
    />
  );
}
export default Self;
