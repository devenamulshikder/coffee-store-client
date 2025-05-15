import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Coffee = ({ coffee }) => {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between gap-2 bg-[#f5f4f1bb]  md:p-8 rounded-xl ">
        <div>
          <img src={coffee.photo} alt="" />
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
          <button className="btn bg-[#D2B48C] text-white border-none">
            <FaEye size={20} />
          </button>
          <button className="btn bg-[#3C393B] text-white border-none">
            <FaRegEdit size={20} />
          </button>
          <button className="btn bg-[#EA4744] text-white border-none">
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
