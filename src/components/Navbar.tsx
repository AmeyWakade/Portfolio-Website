import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

export interface ISmoother {
  paused: (state?: boolean) => void;
  scrollTo: (target: string, smooth?: boolean) => void;
  scrollTop: (top?: number) => number;
}

export let smoother: ISmoother = {
  paused: () => {},
  scrollTo: (target: string, smooth: boolean = true) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
    }
  },
  scrollTop: () => window.scrollY,
};

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.currentTarget as HTMLAnchorElement;
        let section = target.getAttribute("data-href");
        if (section) {
          smoother.scrollTo(section, true);
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AMEY WAKADE
        </a>
        <a
          href="mailto:ameyworks67@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          ameyworks67@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
