"use client";
import { IoSend } from "react-icons/io5";

const SubmitButton = () => {
  return (
    <button
      type="submit"
      id="message-submit-btn"
      className=" w-full lg:w-1/2 mx-auto mt-5 rounded text-neutral-200 py-3 px-6 font-bold flex items-center justify-center gap-4 border-2 border-neutral-800 group bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-green-400/20 hover:border-2 hover:border-green-200/30 focus-visible:outline-green-500 hover:text-white transition-colors disabled:bg-neutral-700"
    >
      <span className="text-lg ">Send</span>
      <div className="group-hover:-rotate-12 duration-200">
        <IoSend></IoSend>
      </div>
    </button>
  );
};
export default SubmitButton;
