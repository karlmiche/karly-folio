/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import CSSPlugin from "gsap/CSSPlugin"


gsap.registerPlugin(ScrollTrigger, CSSPlugin, CSSRulePlugin); 
