import { Link } from "react-router-dom";
import { MENU_ICON_URL } from "../../utils/constant";
import logo from "../../assets/logo.png";
function Header() {
  return (
    <div className=" fixed z-20 w-full">
      <div className="flex justify-between items-center w-[95%] my-2 mx-auto  px-4 lg:px-14 py-1  rounded-lg text-[#012F5B] bg-white bg-opacity-30 backdrop-filter backdrop-blur-[10px] shadow-lg  ">
        <div>
          <Link to="/" className="cursor-pointer">
          <div className="flex gap-4 items-center">
          <img src={logo} alt="logo" className="w-20" />
          <div className="h-[4rem] w-[3px] bg-orange-600"></div>
          <div className="text-xl font-bold text-orange-600">Smart Vision <br /> Institute & Consultancy</div>
        </div>
          </Link>
        </div>
        <div className=" hidden md:flex items-center gap-6 text-lg font-bold">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link to="about" className="cursor-pointer">
            About
          </Link>
          <Link to="Services" className="cursor-pointer">
            Services
          </Link>
          <Link to="contact" className="cursor-pointer">
            Testimonials
          </Link>
          <Link to="contact" className="btn cursor-pointer">
            Contact Us
          </Link>
        </div>
        <div className="w-8 md:hidden">
          <img src={MENU_ICON_URL} alt="menu" />
        </div>

        {/* mobile_menu */}
      </div>
    </div>
  );
}

export default Header;
