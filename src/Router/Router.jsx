import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProjectDetils from "../Pages/Projects/ProjectDetils";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/project-details/:id",
        element: <ProjectDetils />,
        loader: ({ params }) =>
          fetch(`https://portfoliyo-server.vercel.app/projects/${params.id}`),
      },
    ],
  },
]);
