import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { config } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <Helmet>
        <title>My Works | Prince Gajjar — Full Stack Developer Portfolio Projects</title>
        <meta
          name="description"
          content="Explore all portfolio projects by Prince Gajjar — Full Stack web apps, ERP systems, WebRTC chat platforms, and SEO-optimized portals built with React.js, Node.js, and C# .NET."
        />
        <link rel="canonical" href="https://prince.devflow.co.in/myworks" />
        <meta property="og:title" content="My Works | Prince Gajjar Portfolio Projects" />
        <meta property="og:description" content="Browse all full-stack projects by Prince Gajjar — React.js, Node.js, .NET, WebRTC, ERP systems, and more." />
        <meta property="og:url" content="https://prince.devflow.co.in/myworks" />
        <meta property="og:image" content="https://prince.devflow.co.in/images/og-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="My Works | Prince Gajjar Portfolio Projects" />
        <meta property="twitter:description" content="Browse all full-stack projects by Prince Gajjar — React.js, Node.js, .NET, WebRTC, ERP systems, and more." />
        <meta property="twitter:image" content="https://prince.devflow.co.in/images/og-banner.png" />
      </Helmet>
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="myworks-card"
            key={project.id}
            data-cursor="disable"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="myworks-card-number">0{index + 1}</div>
            <div className="myworks-card-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              <p className="myworks-card-tech">{project.technologies}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
