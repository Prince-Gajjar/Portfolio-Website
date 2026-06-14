import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <section className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            {firstName.toUpperCase()}
            {' '}
            <br />
            {lastName && <span>{lastName.toUpperCase()}</span>}
          </h1>
        </div>
        <div className="landing-info">
          <h3>A</h3>
          {/* Title switcher: overflow hidden clips the inactive title */}
          <div className="landing-titles-switcher">
            {/* Title A: Full Stack Developer */}
            <div className="landing-title-block landing-title-a">
              <h2 className="landing-info-h2 landing-h2-1">Full{"\u00a0"}Stack</h2>
              <h2 className="landing-h2-info">Developer</h2>
            </div>
            {/* Title B: Software Engineer */}
            <div className="landing-title-block landing-title-b">
              <h2 className="landing-info-h2 landing-h2-2">Software</h2>
              <h2 className="landing-h2-info-1">Engineer</h2>
            </div>
          </div>
        </div>
        {/* Mobile photo - shows only on mobile when 3D character is hidden */}
        <div className="mobile-photo">
          <img src="/images/prince_profile.jpeg" alt="Prince Gajjar" loading="lazy" />
        </div>
      </div>
      {children}
      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
};

export default Landing;
