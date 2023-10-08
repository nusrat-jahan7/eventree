import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import LoginRoute from "./LoginRoute";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service-details/:id",
        loader: () => fetch("/services.json"),
        element: (
          <PrivateRoute>
            {" "}
            <ServiceDetails />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: (
          <LoginRoute>
            <Login />
          </LoginRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <LoginRoute>
            <Register />
          </LoginRoute>
        ),
      },
    ],
  },
]);
