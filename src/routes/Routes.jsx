import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/addCoffee/AddCoffee";
import CoffeeDetails from "../components/coffeeDetails/CoffeeDetails";
import UpdateCoffee from "../components/updateCoffee/UpdateCoffee";

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
      {
        path: "/coffeeDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
    ],
  },
]);
