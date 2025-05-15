import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
const CoffeeDetails = () => {
  const coffee = useLoaderData();
  return (
    <div className="bg-[url('https://i.postimg.cc/5tv1Xnj4/11.png')]">
      <div className="max-w-7xl mx-auto p-2">
        <Link
          to={"/"}
          className="rancho text-2xl flex items-center gap-2 pt-5 md:py-12"
        >
          <IoIosArrowRoundBack />
          Back To Home
        </Link>
        <div className="flex flex-col md:flex-row group  justify-evenly gap-2 bg-[#f5f4f1bb]  md:p-6 rounded-xl pb-3 md:mb-24 max-w-4xl mx-auto p-3">
          <div>
            <img
              className=" w-full md:w-64 group-hover:scale-110 duration-300"
              src={coffee.photo}
              alt=""
            />
          </div>
          <div className="flex flex-col text-start space-y-1">
            <h1 className="text-primary rancho text-2xl md:text-3xl mt-3 md:mt-10">
              Niceties..
            </h1>
            <p className="raleway">
              <span className="text-primary font-semibold">Name:</span>{" "}
              {coffee.name}
            </p>
            <p className="raleway">
              <span className="text-primary font-semibold">Chef:</span>{" "}
              {coffee.chef}
            </p>
            <p className="raleway">
              <span className="text-primary font-semibold">Taste:</span>{" "}
              {coffee.taste}
            </p>
            <p className="raleway">
              <span className="text-primary font-semibold">Supplier:</span>{" "}
              {coffee.supplier}
            </p>
            <p className="raleway">
              <span className="text-primary font-semibold">Category:</span>{" "}
              {coffee.category}
            </p>
            <p className="raleway">
              <span className="text-primary font-semibold">Details:</span>{" "}
              {coffee.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
