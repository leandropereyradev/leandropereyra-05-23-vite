import { motion } from "framer-motion";

const Home = () => {
  return (
    <header className="text-white h-screen flex flex-col justify-center items-center overflow-hidden">
      <motion.section
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
          delay: 0.8,
        }}
        className="flex flex-col justify-center items-center bg-[url('/src/assets/images/logo-bg.svg')] bg-no-repeat bg-center w-full max-w-xs h-full mt-12 md:max-w-xl lg:max-w-md fullHD:max-w-xl"
      >
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
            delay: 1.6,
          }}
          className="font-black tracking-widest text-3xl mb-1 text-blue-400 md:text-5xl md:mb-4 lg:text-4xl fullHD:text-5xl"
        >
          Leandro Pereyra
        </motion.h2>
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
          className="text-lg tracking-wide md:text-2xl md:tracking-widest lg:text-xl fullHD:text-2xl"
        >
          Desarrollador Web Full-Stack
        </motion.h1>
      </motion.section>
    </header>
  );
};

export default Home;
