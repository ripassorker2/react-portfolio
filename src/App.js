import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// ..

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
