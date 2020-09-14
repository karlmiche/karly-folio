import React from "react"
import { Link } from "gatsby"

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

const Innervue = () => (
  <Layout>
    <SEO title="project page for love and order" />

    <h1 className="underline hover hover1">love and order project overview<span role="img" aria-label="emoji">🧾</span></h1><br />
    <img src={loveorder1} className="display-pic" alt="screenshot of a light tan screen with a title 'love and order'"></img>
    <h1 className="underline hover hover1">project purpose</h1><br />
    <img src={loveorder2} className="display-pic" alt="screenshot of a light tan web app with a section titled 'What is NLP' providing info about natural language processing."></img>
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
)

export default Innervue