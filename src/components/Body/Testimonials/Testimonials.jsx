import { TestimonialsData } from "../../../utils/constant"
import Card from "./Card"

function Testimonials() {
  return (
    <div className="w-full  py-16 overflow-x-auto no-scrollbar bg-orange-50 ">
        <div className="flex gap-10 ">
            {TestimonialsData.map(data => <Card key={data.id} data={data}/>)}
        </div>
    </div>
  )
}

export default Testimonials