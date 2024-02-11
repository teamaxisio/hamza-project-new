import React from "react";
export default function Reviews({ children }) {
  // https://randomuser.me/api/portraits/men/31.jpg
  return (
    <>
      <h2 className="font-extrabold text-xl">Reviews (125)</h2>
      <div className="flex flex-row justify-start mt-[20px]">
        <button className="bg-[#0090eb] mr-[20px] border border-1 border-blue-500 p-[7px] px-[30px] rounded-full">
          Top
        </button>
        <button className="bg-transparent mr-[20px] border border-1 border-blue-500 p-[7px] px-[30px] rounded-full">
          Recent
        </button>
        <button className="bg-transparent mr-[20px] border border-1 border-blue-500 p-[7px] px-[30px] rounded-full">
          Oldest
        </button>
      </div>
      {children}
    </>
  );
}
