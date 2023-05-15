import { motion } from "framer-motion";
import { projects as images } from "../../data/projects";
import { Link } from "react-router-dom";

const ImagesPortfolio = () => {
  const variantsImage = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 3 + 0.2 * index },
    }),
  };

  return (
    <section className="hidden xl:flex justify-end items-center">
      <div className="grid grid-cols-2 overflow-hidden">
        {images.map((image, i) => (
          <motion.div
            variants={variantsImage}
            custom={i}
            initial="hidden"
            animate="visible"
            key={i}
            className={`rounded-lg border-2 border-blue-400 ${image.style}`}
          >
            <Link to={`/portfolio/${image.link}`}>
              <img
                src={`/src/assets/images/portfolio/${image.image}`}
                alt={image.name}
                className="rounded-lg"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImagesPortfolio;
