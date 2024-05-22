import { Link } from "react-scroll";

import hero_image from "../../../assets/main_hero.png";
function Home() {
  return (
    <div className=" flex flex-col sm:flex-row py-20 px-4 sm:px-16 min-h-screen    bg-[#ffebdc] ">
      <div className="mt-8 lg:mt-14 w-full max-w-[35rem] space-y-5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#012F5B] ">
          Transform Your Future with{" "}
          <span className="text-orange-600 font-extrabold">
            Smart Vision Institute{" "}
          </span>
          &
          <span className="ml-2 text-orange-600  font-extrabold  ">
            Consultancy
          </span>
        </h1>
        <p className="text-gray-500">
          At Smart Vision Institute & Consultancy, we believe in the power of
          education to change lives. Whether you are aiming to master a new
          language, gain cutting-edge computer skills, or prepare for a
          professional certification, our diverse and dynamic courses are
          designed to help you achieve your dreams.
        </p>
        <Link to={'contact'} smooth={true} duration={1000} >
        <button className="btn">Join Us Today</button>{" "}
        </Link>
        {/* <Link to={'about'}> */}
        <button className="my-1 px-6 py-2.5  text-orange-600 hover:text-white rounded-md bg-white hover:bg-orange-600 font-bold shadow-md  ">
          Learn More
        </button>
        {/* </Link> */}
      </div>
      <div className="mx-auto mt-5 max-w-[25rem] w-full sm:max-w-[40rem]    ">
        <img src={hero_image} alt="hero_image" />
      </div>
    </div>
  );
}

export default Home;
