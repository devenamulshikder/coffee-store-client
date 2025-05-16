import { NavLink } from "react-router";
import logo1 from "../../assets/images/more/logo1.png";
const Navbar = () => {
  return (
    <div
      className="p-2 md:p-3"
      style={{
        backgroundImage: "url(https://i.postimg.cc/SQHth7fy/15.jpg)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-3">
        <img width={65} src={logo1} alt="" />
        <h1 className="rancho text-[#FFFFFF] text-4xl md:text-5xl">
          Espresso Emporium
        </h1>
        <NavLink
          to={"/signIn"}
          className={
            "bg-[#E3B577] text-primary px-4 rancho text-2xl rounded-full btn border-primary"
          }
        >
          Sign In
        </NavLink>
        <NavLink
          to={"/signUp"}
          className={
            "bg-[#E3B577] text-primary px-4 rancho text-2xl rounded-full btn border-primary"
          }
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
