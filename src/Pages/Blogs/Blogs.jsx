import React from "react";

const Blogs = () => {
  return (
    <div>
      <div class="flex flex-col  justify-center items-center h-screen">
        <h1 className="text-rose-500 font-semibold md:text-5xl text-3xl mb-6">
          Comming soon
        </h1>
        <div class="relative w-24 mt-6 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-600 to-rose-600 ">
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-900 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
