import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <header className="text-white w-11/12 mx-auto h-screen flex flex-col justify-center items-center gap-10 overflow-hidden">
      <motion.p
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
          delay: 1.6,
        }}
        className="font-black text-3xl text-center tracking-widest leading-[3rem] mb-1 text-blue-400 md:text-5xl md:leading-[4rem] md:mb-4 lg:text-4xl fullHD:text-5xl"
      >
        Oops! Página no encontrada
      </motion.p>
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
          delay: 2.2,
        }}
        className="text-lg tracking-wide text-center md:text-2xl md:tracking-widest lg:text-lg fullHD:text-2xl"
      >
        Te invito a que explores otras páginas desde la barra de navegación que
        hice para ti
      </motion.h1>
    </header>
  );
};

export default NotFound;
