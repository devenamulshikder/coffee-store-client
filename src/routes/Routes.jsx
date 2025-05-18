import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/addCoffee/AddCoffee";
import CoffeeDetails from "../components/coffeeDetails/CoffeeDetails";
import UpdateCoffee from "../components/updateCoffee/UpdateCoffee";
import ErrorPage from "../pages/Error/ErrorPage";
import Signin from "../authentication/signin/Signin";
import Signup from "../authentication/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
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
          fetch(`https://coffee-store-server-rose-five.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-rose-five.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "/signIn",
        Component: Signin,
      },
      {
        path: "/signUp",
        Component: Signup,
      },
    ],
  },
]);
