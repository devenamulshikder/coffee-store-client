import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
const Coffee = ({ coffee }) => {
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${coffee._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="p-2">
      <div className="flex items-center group justify-between gap-2 bg-[#f5f4f1bb]  md:p-8 rounded-xl ">
        <div>
          <img className="group-hover:scale-110 duration-300 overflow-hidden" src={coffee.photo} alt="" />
        </div>
        <div className="flex flex-col text-start">
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
        </div>
        <div className="flex flex-col items-center gap-2">
          <Link to={`/coffeeDetails/${coffee._id}`}>
            <button
              className="btn bg-[#D2B48C] text-white border-none"
            >
              <FaEye size={20} />
            </button>
          </Link>
          <button className="btn bg-[#3C393B] text-white border-none">
            <FaRegEdit size={20} />
          </button>
          <button
            onClick={() => handleDelete(coffee._id)}
            className="btn bg-[#EA4744] text-white border-none"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Coffee;
