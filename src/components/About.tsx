import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para">
          {config.about.description}
        </p>
        
        {/* GEO-Optimized Highlights Stats Grid */}
        <div className="about-highlights" data-cursor="disable">
          <div className="highlight-item">
            <span className="highlight-number">11+</span>
            <span className="highlight-label">Systems Delivered</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">30%+</span>
            <span className="highlight-label">Bug Reduction</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">95+</span>
            <span className="highlight-label">PageSpeed Score</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">100%</span>
            <span className="highlight-label">Client Trust</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
