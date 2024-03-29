import React from "react";

const Blogs = () => {
   return (
      <div className="mt-20">
         <div className="flex flex-col  justify-center items-center h-screen">
            <h1 className="text-rose-500 font-semibold md:text-5xl text-3xl mb-6">
               Comming soon
            </h1>
            <div className="relative w-20 mt-6 h-20 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-[#19e126] to-rose-600 ">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#262624] rounded-full border-2 border-white"></div>
            </div>
         </div>
      </div>
   );
};

export default Blogs;
