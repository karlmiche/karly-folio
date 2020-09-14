import React, { useEffect }from "react";
import { Link } from "gatsby";
import { gsap, Power4} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../pages/index.css";
import me2 from '../images/me2.png';
import glisten1 from '../images/glisten1.png';
import innervue1 from '../images/innervue1.png';
import origamipet from '../images/origamipet.png';
import loveorder1 from '../images/loveorder1.png';

gsap.registerPlugin(ScrollTrigger)


const IndexPage = () => {

  useEffect(() => {

    // first effect
    gsap.to(".circle", {opacity: 1, duration: 1.5, ease: Power4.easeIn});
    // second effect
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
    <SEO title="Home" />
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem`, display: "grid", placeContent: "center"}}>
    <h1 className="underline hover hover1">hi, I'm karly<span className="wave" role="img" aria-label="a hand that wiggles intermittently">👋🏻</span></h1>
    <img className="circle" src={me2} alt="a fat, white woman with brown hair, red lipstick, and glasses"></img>
    </div>
    <div className="blurb-container">
    <p className="blurb">Two-and-a-half-years ago, I was scribbling out what I called “wireframes” for a policy manual outlining a framework for how “evidence-based” a practice was. My notes and drafts got so complicated a supervisor would walk by and say, “hey there, ‘beautiful mind!’ A policy manual for a city government office - that’s got nothing to do with coding, right?</p>
    <p className="blurb">It had more to do with coding than I knew. Working as a legal extern showed me that I care deeply about making tools people can use, click, and otherwise interface with in any way they choose. It showed me I care a lot about how information is displayed and organized (dare I say how data is visualized?) so people can make informed choices.</p>
    <p className="blurb">I know now I can use web development to get that sweet spot of information/interaction to help people think a little deeper about problems they deal with day-to-day, and took a twelve-week software engineering immersive program to prove it. Right now, I’m honing my React skills, experimenting with Natural Language Processing, and learning more and more about CSS and animation libraries like GSAP.</p>
    <p className="blurb">I am seeking full-time work where I can put my compassion for others and love of data to good use, and towards better user experiences for all.</p>
    </div>
    <div>
      <h1 className="underline hover hover1">skills</h1>
    <div className="mobile-skills-container">
      <ul className="skills-list">
        <li>Python</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>
      <ul className="skills-list">
        <li>React.js</li>
        <li>Postgresql</li>
        <li>Google Cloud Platform</li>
        <li>Google Cloud AI APIS</li>
        <li>MongoDB</li>
      </ul>
    </div>
    <div className="desktop-skills-container">
      <section>
        <h3 className="underline hover hover1">languages</h3>
        <p>Python</p>
        <p>JavaScript</p>
        <p>SQL</p>
        <p>HTML5</p>
        <p>CSS3</p>
      </section>
      <section>
        <h3 className="underline hover hover1">frameworks</h3>
        <p>React.js</p>
        <p>Next.js</p>
        <p>Gatsby</p>
        <p>Node.js</p>
        <p>Express</p>
      </section>
      <section>
        <h3 className="underline hover hover1">technologies</h3>
        <p>Postgresql</p>
        <p>Speech Recognition</p>
        <p>Heroku</p>
        <p>Netlify</p>
      </section>
      <section>
        <h3 className="underline hover hover1">tools</h3>
        <p>Google Cloud Platform</p>
        <p>Google Cloud AI APIs</p>
        <p>MongoDB</p>
      </section>    
      </div>
    </div>
    <h1 className="underline hover hover1">projects</h1><br />
    <div className="project-grid-container">
      <section>
      <h3 className="underline hover hover1">origami pet</h3>
      <Link to="/origami"><h4>view project</h4></Link>
      <img src={origamipet} className="intro-pic" alt="a screenshot of an orange background with a red paper crane."></img>
      </section>
      <section>
      <h3 className="underline hover hover1">glisten</h3>
      <Link to="/glisten"><h4>view project</h4></Link>
      <img src={glisten1} className="intro-pic" alt="a screenshot of an audio transcription app. The app is white and blue."></img>
      </section>
      <section>
      <h3 className="underline hover hover1">innervue</h3>
      <Link to="/innervue"><h4>view project</h4></Link>
      <img src={innervue1} className="intro-pic" alt="a screenshot of a blue app. There is an illustration of a man looking in a mirror."></img>
      </section>
      <section>
      <h3 className="underline hover hover1">love and order</h3>
      <Link to="/loveorder"><h4>view project</h4></Link>
      <img src={loveorder1} className="intro-pic" alt="a screenshot of the words 'love and order.'"></img>
      </section>
    </div>
  </Layout>
)
  }

export default IndexPage
