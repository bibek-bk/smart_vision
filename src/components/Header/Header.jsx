import { Link } from "react-router-dom";
import { LOGO_URL, MENU_ICON_URL } from "../../utils/constant";
function Header() {
  return (
    <div className="fixed z-20 flex justify-between items-center px-4 sm:px-16 py-1 w-full bg-white shadow-lg  ">
      <div className="w-14 sm:w-16">
        <img src={LOGO_URL} alt="logo" className="w-full" />
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
  );
}

export default Header;
