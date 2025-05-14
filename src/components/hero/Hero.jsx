import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-bg p-5 md:p-[270px]">
      <div className="w-full md:w-[650px] max-w-7xl mx-auto md:ml-auto md:mr-0">
        <h1 className="text-[#fff] text-3xl md:text-5xl rancho">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="text-[#fff] raleway text-sm md:text-[16px] py-1 md:py-3">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-[#E3B577] rancho py-1 px-4 text-xl md:text-2xl">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
