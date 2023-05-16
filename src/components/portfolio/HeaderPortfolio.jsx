import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { Link } from "react-router-dom";

const HeaderPortfolio = () => {
  const variantsTitle = {
    hidden: { scale: 1.5, opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      originX: 0,
      transition: {
        duration: 1,
        ease: "linear",
        delay: 1 + 0.2 * index,
      },
    }),
  };

  const variantsDetail = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { duration: 1, ease: "linear", delay: 2 + 0.2 * index },
    }),
  };

  return (
    <section className="grid grid-rows-4 h-full pt-14 xl:pt-20 overflow-hidden">
      {projects.map((project, i) => (
        <div key={i}>
          <motion.div
            variants={variantsTitle}
            custom={i}
            initial="hidden"
            animate="visible"
          >
            <Link to={`/portfolio/${project.link}`}>
              <motion.h2
                whileHover={{
                  scale: 1.08,
                  originX: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="text-gray-50 uppercase font-bold tracking-widest text-3xl mb-3 md:mb-6 md:text-5xl lg:mb-3 xl:mb-6"
              >
                {project.name}
              </motion.h2>
            </Link>
          </motion.div>
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
