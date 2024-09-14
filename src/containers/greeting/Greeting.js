import React, { useState, useEffect, useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import photo from "../../assets/images/unnamed.png";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const rotatingText = ["Full Stack Developer", "Digital Marketer"];

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [currentText, setCurrentText] = useState(rotatingText[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = rotatingText.indexOf(prev);
        const nextIndex = (currentIndex + 1) % rotatingText.length;
        return rotatingText[nextIndex];
      });
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <h2 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                and I'm a <span>{currentText}</span>
              </h2>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && <Button text="See my resume" newTab={true} href={greeting.resumeLink} />}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="Developer" src={photo} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
