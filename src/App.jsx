import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./assets/components/home.component/home.Component";
import Navbar from "./assets/components/navbar.Component/navbar.Component";
import About from "./assets/components/about.Component/about.component";
import Stack from "./assets/components/stack.Component/stack.Component";
import Work from "./assets/components/work.Component/work.Component";
import Contact from "./assets/components/contact.Component/contact.Component";

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
        {
          path: "about",
          element: <About />,
        },
        {
          path: "stack",
          element: <Stack />,
        },
        {
          path: "work",
          element: <Work />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
