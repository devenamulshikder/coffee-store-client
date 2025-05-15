import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/addCoffee/AddCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
    ],
  },
]);
