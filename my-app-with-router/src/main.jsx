import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";


const getSomeData = (id) => {
  const allData = {
    42: {
      title: "Angélina",
      content: "La best des mamans du groupe",
    },
    123: {
      title: "Nicolas",
      content: "Le BG de Reims",
    },
    666: {
      title: "Sébastien",
      content: "Le papa poule",
    },
  };

  return allData[id];
};


// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          const weather = "pluie";
    
          return weather;
        },
        id: "app",
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ params }) => {
          return getSomeData(params.id);
        },
      },
    ],
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);