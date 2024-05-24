import { useLocation } from "react-router-dom";
import { ServicesData } from "../../../utils/constant"
import Card from "./Card"
import { useEffect } from "react";

function ServicePage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen w-full py-36 bg-[#FFEBDC]">
       <div className="w-full px-4 sm:px-16  bg-[#ffebdc]">
      <div className="text-4xl text-center  text-orange-600 font-bold">
        Our Services
      </div>
  <p className="text-xl text-gray-600 max-w-5xl text-center mx-auto py-7  ">At <span className="font-bold text-orange-600">Smart Vision Institute & Consultancy</span>, we offer a wide range of educational services designed to empower individuals with the skills they need to succeed in today's competitive world. Our courses are led by experienced instructors and are tailored to meet the diverse needs of our students.

</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-fit mx-auto">
        {ServicesData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      </div>


    </div>
  )
}

export default ServicePage