import { MdArrowOutward, MdCopyright, MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    // Animate title from bottom
    contactTimeline.from(
      ".contact-section h3",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Animate big buttons row
    contactTimeline.from(
      ".contact-big-buttons",
      {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Animate contact boxes with stagger from bottom
    contactTimeline.from(
      ".contact-box",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Clean up
    return () => {
      contactTimeline.kill();
    };
  }, []);

  return (
    <footer className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{config.developer.fullName}</h3>

        {/* Big Premium CTA Buttons */}
        <div className="contact-big-buttons">
          <a 
            href="/Prince_Gajjar_Resume.pdf" 
            download="Prince_Gajjar_Resume.pdf"
            className="contact-btn contact-btn-resume"
            data-cursor="disable"
          >
            <div className="contact-btn-icon-wrapper">
              <MdOutlineFileDownload className="contact-btn-icon" />
            </div>
            <div className="contact-btn-text">
              <span className="contact-btn-subtitle">Curriculum Vitae</span>
              <span className="contact-btn-title">Download Resume</span>
            </div>
          </a>

          <a 
            href="https://github.com/Prince-Gajjar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn contact-btn-github"
            data-cursor="disable"
          >
            <div className="contact-btn-icon-wrapper">
              <FaGithub className="contact-btn-icon" />
            </div>
            <div className="contact-btn-text">
              <span className="contact-btn-subtitle">Open Source</span>
              <span className="contact-btn-title">GitHub Profile</span>
            </div>
          </a>

          <a 
            href="https://linkedin.com/in/prince-gajjar-55281b305" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn contact-btn-linkedin"
            data-cursor="disable"
          >
            <div className="contact-btn-icon-wrapper">
              <FaLinkedin className="contact-btn-icon" />
            </div>
            <div className="contact-btn-text">
              <span className="contact-btn-subtitle">Professional Network</span>
              <span className="contact-btn-title">LinkedIn Connection</span>
            </div>
          </a>
        </div>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${config.contact.email}`} data-cursor="disable">
                {config.contact.email}
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <span>{config.social.location}</span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={config.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{config.developer.fullName}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
