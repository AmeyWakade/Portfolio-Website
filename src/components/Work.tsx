import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Project {
  num: string;
  name: string;
  category: string;
  tools: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    num: "01",
    name: "SkillProof",
    category: "Full-Stack EdTech & Coding Arena",
    tools: "Java 21, Spring Boot, Spring Security, PostgreSQL, React, Vite, Docker, JDoodle API",
    image: "/images/react.webp",
    link: "https://skillproof.co.in/",
  },
  {
    num: "02",
    name: "AI University Management",
    category: "Full-Stack & Machine Learning",
    tools: "React.js, Node.js, FastAPI, MongoDB, XGBoost (ML - 90% Accuracy), REST APIs",
    image: "/images/next.webp",
    link: "https://github.com/AmeyWakade",
  },
  {
    num: "03",
    name: "Wheelsafar Platform",
    category: "Responsive UI & Booking Flow",
    tools: "React.js, Tailwind CSS, REST APIs, Real-time Booking, Component Optimization",
    image: "/images/node.webp",
    link: "https://github.com/AmeyWakade",
  },
  {
    num: "04",
    name: "Sports First Operations",
    category: "Platform Integration & Operations",
    tools: "Java, Real-Time Query Handling, Booking Operations, Scalable Workflows",
    image: "/images/mysql.webp",
    link: "https://github.com/AmeyWakade",
  },
  {
    num: "05",
    name: "Antidote Entertainments",
    category: "Digital Business & Operations",
    tools: "Business Operations, Client Engagement, Vendor Logistics, Leadership",
    image: "/images/mongo.webp",
    link: "https://github.com/AmeyWakade",
  },
  {
    num: "06",
    name: "Real-Time Microservices",
    category: "Event-Driven Architecture",
    tools: "Node.js, Express, Socket.io, RabbitMQ, REST APIs, Microservices Architecture",
    image: "/images/express.webp",
    link: "https://github.com/AmeyWakade",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
