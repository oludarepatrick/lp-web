import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LeverpayLandingpage from "pages/LeverpayLandingpage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "leverpaylandingpage",
      element: <LeverpayLandingpage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
