import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as FaIcons from "react-icons/fa";

import Topbar from "../Components/Top-bar";
import SideBar from "../Components/Side-bar";
import Particles from "../Components/Particles";
import AnimatedTitle from "../Components/AnimatedTitle";
import FadeContent from "../Components/FadeContent";
import RevealSection from "../Components/RevealSection";
import Footer from "../Components/Footer";

import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import Node from "../Assets/nodejs.png";
import Express from "../Assets/express.png";
import mongodb from "../Assets/mongodb.jpg";
import react from "../Assets/react.png";

import "./Skills.scss";

// Random % helper
const randomPercent = (min, max) =>
  `${Math.floor(Math.random() * (max - min) + min)}%`;

const MIN_DISTANCE = 15;
const isFarEnough = (pos, positions) => {
  return positions.every((p) => {
    const topDiff = Math.abs(parseInt(p.top) - parseInt(pos.top));
    const leftDiff = Math.abs(parseInt(p.left) - parseInt(pos.left));
    return topDiff > MIN_DISTANCE || leftDiff > MIN_DISTANCE;
  });
};

// Dynamic icon loader from react-icons/fa
const DynamicFaIcon = ({ iconName, size = 40, color = "white" }) => {
  const Icon = FaIcons[iconName];
  if (!Icon) return null;
  return <Icon size={size} color={color} />;
};

function Skills() {
  const [openMenu, setOpenMenu] = useState(false);

  // Floating skill icons
  const skIcons = [HTML, CSS, Node, Express, mongodb, react];

  const skList = [
    { heading: "Frontend", list: "HTML, CSS, JavaScript, React, TailwindCSS" },
    { heading: "Backend", list: "Node.js, Express, REST APIs" },
    { heading: "Database", list: "MongoDB" },
    { heading: "Version Control", list: "Git, GitHub, GitLab" },
    { heading: "Deployment and Hosting", list: "Heroku, Netlify, Vercel, AWS" },
  ];

  const services = [
    { title: "Custom Web Development", icon: "FaLaptopCode" },
    { title: "E-commerce Development", icon: "FaShoppingCart" },
    { title: "Single Page Application", icon: "FaReact" },
    { title: "Portfolio Websites", icon: "FaCode" },
    { title: "CMS Integration", icon: "FaServer" },
    { title: "Website Maintenance", icon: "FaGithub" },
    { title: "API Development", icon: "FaServer" },
    { title: "Speed Optimization", icon: "FaDatabase" },
  ];

  const icons = useMemo(() => skIcons || [], [skIcons]);

  // Generate random positions
  const generatePositions = useCallback((count) => {
    const newPositions = [];

    const isSmallScreen = window.innerWidth < 768;

    const topRange = isSmallScreen ? [10, 80] : [20, 130];
    const leftRange = isSmallScreen ? [5, 70] : [10, 85];

    for (let i = 0; i < count; i++) {
      let valid = false;
      let attempt = 0;
      let pos = null;
      while (!valid && attempt < 100) {
        pos = {
          top: randomPercent(topRange[0], topRange[1]),
          left: randomPercent(leftRange[0], leftRange[1]),
        };
        valid = isFarEnough(pos, newPositions);
        attempt++;
      }
      newPositions.push(pos);
    }
    return newPositions;
  }, []);

  const [positions, setPositions] = useState(() =>
    generatePositions(icons.length)
  );
  const [prevPositions, setPrevPositions] = useState(positions);

  // Update positions every 5s
  useEffect(() => {
    document.title = "Hussain Portfolio | Skills";
    const interval = setInterval(() => {
      setPrevPositions(positions);
      setPositions(generatePositions(icons.length));
    }, 5000);
    return () => clearInterval(interval);
  }, [icons.length, generatePositions, positions]);

  // Service icons hover + auto cycle
  const [activeService, setActiveService] = useState(null);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    if (activeService) return;
    const interval = setInterval(() => {
      setRandomIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeService, services]);

  return (
    <div className="skills-page">
      {/* Floating skill icons */}
      <div className="floating-icons">
        {icons.map((icon, i) => {
          if (!positions[i] || !prevPositions[i]) return null;

          const angle = Math.atan2(
            parseInt(positions[i].top) - parseInt(prevPositions[i].top),
            parseInt(positions[i].left) - parseInt(prevPositions[i].left)
          );
          const rotateDeg = (angle * 180) / Math.PI;

          return (
            <motion.img
              key={i}
              src={icon}
              alt="tech-icon"
              className="icon"
              initial={{
                top: prevPositions[i].top,
                left: prevPositions[i].left,
                rotate: 0,
              }}
              animate={{
                top: positions[i].top,
                left: positions[i].left,
                rotate: [rotateDeg, 0], // rotate towards direction, then reset
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Background Particles */}
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Layout */}
      <Topbar active="Skills" setOpenMenu={setOpenMenu} />
      <SideBar active="Skills" setOpenMenu={setOpenMenu} openMenu={openMenu} />

      <h1 className="heading">
        <AnimatedTitle>My Skills</AnimatedTitle>
      </h1>

      {/* Skills Section */}
      <RevealSection trigger="load">
        <div className="cont-st">
          <FadeContent
            className="st"
            blur
            duration={1500}
            easing="ease-out"
            initialOpacity={0}
          >
            <h3 className="name">Skills And Technologies:</h3>
            <ul>
              {skList.map((list, i) => (
                <li key={i}>
                  <strong className="bold">{list.heading}</strong> {list.list}
                </li>
              ))}
            </ul>
          </FadeContent>
        </div>
      </RevealSection>

      {/* Services Section */}
      <RevealSection trigger="scroll">
        <div className="cont-so">
          <FadeContent
            className="so"
            blur
            duration={1500}
            easing="ease-out"
            initialOpacity={0}
          >
            <h3 className="name">Services Offered:</h3>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              {/* Animated service icon */}
              <div
                className="service-icon-box"
                style={{
                  display: "block",
                  position: "absolute",
                  top: "50%",
                  left: "-30%",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService ? activeService.icon : randomIndex}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeService ? (
                      <DynamicFaIcon iconName={activeService.icon} size={window.innerWidth < 768 ? 40 : 60} />
                    ) : (
                      <DynamicFaIcon
                        iconName={services[randomIndex].icon}
                        size={window.innerWidth < 768 ? 40 : 60}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Services list */}
              <ul>
                {services.map((service, i) => (
                  <li
                    key={i}
                    onMouseEnter={() => setActiveService(service)}
                    onMouseLeave={() => setActiveService(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>
          </FadeContent>
        </div>
      </RevealSection>

      <Footer />
    </div>
  );
}

export default Skills;
