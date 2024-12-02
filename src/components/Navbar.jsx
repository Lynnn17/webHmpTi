import { useState } from "react";
import Logo from "../assets/logo.png";

import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisibleMobile, setDropdownVisibleMobile] = useState(false);

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDropdownMobile = () => {
    if (dropdownVisibleMobile == false) {
      setDropdownVisibleMobile(true);
    } else {
      setDropdownVisibleMobile(false);
    }
  };

  const handleSideBar = () => {
    if (sidebarVisible == false) {
      setSidebarVisible(true);
    } else {
      setSidebarVisible(false);
    }
  };

  return (
    <nav className=" py-2 flex items-center justify-between ">
      <div className="flex flex-shrink-0 items-center pl-6 ">
        <img className="md:w-[50px]" src={Logo} width={30} alt="HMP TI UNESA" />
      </div>
      <div className="hidden m-8 md:flex text-white items-center justify-center gap-4 text-1xl">
        <a
          href="/"
          className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
        >
          Beranda
        </a>
        <a
          href="/kabinet"
          className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
        >
          Kabinet
        </a>

        <a
          href="/artikel"
          className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
        >
          Artikel
        </a>
        <a
          href="/galeri"
          className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
        >
          Galeri
        </a>
        {/* relative fixed top-0 */}
        <div className="">
          <button
            className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100 flex items-center ml-1"
            onClick={handleDropdown}
          >
            Departemen
            <svg
              className="w-5 h-5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg id="icons/regular/chevron-up-s">
                <path
                  id="Icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                  fill="currentColor"
                />
              </svg>
            </svg>
          </button>
          <AnimatePresence initial={false}>
            {dropdownVisible && (
              <motion.div className="absolute  bg-neutral-950 bg-opacity-80 rounded-lg text-white  py-2 mt-2 flex flex-col z-10">
                <motion.a
                  key={"bph"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/bph"
                  className=" w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-3 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  BPH
                </motion.a>
                <motion.a
                  key={"psdm"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/psdm"
                  className=" w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-3 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  PSDM
                </motion.a>
                <motion.a
                  key={"penristek"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/penristek"
                  className="w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-4 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  PENRISTEK
                </motion.a>
                <motion.a
                  key={"mnb"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/mnb"
                  className="w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-4 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  MNB
                </motion.a>
                <motion.a
                  key={"kominfo"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/kominfo"
                  className=" w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-3 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  KOMINFO
                </motion.a>
                <motion.a
                  key={"kwu"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/kwu"
                  className="w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-4 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  KWU
                </motion.a>
                <motion.a
                  key={"dagri"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/dagri"
                  className="w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-4 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  DAGRI
                </motion.a>
                <motion.a
                  key={"pe"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/pe"
                  className=" w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-3 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  PE
                </motion.a>
                <motion.a
                  key={"agama"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/agama"
                  className="w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-4 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  AGAMA
                </motion.a>
                <motion.a
                  key={"deplu"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  exit={{ opacity: 0 }}
                  href="/departemen/deplu"
                  className="w-fit px-4 py-2 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-4 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                >
                  DEPLU
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Departement */}
        </div>
      </div>

      {/* Mobile Navbar */}
      <button className="block sm:hidden pr-2" onClick={handleSideBar}>
        <svg
          className="w-10 h-7 "
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="bar-chart-2">
            <path
              id="Vector"
              d="M20 6L10 6"
              stroke="#F8F9FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M20 12L4 12"
              stroke="#F8F9FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M20 18H14"
              stroke="#F8F9FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </button>
      {/* Side Bar*/}
      <AnimatePresence initial={false}>
        {sidebarVisible && (
          <motion.aside
            key={"sidebar"}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              opacity: 0,
            }}
            exit={{ x: 10, opacity: 0 }}
            className="fixed h-full z-50 top-0 bottom-0 right-0 "
          >
            <div className="h-full flex flex-col bg-white border-r shadow-lg ">
              <button
                className="flex items-end justify-end mt-3 mr-3"
                onClick={handleSideBar}
              >
                <svg
                  className="w-7 h-7"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                    fill="#000"
                  />
                </svg>
              </button>
              <ul className="mt-10 flex flex-col gap-5 text-black font-inter font-medium pl-5 pr-8  items-start">
                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/">Beranda</a>
                </li>

                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/kabinet">Kabinet</a>
                </li>

                <li>
                  <a
                    className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                    href="/artikel"
                  >
                    Artikel
                  </a>
                </li>
                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/galeri">Galeri</a>
                </li>
                <li>
                  <button
                    className="flex items-center gap-[0.6rem] w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                    onClick={handleDropdownMobile}
                  >
                    Departement
                    <svg
                      className="w-5 h-5"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icons/regular/chevron-up-s">
                        <path
                          id="Icon"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                  {/* Dropdown Department */}
                  <AnimatePresence initial={false}>
                    {dropdownVisibleMobile && (
                      <motion.ul className="flex flex-col gap-5 mt-5 ml-3 text-sm">
                        <motion.li
                          key={"bph"}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 0,
                            opacity: 0,
                          }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/bph">BPH</a>
                        </motion.li>
                        <motion.li
                          key={"psdm"}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/psdm">PSDM</a>
                        </motion.li>
                        <motion.li
                          key={"penristek"}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/penristek">PENRISTEK</a>
                        </motion.li>
                        <motion.li
                          key={"mnb"}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 0.8,
                            opacity: 0,
                          }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/mnb">MNB</a>
                        </motion.li>
                        <motion.li
                          key={"kominfo"}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 1,
                            opacity: 0,
                          }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/kominfo">KOMINFO</a>
                        </motion.li>
                        <motion.li
                          key={"kwu"}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 1.2,
                            opacity: 0,
                          }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/kwu">KWU</a>
                        </motion.li>
                        <motion.li
                          key={"dagri"}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 1.4,
                            opacity: 0,
                          }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/dagri">DAGRI</a>
                        </motion.li>
                        <motion.li
                          key={"pe"}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 1.6,
                            opacity: 0,
                          }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/pe">PE</a>
                        </motion.li>
                        <motion.li
                          key={"agama"}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 1.8,
                            opacity: 0,
                          }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/agama">AGAMA</a>
                        </motion.li>
                        <motion.li
                          key={"deplu"}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 2,
                            opacity: 0,
                          }}
                          exit={{ opacity: 0 }}
                          className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                        >
                          <a href="/departemen/deplu">DEPLU</a>
                        </motion.li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
