import React, { useEffect }from "react";
import { Link } from "gatsby"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from "../components/layout";
import SEO from "../components/seo";

import origamipet from "../images/origamipet.png";
import origami2 from "../images/origami2.png";

const Origami = () => {

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
    <SEO title="project page for origami pet" />
    <h1 className="underline hover hover1">origami pet project overview<span role="img" aria-label="emoji">🧾</span></h1><br />
    <img className="display-pic" src={origamipet} alt="screenshot of a Tamagotchi-style game with a red bird"></img>
    <div className="blurb-container">
      <p className="blurb">“But Karly,” you ask, “this is just a simple game from class. Why did you include it in your portfolio?”</p>
      <p className="blurb">While this game is simple, I ended up utilizing some highly transferable skills for day-to-day development.</p>
    </div>
    <h1 className="underline hover hover1">project purpose</h1><br />
    <div className="blurb-container">
    <p className="blurb">I knew I didn't really want to do something similar to what we learned in class, which was a “crawler” game that focused on keyboard manipulation and called back to early-days Pokemon or Zelda. I decided to make a Tamagotchi-style game instead.</p>
    </div>
    <h1 className="underline hover hover1">key features</h1><br />
    <div className="blurb-container">
    <p className="blurb">What I quickly learned through conversations with my instructors was that to build this game, I would need to utilize the JavaScript Date object and local storage. The Date object is used to make sure web and native services are displayed correctly based on a user’s timezone. Imagine scheduling apps that are only displayed in Eastern Standard Time! That would be messy. </p>
    </div>
    <img src={origami2} className="display-pic" alt="screenshot from a Tamagotchi-style game with a red bird"></img>
    <div className="blurb-container">
      <p className="blurb">Local storage is to get around the “statelessness” of HTTP; local storage is like a technological “bookmark” for where you last “were” on a web page or application. Otherwise, when you left the browser or refreshed the page, it would be as if you had never interacted with the page at all. </p>
      <p className="blurb">“The pet” I created, the red bird on the screen, is actually just an object in code, with various other functions that trigger when a number of seconds have passed since you “make” the pet. If a certain number of seconds have passed since it was “made”, the Pet becomes sad, hungry, dirty, and sick. If you click on objects in the environment, seconds are added to the amount of time since the Pet was created, and the Pet moves towards digital homeostasis once more. </p>
    </div>
    <h1 className="underline hover hover1">lessons learned</h1><br />
    <p>From this project I learned concepts important to day-to-day development, solidified my understanding of DOM manipulation, and got a chance to practice making a deceptively simple user experience for tricky concepts. I feel equipped to help coworkers who might need to design something for users in Europe, or to help with any application that requires saving something in the browser for the user to return to. </p>
    <h1 className="underline hover hover1">next steps and updates</h1><br />
    <p>I plan to make the decrementing “needs” bars animated, so that they move in a less staggered fashion and improve the user experience. I also plan to restyle the game so that it can be easily played on mobile. I do not recommend playing the game on mobile at this moment.</p>
    <Link to="/"><h3>homepage</h3></Link>
    <Link to="https://karlmiche.github.io/origami_pet/"><h3>live site</h3></Link>
  </Layout>
)}

export default Origami