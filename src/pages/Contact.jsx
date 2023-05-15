import { motion } from "framer-motion";

const Contact = () => {
  const contactIcon = [
    {
      ref: "mailto:contacto@leandropereyra.com",
      icon: "mail",
    },
    {
      ref: "https://github.com/leandropereyradev",
      icon: "github",
    },
    {
      ref: "https://www.linkedin.com/in/leandropereyradev",
      icon: "linkedin",
    },
  ];

  const variants = {
    hidden: { scale: 3, opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 2 + 0.2 * index },
    }),
  };

  return (
    <section className="grid grid-rows-3 h-screen w-11/12 mx-auto pt-12 items-center overflow-hidden">
      <div>
        <motion.h1
          initial={{
            scale: 1.2,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1,
          }}
          className="text-blue-400 uppercase text-center font-bold tracking-widest text-5xl md:text-7xl"
        >
          Contacto
        </motion.h1>
      </div>
      <div className="text-gray-50 text-center text-xl tracking-wider md:text-2xl md:tracking-widest">
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1.6,
          }}
          className="mb-6"
        >
          Gracias por visitar mi Web Personal
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1.6,
          }}
        >
          ¡Contáctame para que podamos trabajar juntos!
        </motion.p>
      </div>
      <div className="flex justify-around items-center lg:mx-auto lg:w-full lg:max-w-2xl">
        {contactIcon.map((icon, i) => (
          <motion.a
            href={icon.ref}
            key={i}
            variants={variants}
            custom={i}
            initial="hidden"
            animate="visible"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/src/assets/images/${icon.icon}.svg`}
              alt={icon.icon}
              className="w-14 md:w-24 lg:transition-all lg:hover:scale-110 lg:w-20"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
