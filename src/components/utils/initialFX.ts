import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";

export function initialFX() {
  const selectors = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
  const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
  var landingText = new TextSplitter(elements, {
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

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  // "Developer" - intro animation
  var landingText2 = new TextSplitter(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
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

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // "Engineer" - hidden initially (will be looped in)
  var landingText3 = new TextSplitter(".landing-h2-info-1", TextProps);
  // "Full Stack" - visible initially
  var landingText4 = new TextSplitter(".landing-h2-1", TextProps);
  // "Software" - hidden initially (will be looped in)
  var landingText5 = new TextSplitter(".landing-h2-2", TextProps);

  // Single synchronized timeline: both rows transition together
  SyncedLoopText(
    landingText4, landingText5, // top row: Full Stack / Software
    landingText2, landingText3  // bottom row: Developer / Engineer
  );
}

/**
 * Animates two complete titles in sync:
 *   Title A = topA + bottomA  (e.g. "Full Stack Developer")
 *   Title B = topB + bottomB  (e.g. "Software Engineer")
 * They alternate: A shows first, then slides out as B slides in, then repeats.
 */
function SyncedLoopText(
  topA: TextSplitter,
  topB: TextSplitter,
  bottomA: TextSplitter,
  bottomB: TextSplitter
) {
  const holdDuration = 3;    // how long each title stays visible
  const slideDuration = 0.7; // slide in/out animation duration
  const stagger = 0.04;

  // Set initial state: Title B chars start below, hidden
  gsap.set([...topB.chars, ...bottomB.chars], { y: 80, opacity: 0 });

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

  // --- Phase 1: Title A is visible. After hold, slide A out upward ---
  tl.to(
    [...topA.chars, ...bottomA.chars],
    {
      y: -80,
      opacity: 0,
      duration: slideDuration,
      ease: "power3.inOut",
      stagger: stagger,
    },
    `+=${holdDuration}`
  )

  // --- Phase 2: Slide Title B in from below, in sync ---
  .fromTo(
    [...topB.chars, ...bottomB.chars],
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: slideDuration,
      ease: "power3.inOut",
      stagger: stagger,
    },
    "<" // starts at same time as slide-out
  )

  // --- Phase 3: After hold, slide B out upward ---
  .to(
    [...topB.chars, ...bottomB.chars],
    {
      y: -80,
      opacity: 0,
      duration: slideDuration,
      ease: "power3.inOut",
      stagger: stagger,
    },
    `+=${holdDuration}`
  )

  // --- Phase 4: Slide Title A back in from below, in sync ---
  .fromTo(
    [...topA.chars, ...bottomA.chars],
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: slideDuration,
      ease: "power3.inOut",
      stagger: stagger,
    },
    "<"
  );
}
