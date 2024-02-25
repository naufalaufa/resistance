import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  April,
  Desember,
  February,
  January,
  LandingHome,
  Maret,
  Mei,
} from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      name: "landinghome",
      element: <LandingHome />,
    },
    {
      path: "/desember",
      name: "desember",
      element: <Desember />,
    },
    {
      path: "/january",
      name: "january",
      element: <January />,
    },
    {
      path: "/february",
      name: "february",
      element: <February />,
    },
    {
      path: "/maret",
      name: "maret",
      element: <Maret />,
    },
    {
      path: "/april",
      name: "april",
      element: <April />,
    },
    {
      path: "/mei",
      name: "mei",
      element: <Mei />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
