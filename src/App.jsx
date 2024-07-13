import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./assets/components/home.component/home.Component";
import Navbar from "./assets/components/navbar.Component/navbar.Component";
import HeadText from "./assets/components/home.component/headText.Home.Component/headText.Home.Component";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <Navbar /> */}
      {/* <HeadText /> */}
    </>
  );
}
