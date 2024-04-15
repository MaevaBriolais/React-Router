import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";

const getWeatherOfTheDay = () => {
  return "sunny";
};

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      const weather = "sunny";

      return weather;
    },
    id: "app",

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
    ],
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);