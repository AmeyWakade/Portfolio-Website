import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Wheelsafar.com</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed and maintained responsive user interface components using React.js and
              Tailwind CSS, improving cross-device compatibility. Optimized performance and
              navigation flow, and integrated REST APIs for real-time booking and dynamic user data.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Operations & Integration</h4>
                <h5>Sports First</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Assisted in on-ground platform integration, coordinating between end-users and
              service providers. Managed real-time user queries and booking operations,
              improving customer satisfaction and handling workflows at scale.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Manager</h4>
                <h5>Antidote Entertainments</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Founded and managed an event management company; developed digital business operations,
              client relations, vendor logistics, and led multidisciplinary teams for successful events.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Vishwakarma University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Undergraduate studies with focus on Data Structures & Algorithms, Object-Oriented
              Programming, Operating Systems, Database Management Systems (DBMS), and Computer Networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
