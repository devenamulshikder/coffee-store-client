import { use, useState } from "react";
import coffees1Bg from "../../assets/images/more/4.png";
import coffees2Bg from "../../assets/images/more/5.png";
import { LuCoffee } from "react-icons/lu";
import { Link } from "react-router";
import Coffee from "../coffee/Coffee";
const coffeesPromise = fetch("https://coffee-store-server-rose-five.vercel.app/coffees").then((res) =>
  res.json()
);
const Coffees = () => {
  const initialCoffees = use(coffeesPromise);
  const [coffeeData, setCoffeeData] = useState(initialCoffees);
  return (
    <div className=" my-10 md:my-20 text-center">
      <img className="md:absolute hidden md:flex" src={coffees1Bg} alt="" />
      <p className="text-secondary text-center raleway">--- Sip & Savor ---</p>
      <h3 className="text-3xl md:text-5xl rancho text-primary text-center my-2">
        Our Popular Products
      </h3>
      <Link
        to={"/addCoffee"}
        className="text-[#fff] text-2xl font-normal bg-[#E3B577] border-2 border-[#331A15] rancho btn mt-3"
      >
        Add Coffee
        <LuCoffee className="text-primary " />
      </Link>

      <div className="flex justify-end">
        <img width={400} className="absolute" src={coffees2Bg} alt="" />
      </div>
      <div className="max-w-7xl mx-auto my-8 md:my-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {coffeeData.map((coffee, idx) => (
            <Coffee
              coffee={coffee}
              coffeeData={coffeeData}
              setCoffeeData={setCoffeeData}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coffees;
