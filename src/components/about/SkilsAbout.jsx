import { motion } from "framer-motion";

const SkilsAbout = () => {
  const techs = [
    "react",
    "nextjs",
    "node",
    "express",
    "mongo",
    "js",
    "html5",
    "css",
    "git",
  ];

  const variants = {
    hidden: { scale: 2, opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0 + 0.2 * index },
    }),
  };

  return (
    <div>
      <h2 className="text-center font-bold uppercase text-3xl tracking-widest text-blue-400 mb-10 md:text-4xl md:mb-16">
        Skills
      </h2>
      <div className="grid grid-cols-3 place-items-center gap-y-8 md:max-w-xl md:mx-auto">
        {techs.map((tech, i) => (
          <motion.img
            key={i}
            variants={variants}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            src={`/assets/images/about/${tech}.svg`}
            alt={tech}
            className="w-14 h-14 md:w-20 md:h-20"
          />
        ))}
      </div>
    </div>
  );
};

export default SkilsAbout;
