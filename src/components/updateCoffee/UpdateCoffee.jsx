import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, supplier, taste, category, details, photo } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    fetch(`https://coffee-store-server-rose-five.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee are Updated Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-[url('https://i.postimg.cc/5tv1Xnj4/11.png')]">
      <div className="max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="rancho text-2xl flex items-center gap-2 pt-5 md:pt-12"
        >
          <IoIosArrowRoundBack />
          Back To Home
        </Link>

        <div className="bg-[#F4F3F0] p-5 md:p-16 my-8 md:mb-20 rounded-lg">
          <h3 className="text-primary text-center rancho text-3xl md:text-4xl my-2 md:mb-14">
            Update Existing Coffee Details
          </h3>

          {/* form div */}
          <form onSubmit={handleUpdateCoffee}>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-slate-900 font-medium block raleway">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  required
                  placeholder="Enter coffee name"
                  className="px-4 py-3 bg-[#fff] raleway focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
                />
              </div>
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-slate-900 font-medium block raleway">
                  Chef
                </label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  required
                  placeholder="Enter coffee chef"
                  className="px-4 py-3 bg-[#fff] raleway focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10 my-2 md:my-5">
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-slate-900 font-medium block raleway">
                  Supplier
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  name="supplier"
                  defaultValue={supplier}
                  className="px-4 py-3 bg-[#fff] raleway focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
                />
              </div>
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-slate-900 font-medium block raleway">
                  Taste
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee taste"
                  name="taste"
                  defaultValue={taste}
                  className="px-4 py-3 bg-[#fff] raleway focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-slate-900 font-medium block raleway">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee category"
                  name="category"
                  defaultValue={category}
                  className="px-4 py-3 bg-[#fff] raleway focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
                />
              </div>
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-slate-900 font-medium block raleway">
                  Details
                </label>
                <input
                  type="text"
                  placeholder="Enter coffee details"
                  name="details"
                  defaultValue={details}
                  className="px-4 py-3 bg-[#fff] raleway focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
                />
              </div>
            </div>
            <div className="w-full my-2 md:my-5">
              <label className="mb-2 ml-1 text-sm text-slate-900 font-medium block raleway">
                Photo
              </label>
              <input
                type="text"
                placeholder="Enter coffee category"
                name="photo"
                defaultValue={photo}
                className="px-4 py-3 bg-[#fff] raleway focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn w-full rancho border-2 mt-2 border-primary text-primary text-2xl bg-[#D2B48C]"
              >
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
