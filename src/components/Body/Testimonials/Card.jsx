
function Testimonials({data}) {

    return (
      <div className="max-w-[50rem]  w-full mx-auto my-8 py-10 px-4 rounded-xl bg-orange-200 shadow-lg">
      <div className="flex items-center">
        <img src={data?.imgUrl} alt={data?.name} className="w-28 h-28 rounded-full object-cover mr-4" />
        <p className="text-xl sm:text-4xl font-semibold text-orange-600">{data?.name}</p>
      </div>
      <p className="text-lg sm:text-2xl text-gray-700 mt-4">{data?.description}</p>
    </div>
    )
  }
  
  export default Testimonials