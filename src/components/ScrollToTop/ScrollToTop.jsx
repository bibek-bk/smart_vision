
import {  animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from "react-icons/fa6";

function ScrollToTop() {
    const scrollToTop = ()=>{
        scroll.scrollToTop();
      }
  return (
    <div onClick={scrollToTop} className="fixed z-20 right-6 sm:right-12 bottom-6 sm:bottom-12 flex justify-center items-end w-12 sm:w-14  h-12 sm:h-14 rounded-full bg-red-300 shadow-xl"><FaArrowUp className='text-orange-600 text-3xl sm:text-4xl animate-bounce mb-1 ' /></div>

  )
}

export default ScrollToTop