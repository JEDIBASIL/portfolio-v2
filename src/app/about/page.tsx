"use client";
import Link from "next/link";
import "./style.css";
import { motion } from "framer-motion";
import { SiTypescript } from "react-icons/si";
import me from "../../assets/images/DSC_1502.jpg"
import {
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="background_linear">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <nav className="blur">
          <ul>
            <li>
              <Link className="active" href="/">
                Works
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/cv">Cv</Link>
            </li>
            <li>
              <Link href="mailto:jedidiahbasil@gmail.com">Contact</Link>
            </li>
          </ul>
        </nav>

      <div className="about_container">
        <div className="about_img_container">
          <Image
          width={600}
          height={600}
            src={me}
            alt=""
          />
        </div>
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
            I'm a Developer working remotely from Nigeria
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
            Over the past 5 years, I've worked in various tech fields, including
            front-end development, backend development. I'm proud to have worn
            many hats.
          </motion.p>
        </div>
      </div>

      <div className="service">
        <h1>What I can Do</h1>
        <div className="container">
          <div className="card">
            <i className="bi bi-window-fullscreen"></i>
            <h2>Web Development</h2>
            <p>
              Experienced in web technologies with a focus on detail,
              user-centricity, and high-performance solutions
            </p>
          </div>

          <div className="card">
            <i className="bi bi-phone"></i>
            <h2>Mobile Development</h2>
            <p>
              Expert at creating user-friendly mobile apps that deliver
              high-quality solutions.
            </p>
          </div>

          <div className="card">
            <i className="bi bi-journal-text"></i>
            <h2>Tutor</h2>
            <p>
              Highly skilled and proficient in the art of imparting
              comprehensive knowledge
            </p>
          </div>
        </div>
      </div>

      <div className="experience">
        <h1>Experience</h1>
        <div className="container">
          <div className="card">
            <div className="heading">
              <h3>Stringcode Limited / Software Engineer</h3>
              <p>JULY 2018 - DECEMBER 2022</p>
            </div>
            <p className="text">
              I participated in the Ayagigs fellowship program, focusing on the
              backend track. Additionally I took on the role of a team lead
              within my pod. At the conclusion of the program, our project was
              recognized as the best among the participants. Throughout the
              program, I worked closely with the Ayagigs frontend developers to
              develop
            </p>
          </div>

          <div className="card">
            <div className="heading">
              <h3>Ayagigs / Frontend</h3>
              <p>NOVEMBER 2022 - MAY 2023</p>
            </div>
            <p className="text">
              As part of a team of developers, I contributed as a frontend
              engineer to create a web application for medical diagnosis I
              provided guidance to junior frontend engineers and focused on
              instructing them in HTML5, CSS SaaS and React.js
            </p>
          </div>
        </div>
      </div>

      <div className="skills_section">
        <h1>Skills</h1>
        <div className="container">
          <div className="card">
          <SiTypescript />
            <h2>Typescript</h2>
          </div>
          <div className="card">
            <FaJs />
            <h2>JavaScript</h2>
          </div>

          <div className="card">
            <FaNodeJs />
            <h2>Nodejs</h2>
          </div>

          <div className="card">
            <FaJava />
            <h2>Java</h2>
          </div>

          <div className="card">
            <FaGithub />
            <h2>Git & Github</h2>
          </div>

          <div className="card">
            <FaHtml5 />
            <h2>HTML5</h2>
          </div>

          <div className="card">
            <FaCss3 />
            <h2>CSS3</h2>
          </div>

          <div className="card">
            <FaDatabase />
            <h2>Sql</h2>
          </div>
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

export default About;
