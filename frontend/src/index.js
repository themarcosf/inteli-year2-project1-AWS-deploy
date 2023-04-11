import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import { Profile } from "./pages/profile";
import { Projects } from "./pages/projects";
import { FAQ } from "./pages/faq";
import { MyProjects } from "./pages/myProjects";
import { Login } from "./pages/login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/global.scss";
import ContextsProviders from "./components/ContextsProviders/ContextsProviders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/myProjects",
    element: <MyProjects />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextsProviders>
      <RouterProvider router={router} />
    </ContextsProviders>
  </React.StrictMode>
);
