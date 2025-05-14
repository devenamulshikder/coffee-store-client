import logo1 from '../../assets/images/more/logo1.png'
const Navbar = () => {
  return (
    <div
      className="p-2 md:p-3"
      style={{
        backgroundImage: "url(https://i.postimg.cc/SQHth7fy/15.jpg)",
      }}
    >
      <div className="flex justify-center items-center gap-3">
        <img width={65} src={logo1} alt="" />
        <h1 className="rancho text-[#FFFFFF] text-4xl md:text-5xl">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Navbar;
