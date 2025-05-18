import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddToCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    // safe coffee data to the db
    fetch("https://coffee-store-server-rose-five.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "New Coffee Added Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
        }
        e.target.reset()
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
          <h3 className="text-primary text-center rancho text-3xl  md:text-4xl my-2">
            Add New Coffee
          </h3>
          <p className="text-secondary text-center w-full md:w-[795px] mx-auto my-5">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          {/* form div */}
          <form onSubmit={handleAddToCoffee}>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-slate-900 font-medium block raleway">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
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
                className="px-4 py-3 bg-[#fff] raleway focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all"
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn w-full rancho border-2 mt-2 border-primary text-primary text-2xl bg-[#D2B48C]"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddCoffee;
