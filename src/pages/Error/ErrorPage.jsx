import { Link } from "react-router";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { IoIosArrowRoundBack } from "react-icons/io";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Link
          to={"/"}
          className="rancho text-2xl md:text-3xl flex items-center gap-2 pt-5 md:pt-12"
        >
          <IoIosArrowRoundBack />
          Back To Home
        </Link>
        <img src="https://i.postimg.cc/02T6NPph/404.gif" alt="error gif" />
      </div>
      <Footer />
    </div>
  );
};
export default ErrorPage;