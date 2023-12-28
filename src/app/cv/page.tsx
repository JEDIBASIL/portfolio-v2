"use client"
import Link from "next/link";
import "./style.css";
import { motion } from "framer-motion";

function CvPage() {
  return (
    <>
      <div className="background_linear">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Works</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link className="active" href="/cv">
              Cv
            </Link>
          </li>
          <li>
            <Link href="mailto:jedidiahbasil@gmail.com">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="cv_container">
        <div className="text">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
              },
            }}
          >
            Resume
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.2,
                delay: 0.5,
              },
            }}
          >
            Reach out to me via my contact page . view or download the resume
          </motion.p>
        </div>
        <div className="frame_container">
          <iframe
            loading="lazy"
            src="https://www.canva.com/design/DAF4RkR9OMc/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
          {/* <iframe
            loading="lazy"
            src="https://www.canva.com/design/DAF4RVGATK4/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe> */}
          <div className="overlay"></div>
        </div>
      </div>

      <div className="footer_wrapper">
        <footer>
          <h1>Have a Job for Me?</h1>
          <p>I'm open to work and collaboration</p>
          <div className="bottom_container">
            <a href="mailto:jedidiahbasil@gmail.com">
              <button>Let's talk</button>
            </a>
            <ul className="social_container">
              <li>
                <a target="_blank" href="https://github.com/JEDIBASIL">
                  <i className="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/jedidiah-oton-17a953225/"
                >
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>

        <div className="footer_gradient">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </>
  );
}

export default CvPage;
