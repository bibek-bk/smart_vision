
function Testimonials({data}) {
    return (
      <div className="min-w-[50rem]  py-10 px-4 border-8 rounded-xl">
          <div>
          <p className="text-4xl">{data?.name}</p>
          {/* <p>{data?.imgUrl}</p> */}
          </div>
          <p className="text-3xl">{data?.description}</p>
      </div>
    )
  }
  
  export default Testimonials