import coffees1Bg from '../../assets/images/more/4.png';
import coffees2Bg from '../../assets/images/more/5.png';
import { LuCoffee } from "react-icons/lu";
import { Link } from "react-router";
const Coffees = () => {
    return (
      <div className=" my-10 md:my-20 text-center">
        <img className="md:absolute hidden md:flex" src={coffees1Bg} alt="" />
        <p className="text-secondary text-center raleway">
          --- Sip & Savor ---
        </p>
        <h3 className="text-3xl md:text-5xl rancho text-primary text-center my-2">
          Our Popular Products
        </h3>
        <Link className="text-[#fff] text-2xl font-normal bg-[#E3B577] border-2 border-[#331A15] rancho btn mt-3">
          Add Coffee
          <LuCoffee className="text-primary " />
        </Link>
        <div className='flex justify-end'>
          <img width={400} className="absolute" src={coffees2Bg} alt="" />
        </div>
      </div>
    );
};

export default Coffees;