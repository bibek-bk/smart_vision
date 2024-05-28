import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="fixed z-20 w-full">
      <div className="flex justify-between items-center w-[95%] my-2 mx-auto  px-4 lg:px-14 py-1  rounded-lg text-[#012F5B] bg-white bg-opacity-30 backdrop-filter backdrop-blur-[10px] shadow-lg  ">
        <div>
          <Link to="/" className="cursor-pointer">
            <div className="flex gap-4 items-center">
              <img src={logo} alt="logo" className="w-20" />
              <div className="h-[4rem] w-[3px] sm:h-[4rem] sm:w-[3px] bg-orange-600"></div>
              <div className="text-lg sm:text-xl font-bold text-orange-600">
                Smart Vision <br /> Institute & Consultancy
              </div>
            </div>
          </Link>
        </div>
        <div className=" hidden md:flex items-center gap-6 text-lg font-bold">
          <NavLink to="/" className="navEffect">
            Home
          </NavLink>
          <NavLink to="about" className="navEffect">
            About
          </NavLink>
          <NavLink to="service" className="navEffect">
            Services
          </NavLink>
          <Link
            smooth={true}
            offset={-50}
            duration={1000}
            to="testimonials"
            className="navEffect"
          >
            Testimonials
          </Link>
          <Link
            smooth={true}
            offset={-50}
            duration={1000}
            to="contact"
            className="btn "
          >
            Contact Us
          </Link>
        </div>
        <div className="w-8 md:hidden " onClick={() => setIsMenuOpen(true)}>
          <IoMenu className="text-4xl" />{" "}
        </div>
      </div>

      {/* mobile_menu */}
      <div
        className={` ${
          isMenuOpen ? " w-[90%]" : "w-0 mr-[-4rem]"
        }  absolute md:hidden top-0 right-0  h-screen px-5 transiton duration-700   bg-white bg-opacity-30 backdrop-filter backdrop-blur-[16px] shadow-lg `}
      >
        <div className="relative flex gap-4 py-10 items-center">
          <MdCancel
            className=" absolute right-[-1rem] top-10 text-5xl   "
            onClick={() => setIsMenuOpen(false)}
          />
          <Link to="/" className="cursor-pointer">
            <div className="flex gap-4 items-center">
              <img src={logo} alt="logo" className="w-16" />
              <div className="h-[4rem] w-[3px] bg-orange-600"></div>
              <div className="text-lg font-bold text-orange-600">
                Smart Vision <br /> Institute & Consultancy
              </div>
            </div>
          </Link>
    
        </div>
        <div className="flex flex-col  gap-4   text-lg font-bold">
          <NavLink
            to="/"
            className="navEffect"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className="navEffect"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <Link
            smooth={true}
            offset={-50}
            duration={1000}
            to="testimonials"
            className="navEffect"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <NavLink
            to="service"
            className="navEffect"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>

          <Link
            smooth={true}
            offset={-50}
            duration={1000}
            to="contact"
            className=" btn w-fit "
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
