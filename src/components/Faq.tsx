import { useState } from "react";
import "./styles/Faq.css";
import { MdExpandMore } from "react-icons/md";

const faqData = [
  {
    question: "Who is Prince Gajjar?",
    answer: "Prince Gajjar is a professional Full Stack Developer, Software Engineer, and Freelance Web Developer based in Ahmedabad, Gujarat, India. He specializes in designing, developing, and architecting production-ready web applications, custom ERP portals, and secure REST APIs using modern JavaScript/TypeScript (React.js, Next.js, Node.js) and C# .NET stacks."
  },
  {
    question: "What is Prince Gajjar's core software technology stack?",
    answer: "His core technology stack includes Frontend: React.js, Next.js, Vite, TypeScript, HTML5, CSS3, JavaScript, GSAP animations, and Tailwind CSS; Backend: Node.js, Express.js, and C# .NET / .NET Framework; Databases: MySQL, PostgreSQL, and MongoDB; and deployment setups on Vercel, Railway, and Hostinger."
  },
  {
    question: "Is Prince Gajjar available for freelance projects or contract work?",
    answer: "Yes, Prince Gajjar is available for freelance projects, custom ERP/CRM development, remote full-stack contract roles, and consulting services. He manages professional client engagements through his software agency DevFlow Technology. For project inquiries, custom software estimation, or hiring discussion, you can reach out via email at work.princegajjar@gmail.com."
  },
  {
    question: "What is DevFlow Technology?",
    answer: "DevFlow Technology is a custom software development agency founded by Prince Gajjar. The agency specializes in end-to-end systems architecture, developing high-performance single page applications, enterprise ERP solutions, payment gateway integrations, and technical SEO/AEO/GEO optimization."
  },
  {
    question: "What types of software engineering services does Prince Gajjar provide?",
    answer: "Prince Gajjar provides comprehensive full-stack web development, custom ERP and CRM dashboard engineering, secure REST API development, JWT authorization system design, third-party API integrations, database schema optimization, and technical search engine optimization."
  },
  {
    question: "What backend, API, and database solutions does Prince Gajjar specialize in?",
    answer: "Prince Gajjar specializes in designing secure RESTful APIs, JWT-based role-based access control (RBAC) authorization systems, third-party API integrations (such as payment gateways, SMS, and email services), and high-performance database design using MySQL, PostgreSQL, and MongoDB. He focuses on building secure, scalable backend architectures."
  },
  {
    question: "Has Prince Gajjar built any real-time communication systems or ERP software?",
    answer: "Yes, Prince Gajjar has engineered several advanced systems: Narmada Sales Platform (a B2B sales/distribution portal), VassuTalks Platform (a low-latency WebRTC and Socket.io real-time chat app), Path Visa Advisor (an SEO-optimized agency portal), and a comprehensive Construction Tracker ERP portal built with PHP and MySQL."
  },
  {
    question: "How does Prince Gajjar approach software quality and delivery?",
    answer: "He follows Agile methodologies, using Git version control for transparent progress. By implementing clean code principles, performing rigorous testing (reducing bugs by ~30% in production), and conducting detailed code reviews, Prince ensures high performance, technical SEO compliance, and seamless cross-browser responsiveness."
  },
  {
    question: "How does Prince Gajjar optimize web application performance and technical SEO?",
    answer: "He achieves superior performance and SEO rankings by using server-side rendering (SSR) via Next.js, optimizing asset loading, writing clean semantic HTML5 code, creating structured JSON-LD schemas (FAQPage, Person, WebSite), building robots.txt and sitemap.xml crawlers, and ensuring excellent Core Web Vitals scores."
  },
  {
    question: "How can I hire or contact Prince Gajjar for projects?",
    answer: "You can reach out to Prince Gajjar directly at work.princegajjar@gmail.com, view his open-source work on GitHub (github.com/Prince-Gajjar), or connect with him on LinkedIn. He is open to freelance software projects, remote full-stack engineering roles, and consulting."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-container" id="faq">
      <div className="faq-container">
        <h3 className="section-title">Frequently Asked Questions</h3>
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "active" : ""}`}>
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  data-cursor="disable"
                >
                  <span>{item.question}</span>
                  <MdExpandMore className="faq-icon" />
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
