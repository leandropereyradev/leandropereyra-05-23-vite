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
      <div className="grid grid-cols-2">
        {images.map((image, i) => (
          <motion.div
            variants={variantsImage}
            custom={i}
            initial="hidden"
            animate="visible"
            exit={{ scale: 0, opacity: 0 }}
            key={i}
            className={image.style}
          >
            <Link to={`/portfolio/${image.link}`}>
              <motion.img
                src={`/src/assets/images/portfolio/${image.image}`}
                alt={image.name}
                className="rounded-lg border-2 border-blue-400"
                whileHover={{
                  scale: 1.2,
                }}
                transition={{
                  stiffness: 300,
                  type: "spring",
                }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImagesPortfolio;
