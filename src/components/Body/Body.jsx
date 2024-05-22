import About from "./About/About"
import Contact from "./Contact/Contact"
import Home from "./Home/Home"
import Services from "./Services/Services"
import Testimonials from "./Testimonials/Testimonials"

function Body() {
  return (
    <div >
      <Home/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default Body