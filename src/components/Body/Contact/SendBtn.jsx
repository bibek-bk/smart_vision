import { BsSendFill } from "react-icons/bs";
const SendButton = () => {
  return (
    <div className="p-0 mt-1   w-full ">
      <button type="submit" className="bg-orange-500 text-white font-inherit w-full py-1.5 px-5 text-lg font-medium rounded-xl border-none tracking-wider flex items-center justify-center shadow-inner overflow-hidden relative h-11 pr-14 cursor-pointer group">
        Send
        <div className="bg-white ml-4 absolute flex items-center justify-center h-9 w-[30%] rounded-lg shadow-md right-1.5 transition-all duration-300 group-hover:w-[calc(100%-0.6em)] group-active:scale-95">
        <BsSendFill         className=" transition-transform duration-300 text-orange-600 group-hover:translate-x-1"
/>
        </div>
      </button>
    </div>
  );
};

export default SendButton;
