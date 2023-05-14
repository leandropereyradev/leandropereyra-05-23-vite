import { Link, NavLink } from "react-router-dom";
import { useScrollPosition } from "../../hook/useScrollPosition";

const Bar = () => {
  const scrollPosition = useScrollPosition();

  const isActiveLink = ({ isActive }) => {
    return isActive
      ? "text-blue-300 font-bold uppercase tracking-[0.2em]"
      : "tracking-[0.2em] uppercase hover:text-blue-300 hover:font-bold";
  };

  const defaultStyle =
    "hidden lg:visible fixed w-full transition-all lg:grid grid-cols-navbar text-gray-50 px-3 py-2";

  return (
    <div
      className={
        scrollPosition < 90 ? defaultStyle : defaultStyle + " bg-gray-900"
      }
    >
      <div className="flex justify-end items-center gap-4 mr-6 xl:gap-10 fullHD:gap-16">
        <NavLink to="/" className={isActiveLink}>
          Inicio
        </NavLink>
        <NavLink to="/portfolio" className={isActiveLink}>
          Portfolio
        </NavLink>
      </div>

      <div className="place-self-center">
        <Link to="/">
          <img src="/src/assets/images/logo.svg" alt="logo" className="w-12" />
        </Link>
      </div>

      <div className="flex justify-start items-center gap-4 ml-6 xl:gap-10 fullHD:gap-16">
        <NavLink to="/about" className={isActiveLink}>
          Sobre mi
        </NavLink>
        <NavLink to="/contact" className={isActiveLink}>
          Contacto
        </NavLink>
      </div>
    </div>
  );
};

export default Bar;
