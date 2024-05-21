
function Card({data}) {
  return (
    <div className="max-w-60 rounded overflow-hidden shadow-lg bg-white px-2 py-4 text-center">
        <div className="font-bold text-xl mb-2 text-[#0E1133]">{data?.title}</div>
        <p className="text-gray-700 text-base"> {data?.description}  </p>
    </div>
  )
}

// const CourseCard = ({ title, description, imageUrl }) => (
//   <div className="max-w-sm rounded overflow-hidden shadow-lg">
//     <img className="w-full" src={imageUrl} alt={title} />
//     <div className="px-6 py-4">
//       <div className="font-bold text-xl mb-2">{title}</div>
//       
//     </div>
//   </div>
// );
export default Card