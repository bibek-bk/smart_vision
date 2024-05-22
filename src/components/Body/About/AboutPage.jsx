import mission from "../../../assets/mission.png";
import about from "../../../assets/about.png";
import aboutUs from "../../../assets/aboutUs.png";
import promise from "../../../assets/promise.png";

function AboutPage() {
  return (
    <div className="pt-32  px-4 sm:px-20 bg-orange-50">
      <div className="flex flex-col lg:flex-row gap-3  py-5">
        <div className=" lg:w-1/2">
          <p className="font-bold text-4xl text-orange-600">
            About Smart Vision Institute & Consultancy
          </p>
          <p className="text-gray-600 font-semibold text-xl pt-5  ">
            Welcome to{" "}
            <span className=" text-orange-600">
              Smart Vision Institute & Consultancy
            </span>
            , where learning meets laughter and success is the name of the game.
            Located in Gramthan-7, Netachowk, Morang, we are not just another
            educational institute; we are your partner in personal and
            professional growth.
          </p>
        </div>
        <div className="relative lg:w-1/2">
          <img src={about} alt="about" />
          <img
            src={aboutUs}
            alt="about"
            className="absolute top-0 right-0 w-[10rem]"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 py-10">
        <div className="img lg:w-1/2">
          <img src={mission} alt="mission" />
        </div>
        <div className=" lg:w-1/2">
          <p className="font-bold text-4xl text-orange-600">Our Mission</p>
          <p className="text-gray-600 font-semibold text-xl pt-5 ">
            At <span className=" text-orange-600">Smart Vision</span>, we are
            dedicated to providing high-quality education and training across
            various fields. From language courses to computer training and
            professional development programs, we equip our students with the
            skills and knowledge they need to conquer the world.
          </p>
        </div>
      </div>
      {/* <div>
        <div className="content">
          <p>Why Choose Us?</p>
          <p></p>
        </div>
        <div className="img">
          <img src="" alt="" />
        </div>
      </div> */}
      <div className="flex flex-col lg:flex-row gap-3  py-5">
        <div className=" lg:w-1/2">
          <p className="font-bold text-4xl text-orange-600">Our Promise</p>
          <p className="text-gray-600 font-semibold text-xl pt-5 ">
            At{" "}
            <span className=" text-orange-600">
              Smart Vision Institute & Consultancy
            </span>
            , we don't just teach; we inspire, we challenge, and we transform.
            Join us and discover a place where education isn't just about
            textbooks and lectures—it's about creating a future you'll be proud
            of.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={promise} alt="promise" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
