import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import ProjectDetils from "../Pages/Projects/ProjectDetils";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/project-details/:id",
        element: <ProjectDetils />,
        loader: ({ params }) =>
          fetch(`https://portfoliyo-server.vercel.app/projects/${params.id}`),
      },
    ],
  },
]);
