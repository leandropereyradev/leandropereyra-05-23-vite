import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { Link } from "react-router-dom";

const HeaderPortfolio = () => {
  const variantsTitle = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 1 + 0.2 * index },
    }),
  };

  const variantsDetail = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 2 + 0.2 * index },
    }),
  };

  return (
    <section className="grid grid-rows-4 h-full pt-14 xl:pt-20 overflow-hidden">
      {projects.map((project, i) => (
        <div key={i}>
          <Link to={`/portfolio/${project.link}`}>
            <motion.h2
              variants={variantsTitle}
              custom={i}
              initial="hidden"
              animate="visible"
              className="text-gray-50 uppercase font-bold tracking-widest text-3xl mb-3 md:mb-6 md:text-5xl lg:mb-3 xl:mb-6"
            >
              {project.name}
            </motion.h2>
          </Link>
          <motion.p
            variants={variantsDetail}
            custom={i}
            initial="hidden"
            animate="visible"
            className="text-blue-400 italic tracking-widest md:text-2xl lg:text-xl"
          >
            {project.detail}
          </motion.p>
        </div>
      ))}
    </section>
  );
};

export default HeaderPortfolio;
