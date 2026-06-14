import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";

export function initialFX() {
  // ── Intro: animate "Hello! I'm / Name" letters in ──
  const selectors = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
  const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
  const landingText = new TextSplitter(elements, {
    type: "chars,lines",
    linesClass: "split-line",
  });
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  // ── Intro: fade in navbar, icons ──
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 }
  );

  // ── Intro: slide Title A (Full Stack Developer) in from below ──
  gsap.fromTo(
    ".landing-title-a",
    { y: "100%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
  );

  // ── Loop: alternate between Title A and Title B as complete units ──
  titleLoop();
}

function titleLoop() {
  const holdTime = 3.5;    // seconds each title stays visible
  const slideTime = 0.75;  // seconds for slide transition

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

  // Title A is visible. After hold → slide A out up, slide B in from below simultaneously
  tl.to(".landing-title-a", {
    y: "-100%",
    duration: slideTime,
    ease: "power3.inOut",
  }, `+=${holdTime}`)
  .to(".landing-title-b", {
    y: "0%",
    duration: slideTime,
    ease: "power3.inOut",
  }, "<") // same time as A going out

  // Title B is visible. After hold → slide B out up, slide A in from below
  .to(".landing-title-b", {
    y: "-100%",
    duration: slideTime,
    ease: "power3.inOut",
  }, `+=${holdTime}`)
  .to(".landing-title-a", {
    y: "0%",
    duration: slideTime,
    ease: "power3.inOut",
  }, "<"); // same time as B going out
}
