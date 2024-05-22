import SocialMediaIcons from "./SocialMediaIcons";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Form from "./Form";
function Contact() {
  return (
    <div className="w-full  py-20 px-2 sm:px-16 bg-[#ffebdc]  " id="contact">
      <div className="w-full lg:flex  bg-orange-200 px-4 sm:px-10 py-5 rounded-3xl">
        <div className="content lg:w-1/2 ">
          <div className="healdines space-y-4 ">
            <p className="flex gap-3 items-center font-b  old text-xl sm:text-3xl text-orange-600">
              <div className="h-1 w-12 sm:w-20 bg-orange-600"></div>Contact
            </p>

            <p className="text-2xl sm:text-4xl font-bold">
              Have Any Questions?
              <br /> Drop Us a Message!
            </p>
            <p className="max-w-lg w-full text-gray-700 ">
              Get in touch and let us know how we can help. Fill out the form
              and we will be in touch as soon as possible.
            </p>
          </div>
          <div className="space-y-4 my-5">
            <div className="flex gap-2">
              <div className="text-xl ">
                <FaLocationDot />
              </div>
              <div className="">
                <div className=" font-extrabold text-lg"> Address:</div>
                <div className=" text-gray-700 ">
                  Gramthan-7, Netachowk, Morang
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-xl">
                <IoCall />
              </div>
              <div className="">
                <div className="font-extrabold text-lg">Phone:</div>
                <div className="text-gray-700">111111111</div>
                <div className="text-gray-700">111111111</div>
                <div className="text-gray-700">111111111</div>
                <div className="text-gray-700">111111111</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-xl">
                <MdEmail />
              </div>
              <div className="">
                <div className="font-extrabold text-lg">Email:</div>
                <div className="text-gray-700">xyz@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="socials">
            <SocialMediaIcons />
          </div>
        </div>
        <div className=" lg:w-1/2  ">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
