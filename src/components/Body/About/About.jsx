import aboutImage from "../../../assets/aboutImage.avif";
import aboutUs from "../../../assets/aboutUs.png";

function About() {
  return (
    <div className=" bg-orange-50  w-full">
      <div className="flex flex-col-reverse  md:flex-row gap-8 w-full px-4 sm:px-16 lg:px-32 py-24">
        <div className=" relative md:w-1/2   ">
          <img
            src={aboutUs}
            alt=""
            className="absolute z-10 w-40 right-0 top-[-4rem]"
          />

          <div className="overflow-hidden rounded-3xl">
            <img src={aboutImage} alt="" className="scale-110" />
          </div>
        </div>
        <div className="content md:w-1/2">
          <h1 className="font-extrabold text-2xl md:text-4xl text-orange-600">
            About Smart Vision Institute & Consultancy
          </h1>
          <p className="text-[#53545B] my-3 line-clamp-5">
            Smart Vision Institute & Consultancy is dedicated to providing
            high-quality education and training in various fields. Located in
            Gramthan-7, Netachowk, Morang, we specialize in language courses,
            computer training, and professional development programs. Our
            mission is to empower individuals with the skills and knowledge they
            need to succeed in their personal and professional lives.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
