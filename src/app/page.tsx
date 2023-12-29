"use client";
import Image from "next/image";
import img1 from "../assets/images/MacBook Pro 16_ - 1.png";
import img2 from "../assets/images/MacBook Pro 14_ - 3.png";
import rocketImg from "../assets/images/rocket (1).png";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components";
import { RxRocket, RxSketchLogo, RxStar } from "react-icons/rx";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <>
      <div>
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
        <div className="hero_section">
          <div className="bg">
            <div className="card">
              <RxRocket />
            </div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card">
              <RxStar />
            </div>
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
              Hi, I&apos;m Jedidiah
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.3,
                },
              }}
            >
              A Software Developer
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
              I&apos;m a dedicated software engineer committed to creating
              experiences
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.1,
                  delay: 0.6,
                },
              }}
              href="mailto:jedidiahbasil@gmail.com"
            >
              <button>Let&apos;s talk</button>
            </motion.a>
          </div>

          <div className="element_3_container">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.3,
                  delay: 1.6,
                },
              }}
              className="card"
            >
              {" "}
              <i className="bi bi-check2"></i> <p>Creativity</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.3,
                  delay: 1.4,
                },
              }}
              className="card"
            >
              {" "}
              <i className="bi bi-check2"></i> <p>Problem solving</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.7 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.3,
                  delay: 1.2,
                },
              }}
              className="card"
            >
              {" "}
              <i className="bi bi-check2"></i> <p>Speed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.3,
                  delay: 1,
                },
              }}
              className="card"
            >
              {" "}
              <i className="bi bi-check2"></i> <p>Collaborative</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.1,
              delay: 0.7,
            },
          }}
          className="project_section"
        >
          <div className="container">
            <ProjectCard
              project_link={"https://sprinter-ten.vercel.app/"}
              img={img2}
              builds={["React js", "Next js"]}
              description="An online clothing store equipped for everyone"
              name="Sprinter"
            />
            <ProjectCard
              project_link={"https://spax.vercel.app"}
              img={img1}
              builds={["React js", "Next js"]}
              description="Your daily note, reminder and collaborative workspace"
              name="Spax"
            />
          </div>
        </motion.div>

        <div className="footer_wrapper">
          <footer>
            <h1>Have a Job for Me?</h1>
            <p>I&apos;m open to work and collaboration</p>
            <div className="bottom_container">
              <a href="mailto:jedidiahbasil@gmail.com">
                <button>Let&apos;s talk</button>
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
      </div>
    </>
  );
}
