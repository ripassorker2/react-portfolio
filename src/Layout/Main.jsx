import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
   return (
      <>
         <div className="w-[100%] fixed top-0 z-50 ">
            <Navbar />
         </div>
         <div className="max-w-[1440px] mx-auto overflow-hidden font-serif">
            <Outlet />
         </div>

         <Footer />
      </>
   );
};

export default Main;
