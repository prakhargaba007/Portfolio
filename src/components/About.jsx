import Typed from "typed.js";

import prakhars_photo from "./assets/Prakhars photo.png";
import "./About.css";
import { useEffect, useRef } from "react";
function About() {
  // var typed = new Typed("#element", {
  //   strings: [" Full Stack Web Developer", "Web Designer", "Video Editor "],
  //   typeSpeed: 70,
  // });
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN Developer", "Video Editer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id="home" className="container1">
      <div className="c1">
        <h2>Hello! I’m</h2>
        <h1>Prakhar Gaba</h1>

        <p>
          <span ref={el}></span>
        </p>
        <span id="element"></span>
        <div className="buttons"></div>
      </div>
      <div className="c2">
        <img src={prakhars_photo} alt="prakhar's photo" />
        <div></div>
      </div>
    </div>
  );
}

export default About;
