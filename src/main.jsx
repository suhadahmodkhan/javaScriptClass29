import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Donation from "./Components/Donation/Donation";
import Statictics from "./Components/Statictics/Statictics";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/donation",
        element:<Donation/>
      },
      {
        path:"/statictics",
        element:<Statictics/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);