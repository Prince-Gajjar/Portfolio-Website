import { useEffect } from "react";
import "./styles/Career.css";
import { config } from "../config";
import { setAllTimeline } from "./utils/GsapScroll";

const renderPeriod = (period: string) => {
  if (period.includes(" - ")) {
    const [start, end] = period.split(" - ");
    return (
      <h3 className="career-date">
        <div>{start}</div>
        <div className="career-date-to">to</div>
        <div>{end}</div>
      </h3>
    );
  }
  return <h3 className="career-date">{period}</h3>;
};

const Career = () => {
  useEffect(() => {
    const cleanup = setAllTimeline();
    return () => {
      cleanup();
    };
  }, []);

  return (
    <section className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                {renderPeriod(exp.period)}
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
