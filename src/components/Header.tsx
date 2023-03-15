import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="top-0 p-5 flex items-start md:justify-between max-w-7xl mx-auto z-0 xl:items-center font-semibold">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <NavLink to="/">
          <img
            className="h-5 hidden md:inline-flex"
            src="/images/logomms_grey.png"
            alt=""
          />
        </NavLink>
      </motion.div>


      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=""
      >
        <div className="flex flex-row mx-auto cursor-pointer">
        <NavLink to="/">
          <img
            className="h-5 inline-block md:hidden"
            src="/images/logomms_grey.png"
            alt=""
          />
        </NavLink>
        </div>
        <div className="flex flex-row items-center cursor-pointer space-x-2 md:space-x-4">
        <NavLink to="/projects">
          <p className="uppercase flex text-sm text-gray-400"> 1.Projects </p>
        </NavLink>
        <NavLink to="/experience">
          <p className="uppercase flex text-sm text-gray-400"> 2.Experience </p>
        </NavLink>
        <NavLink to="/about">
          <p className="uppercase flex text-sm text-gray-400"> 3.About </p>
        </NavLink>
        <NavLink to="/contact">
          <p className="uppercase flex text-sm text-gray-400">4.Contact</p>
        </NavLink>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
