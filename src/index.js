import React from "react";
import ReactDOM from "react-dom";
import { Dapp } from "./components/Dapp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// We import bootstrap here, but you can remove if you want
import "bootstrap/dist/css/bootstrap.css";

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dapp />,
  },

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);