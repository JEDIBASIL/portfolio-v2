import { Variants, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import img1 from "../../assets/images/MacBook Pro 16_ - 1.png";
import { useEffect } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  img: StaticImageData | string;
  builds: string[];
  project_link:string
}

function ProjectCard({ project_link, builds, description, img, name }: ProjectCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Define animation variants
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 150,scale: 0.94, },
    visible: { opacity: 1, y: 0, x:0, transition: { duration: 2, delay: 0.5 } },
  };

  // Set controls to trigger animation
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        x:0,
        transition: { duration: 0.4 },
      }); // Adjust properties as needed
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="card"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInVariants}
    >
      <div className="text">
        <h2>{name}</h2>
        <p>{description}</p>
        <a target="_blank" href={`${project_link}`}>
          <button>View project</button>
        </a>
        <div className="include">
          {builds.map((ele, i) => (
            <button key={i}>{ele}</button>
          ))}
        </div>
      </div>
      <div className="card_img_container">
        {/* Assuming img1 is imported or defined elsewhere */}
        <Image width={800} height={800} src={img} alt="" />
      </div>
    </motion.div>
  );
}

export default ProjectCard;
