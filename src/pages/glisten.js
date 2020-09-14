import React, { useEffect }from "react";
import { Link } from "gatsby"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from "../components/layout"
import SEO from "../components/seo"

// import images
import glisten2 from "../images/glisten2.png"
import glisten3 from "../images/glisten3.png"
import glisten4 from "../images/glisten4.png"
import glisten5 from "../images/glisten5.png"

gsap.registerPlugin(ScrollTrigger)

const Glisten = () => {

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
    <h1 className="underline hover hover1">glisten (good listen) project overview<span role="img" aria-label="receipt emoji">🧾</span></h1>
    <h2 className="underline hover hover1">tech stack</h2>
    <div className="desktop-skills-container">
      <section>
        <h3 className="underline hover hover1">languages</h3>
        <ul style={{listStyle: "none"}}>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </section>
      <section>
      <h3 className="underline hover hover1">frameworks</h3>
      <ul style={{listStyle: "none"}}>
          <li>Materialize CSS</li>
          <li>EJS Layouts</li>
          <li>Node.js</li>
        </ul>
      </section>
      <section>
      <h3 className="underline hover hover1">technologies</h3>
      <ul style={{listStyle: "none"}}>
          <li>Google Speech-to-Text API</li>
          <li>Google Storage API/Google Buckets</li>
          <li>Web Speech API</li>
          <li>Heroku</li>
        </ul>
      </section>
    </div>
    <img className="display-pic" src={glisten2} alt="screenshot of an audio file uploader"></img>
    <h1 className="underline hover hover1">project purpose</h1><br />
    <img className="display-pic" src={glisten3} alt="screenshot of transcribed text"></img>
    <div className="blurb-container">
      <p className="blurb">glisten is my second course project built on the fundamentals of full stack web development. I have a few good friends who need to record and transcribe audio of participant interviews for their social research. Transcribing by hand takes hours of painstaking work - I wanted to make a proof-of-concept app that transcribes audio files or speech directly from the browser. </p>
    </div>
    <h1 className="underline hover hover1">key features</h1><br />
    <p>glisten can transcribe audio up to one hour long for preformatted audio files and transcribe speech directly from the browser. glisten relies largely on Google-Speech-to-Text and Google Storage APIs.</p>
    <img className="display-pic" src={glisten4} alt="screenshot of a list of transcriptions"></img>
    <h1 className="underline hover hover1">lessons learned</h1><br />
    <div className="blurb-container">
      <ul>
        <li className="blurb">A little bit more about “gzip-encoding”. The way a file’s content encoding is sent to the Google Storage API controlled whether or not a file could be transcribed. I didn’t understand at first, why files sent to the Google Bucket could not be played (or transcribed). </li>
        <li className="blurb">I also learned more about asking for help, or resourcing to connections who know more in a highly specific area to get a job finished more quickly. I learned that I don’t want to be the coworker who gets stuck in secret - I want to be efficient about solving problems and honest about when I need to resource for help! For example, I hadn’t yet learned about content-encoding when coming across this issue, but I was able to learn from someone who did know, as well as perform my own research to gain competency.</li>
        <li className="blurb">I learned more about using Multer to handle file uploads!</li>
        <li className="blurb">Besides content-encoding, my most important skill acquired from making this app was the ability to use modern browser APIs and speech recognition. Having learned in-browser speech recognition, it will be easier to learn text-to-speech, something that helps many users with disabilities more fully access the web.</li>
        <li className="blurb">Last but not least, I learned to wrangle Google Cloud Products and the Google Cloud Developer Console.</li>
      </ul>
    </div>
    <img className="display-pic" src={glisten5} alt="screenshot of text being captured in a web browser"></img>
    <h1 className="underline hover hover1">next steps and updates</h1><br />
    <div className="blurb-container">
      <p className="blurb">At this moment, glisten can only accept preformatted files and has some issues with deployment via Heroku.</p>
      <p className="blurb">First, I noticed when you are transcribing long audio files, Heroku sends you to an “application error” page! However, the transcription is created and added to your database, so if you navigate back to “My transcriptions,” the transcribed audio will be there. I plan to create a workaround so that transcription, which does genuinely take several seconds, is displayed as “loading.” If this does not work, I will try deploying on a different service than Heroku. </p>
      <p className="blurb">Next, audio files can only be uploaded if they are converted to a very specific format as prescribed by the Google Speech-to-Text API. I am currently working to recreate the app using FFMPEG, a command line library to manipulate files. Through FFMPEG, I plan to modify the app so any type of audio file is accepted as an input.</p>
      <p className="blurb">Finally, I’d like to tweak the styling of the app, since I have learned more and more about CSS and the Materialize framework since this project was first created. </p>
    </div>
    <Link to="/"><h3>homepage</h3></Link>
    <Link to="https://p2-glisten.herokuapp.com/home"><h3>live link</h3></Link>
  </Layout>
)}

export default Glisten