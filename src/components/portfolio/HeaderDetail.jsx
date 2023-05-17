/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const HeaderDetail = ({ name, detail }) => {
  return (
    <header className="h-screen flex justify-center items-center text-gray-50 w-11-12 mx-auto">
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
            delay: 0.5,
          }}
          className="text-blue-400 uppercase text-center font-bold tracking-widest text-5xl mb-6 md:text-6xl fullHD:text-7xl"
        >
          {name}
        </motion.h1>
        <motion.h4
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
            delay: 1.5,
          }}
          className="text-gray-50 text-center text-lg tracking-wider md:text-2xl md:tracking-widest"
        >
          {detail}
        </motion.h4>
      </div>
    </header>
  );
};

export default HeaderDetail;
