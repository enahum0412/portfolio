import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade>
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div
            id="logo"
            className="cursor-pointer title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
            onClick={scrollToTop}
          >
            Eduardo Nahum
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <AnchorLink href="#projects" className="mr-5 hover:text-white">
              Past Work
            </AnchorLink>
            <AnchorLink href="#skills" className="mr-5 hover:text-white">
              Skills
            </AnchorLink>
            <AnchorLink
              href="#contact"
              className="mr-0 hover:text-white md:invisible"
            >
              Get in Touch
              {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
            </AnchorLink>
            {/* <a href="#testimonials" className="mr-5 hover:text-white">
                        Testimonials
                    </a> */}
          </nav>
          <AnchorLink
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hidden md:flex"
          >
            Get in Touch
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </AnchorLink>
        </div>
      </header>
    </Fade>
  );
};

export default Navbar;
