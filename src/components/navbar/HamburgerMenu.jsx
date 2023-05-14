import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false);

  const menuList = [
    {
      link: "/",
      name: "Inicio",
    },
    {
      link: "/portfolio",
      name: "Portfolio",
    },
    {
      link: "/about",
      name: "Sobre Mi",
    },
    {
      link: "/contact",
      name: "Contacto",
    },
  ];

  const isActiveLink = ({ isActive }) =>
    isActive
      ? "text-blue-300 font-bold border-b-2 w-11/12 tracking-[0.2em] text-center py-2 md:text-xl"
      : "bg-transparent w-11/12 text-gray-50 tracking-[0.2em] text-center py-2 md:text-xl";

  return (
    <>
      <div className="fixed w-full flex items-center justify-between text-gray-50 px-3 py-2 bg-gray-900 lg:hidden">
        <div className="">
          <Link to="/">
            <img
              src="/src/assets/images/logo.svg"
              alt="logo"
              className="w-12"
            />
          </Link>
        </div>

        <div className="flex">
          <button onClick={() => setMenu(!menu)}>
            <img src="/src/assets/images/menu.svg" alt="menu" className="w-8" />
          </button>
        </div>
      </div>

      {menu && (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.1,
            ease: "easeOut",
          }}
          className="w-11/12 mx-auto transition-all top-20 flex flex-col gap-2 py-4 bg-gray-900 rounded-lg border-blue-300 border-2 mt-4 lg:hidden"
        >
          <div className="flex flex-col items-center gap-2 uppercase">
            {menuList.map((menu, i) => (
              <NavLink
                key={i}
                to={menu.link}
                onClick={() => setMenu(!menu)}
                className={isActiveLink}
              >
                {menu.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default HamburgerMenu;
