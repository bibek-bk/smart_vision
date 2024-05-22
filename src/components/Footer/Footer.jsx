import logo from "../../assets/logo.png";
import SocialMediaIcons from "../Body/Contact//SocialMediaIcons";
function Footer() {
  return (
    <div className="flex flex-col  md:flex-row justify-between py-12 px-4 sm:px-16 bg-black text-gray-400 ">
      <div className="space-y-2 sm:space-y-4">
        <div className="flex gap-4 items-center">
          <img src={logo} alt="logo" className="w-32" />
          <div className="h-[5rem] w-[2px] bg-white"></div>
          <div className="text-xl sm:text-3xl font-bold text-orange-600">Smart Vision <br /> Institute & Consultancy</div>
        </div>

        <div className="pl-4 max-w-xl">
          Our education service of Smart Vision Institute & Consultancy is more
          than just a premier language and computer skills training institution;
          it is a transformative journey towards realizing your full potential.
        </div>
        <SocialMediaIcons />
      </div>
      <div>
        <p className="text-orange-600 font-bold text-2xl pl-4">Company</p>
        <ul className="pl-4">
          <li className="hover:text-orange-600">Home</li>
          <li className="hover:text-orange-600">About</li>
          <li className="hover:text-orange-600">Services</li>
          <li className="hover:text-orange-600">Testimonials</li>
          <li className="hover:text-orange-600">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
