
function Card({data}) {
  return (
    <div className="max-w-60 rounded overflow-hidden shadow-lg bg-white px-2 py-4 text-center">
        <div className="font-bold text-xl mb-2 text-[#012F5B]">{data?.title}</div>
        <p className="text-gray-700 text-base"> {data?.description}  </p>
    </div>
  )
}
export default Card