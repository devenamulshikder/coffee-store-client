import quality1 from "../../assets/images/icons/1.png";
import quality2 from "../../assets/images/icons/2.png";
import quality3 from "../../assets/images/icons/3.png";
import quality4 from "../../assets/images/icons/4.png";
const Quality = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 p-5 md:p-10">
        {/* quality1 */}
        <div>
          <img src={quality1} alt="" />
          <h3 className="text-primary rancho text-3xl  md:text-4xl my-2">
            Awesome Aroma
          </h3>
          <p className="text-secondary text-sm md:text-[16px]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        {/* quality2 */}
        <div>
          <img src={quality2} alt="" />
          <h3 className="text-primary rancho text-3xl md:text-4xl my-2">
            High Quality
          </h3>
          <p className="text-secondary text-sm md:text-[16px]">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        {/* quality3 */}
        <div>
          <img src={quality3} alt="" />
          <h3 className="text-primary rancho text-3xl md:text-4xl my-2">
            Pure Grades
          </h3>
          <p className="text-secondary text-sm md:text-[16px]">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        {/* quality4 */}
        <div>
          <img src={quality4} alt="" />
          <h3 className="text-primary rancho text-3xl md:text-4xl my-2">
            Proper Roasting
          </h3>
          <p className="text-secondary text-sm md:text-[16px]">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};
export default Quality;
