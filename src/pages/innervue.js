import React, { useEffect }from "react";
import { Link } from "gatsby"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from "../components/layout"
import SEO from "../components/seo"

// import images
import innervue1 from "../images/innervue1.png"
import innervue2 from "../images/innervue2.png"
import innervue3 from "../images/innervue3.png"
import innervue4 from "../images/innervue4.png"

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
    <SEO title="project page for glisten" />
    <h1 className="underline hover hover1">innervue project overview<span role="img" aria-label="receipt emoji">🧾</span></h1><br />
    <p>
innervue is a sentiment-analysis application to help job-seekers practice bringing more positivity into their behavioral interview responses.</p>
<h2 className="underline hover hover1">tech stack</h2>
    <div className="desktop-skills-container">
      <section>
        <h3 className="underline hover hover1">languages</h3>
        <ul style={{listStyle: "none"}}>
          <li>JavaScript</li>
          <li>CSS3</li>
        </ul>
      </section>
      <section>
      <h3 className="underline hover hover1">frameworks</h3>
      <ul style={{listStyle: "none"}}>
          <li>Materialize UI</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>
      </section>
      <section>
      <h3 className="underline hover hover1">technologies</h3>
      <ul style={{listStyle: "none"}}>
          <li>MongoDB</li>
          <li>Web Speech API</li>
          <li>IBM Watson Sentiment Analysis API</li>
          <li>Google Cloud Natural Language Processing API</li>
          <li>Heroku</li>
          <li>Netlify</li>
        </ul>
      </section>
    </div>
    <img className="display-pic" src={innervue1} alt="a man is looking at himself in a mirror. This is a screenshot of a web app"></img>
    <h1 className="underline hover hover1">project purpose</h1><br />
    <div className="blurb-container">
      <p className="blurb">innervue is a class group project created with Neri Ramirez and Wes Bailey. Neri came up with the idea for this application during a course outcomes session, when our job coach mentioned she can tell whether or not an interviewee has prepared enough for their interview based on how positive or negative their responses are. She said positivity shows an interviewee is able to reflect on their experiences in a useful and healthy way. </p>
      <p className="blurb">This app is meant to help job-seekers reframe their experiences through repeated practice until they receive higher and higher “positivity scores.”</p>
    </div>
    <img className="display-pic" src={innervue2} alt="a screenshot of a blue web app. There is a text box under the title 'feedback' next to a list of questions under the title 'questions'."></img>
    <h1 className="underline hover hover1">key features</h1><br />
    <img className="display-pic" src={innervue3} alt="a screenshot of a blue web app. There is an illustrated thin woman in a pantsuit sitting on a laptop keyboard. Next to the woman, there is a white section with black text title 'analysis'."></img>
    <div className="blurb-container">
      <ul>
        <li className="blurb">Users can type or speak their responses into a “feedback box” - which is one of several toggled views in React.js, which just means something different is shown on the screen depending on user action, like clicking a button. </li>
        <li className="blurb">A custom sentiment analysis model that tracks words that were mentioned in a negative light and provides an overall positivity score, which is translated into “negative, moderately neutral, neutral, and positive” for the user. This model provides a bit of “feedback” based on user scores.</li>
        <li className="blurb">Users can select a variety of different behavioral interview questions.
</li>
      </ul>
    </div>
    <h1 className="underline hover hover1">lessons learned</h1><br />
    <img className="display-pic" src={innervue4} alt="a screenshot of a blue web app. There is a section of the page titled 'my responses.' There is a list of text sentiment analysis and one section is expanded."></img>
    <div className="blurb-container">
      <p className="blurb">We encountered some challenges during the making of this application that had to do with learning how to pass objects and other pieces of data from a React client, a MongoDB database, and multiple natural language processing APIs. </p>
      <p className="blurb">My work for this project focused on the integration of the Web Speech API, the design of the page where users input their responses, and the ability to consume the transcripts that were created. I learned more about managing state with React as well as working within a MERN stack through this project.</p>
    </div>
    <h1 className="underline hover hover1">next steps and updates</h1><br />
    <p>Neri and Wes and I have big plans for this application! We finally were able to find together outside of class to deploy innervue. As a head’s up, you can currently only speak into the form. We are working on fixing the ability to write into the form. </p>
    <p>We would love to add a calendar feature where users can schedule interviewing or job seeking practice, a page for job tips pulled from The Muse API, and a data visualization chart of scores over time. </p>
    <Link to="/"><h3>homepage</h3></Link>
    <Link to="https://serene-bose-e0fdfb.netlify.app/"><h3>live site</h3></Link>
  </Layout>
)}

export default Innervue