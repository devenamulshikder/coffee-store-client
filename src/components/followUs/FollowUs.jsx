import img1 from "../../assets/images/cups/Rectangle 9.png";
import img2 from "../../assets/images/cups/Rectangle 10.png";
import img3 from "../../assets/images/cups/Rectangle 11.png";
import img4 from "../../assets/images/cups/Rectangle 12.png";
import img5 from "../../assets/images/cups/Rectangle 13.png";
import img6 from "../../assets/images/cups/Rectangle 14.png";
import img7 from "../../assets/images/cups/Rectangle 15.png";
import img8 from "../../assets/images/cups/Rectangle 16.png";

const FollowUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <p className="text-secondary text-center raleway">Follow Us Now</p>
      <h3 className="text-3xl md:text-5xl rancho text-primary text-center my-2">
        Follow on Instagram
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5 md:my-10">
        {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, i) => (
          <div key={i} className="overflow-hidden group rounded-lg">
            <img
              src={img}
              alt={`Coffee image ${i + 1}`}
              className="transition-transform duration-500 ease-in-out group-hover:scale-105 hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
