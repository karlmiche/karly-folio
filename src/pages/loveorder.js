import React, { useEffect }from "react";
import { Link } from "gatsby"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from "../components/layout"
import SEO from "../components/seo"

// import our images
import loveorder1 from "../images/loveorder1.png";
import loveorder2 from "../images/loveorder2.png";
import loveorder3 from "../images/loveorder3.png";
import loveorder4 from "../images/loveorder4.png";
import loveorder5 from "../images/loveorder5.png";
import loveorder6 from "../images/loveorder6.png";
import loveorder7 from "../images/loveorder7.png";

gsap.registerPlugin(ScrollTrigger)

const Innervue = () => {

  useEffect(() => {
    // first effect
    gsap.set(".blurb", {y: 100});

    ScrollTrigger.batch(".blurb", {
      interval: 0.1, // time window (in seconds) for batching to occur. 
      batchMax: 3,   // maximum batch size (targets). Can be function-based for dynamic values
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
      onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
      onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true}),
      // you can also define most normal ScrollTrigger values like start, end, etc.
      start: "20px bottom",
      end: "top top"
    });
  });

  return (
  <Layout>
    <SEO title="project page for love and order" />
    <h1 className="underline hover hover1">love and order project overview<span role="img" aria-label="emoji">🧾</span></h1><br />
    <p>love and order is a random sonnet(ish) generator that pulls comments from the New York Time’s Comment API and separates and sorts these comments based on logic from Google’s Natural Language Processing Syntax Analysis API. </p>
    <h2 className="underline hover hover1">tech stack</h2>
    <div className="desktop-skills-container">
      <section>
        <h3 className="underline hover hover1">languages</h3>
        <ul style={{listStyle: "none"}}>
          <li>Python</li>
        </ul>
      </section>
      <section>
      <h3 className="underline hover hover1">frameworks</h3>
      <ul style={{listStyle: "none"}}>
          <li>CSS3</li>
          <li>GSAP (Green Sock Animation Platform)</li>
          <li>Flask</li>
          <li>React.js</li>
        </ul>
      </section>
      <section>
      <h3 className="underline hover hover1">technologies</h3>
      <ul style={{listStyle: "none"}}>
          <li>Google Natural Language Processing API</li>
          <li>Syntax Analysis</li>
          <li>New York Times Developer APIs</li>
        </ul>
      </section>
    </div>
    <img src={loveorder1} className="display-pic" alt="screenshot of a light tan screen with a title 'love and order'"></img>
    <h1 className="underline hover hover1">project purpose</h1><br />
    <img src={loveorder2} className="display-pic" alt="screenshot of a light tan web app with a section titled 'What is NLP' providing info about natural language processing."></img>
    <div className="blurb-container">
      <p className="blurb">The purpose of this project was to practice first the manipulation of Google’s NLP Syntax Analysis API, and secondly to practice learning a new technology. I chose the Green Sock Animation Platform and have been learning more about scroll-based animations since creating this project.</p>
    </div>
    <img src={loveorder3} className="display-pic" alt="screenshot of a light tan web app with a purple section titled 'We can now make a poem!' about neural networks."></img>
    <h1 className="underline hover hover1">key features</h1><br />
    <img src={loveorder4} className="display-pic" alt="a screenshot of a light tan web app"></img>
    <img src={loveorder5} className="display-pic" alt="screenshot of a light tan web app with a section of code on the page."></img>
    <h1 className="underline hover hover1">lessons learned</h1><br />
    <img src={loveorder6} className="display-pic" alt="screenshot of a light tan web app with a different section of code."></img>
    <img src={loveorder7} className="display-pic" alt="screenshot of a light tan web app with two lines of poetry on the screen."></img>
    <h1 className="underline hover hover1">next steps and updates</h1><br />
    <Link to="/"><h3>homepage</h3></Link>
  </Layout>
)}

export default Innervue