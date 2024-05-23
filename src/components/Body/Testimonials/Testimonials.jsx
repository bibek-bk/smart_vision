import { TestimonialsData } from "../../../utils/constant";
import Card from "./Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Testimonials() {
  const isDesktop = window.innerWidth > 968
  return (
    <div className="w-full py-12 px-2 sm:px-4 smpx-8 bg-orange-50  ">
      <p className="text-center pb-4 text-orange-600 font-bold text-4xl">
        Testimonials
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        speed={1000}
        autoplay={{ delay: 3000  }}
        navigation={isDesktop}
        loop
      >
        {TestimonialsData.map((data) => (
          <SwiperSlide key={data.id}>
            <Card data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
  );
}

export default Testimonials;
