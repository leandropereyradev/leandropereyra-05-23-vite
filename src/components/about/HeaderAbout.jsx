import { motion } from "framer-motion";

const HeaderAbout = () => {
  return (
    <header className="text-center h-screen grid grid-rows-3 items-center overflow-hidden">
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
          delay: 1,
        }}
        className="italic tracking-widest md:text-2xl"
      >
        ¡Sé quien soy, de donde vengo y hacia donde voy!
      </motion.p>
      <motion.h2
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
          delay: 3,
        }}
        className="text-5xl font-bold tracking-widest text-blue-400 leading-[4rem] md:text-7xl md:leading-[6rem]"
      >
        Soy Leandro Pereyra
      </motion.h2>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 2,
        }}
        className="text-3xl font-bold tracking-widest leading-[4rem] md:text-4xl"
      >
        Desarrollador Web Full-Stack
      </motion.h1>
    </header>
  );
};

export default HeaderAbout;
