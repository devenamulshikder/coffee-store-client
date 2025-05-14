import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/sX8XKDG4/13.jpg')]">
      <div className="max-w-7xl mx-auto p-4 md:pt-20 flex flex-col md:flex-row justify-between">
        <div>
          <img
            width={60}
            src="https://i.postimg.cc/8PTs15gs/logo1.png"
            alt=""
          />
          <h1 className="text-primary text-3xl md:text-4xl rancho my-3 md:my-5">
            Espresso Emporium
          </h1>
          <p className="text-secondary raleway md:w-[550px]">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="text-primary text-2xl md:text-3xl flex gap-3 my-3 md:my-5">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <h1 className="text-primary text-3xl md:text-4xl rancho my-3 md:my-5">
            Get in Touch
          </h1>
          <div className="text-primary raleway">
            <p className="flex items-center gap-3 ">
              <FaPhoneAlt /> +88 01533 333 333
            </p>
            <p className="flex items-center gap-3 my-2">
              <MdEmail /> info@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaLocationDot /> 72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-primary text-3xl md:text-4xl rancho my-2 mt-10 md:mt-24">
            Connect with Us
          </h1>
          <form>
            <input
              className=" w-full px-3 py-1 bg-[#FFFFFF] raleway"
              type="text"
              placeholder="Name"
            />
            <br /> <br />
            <input
              className=" w-full px-3 py-1 bg-[#FFFFFF] raleway"
              placeholder="Email"
              type="email"
            />
            <br />
            <br />
            <textarea
              className=" w-full px-3 py-1 bg-[#FFFFFF] raleway"
              rows={4}
              cols={60}
              name=""
              id=""
              placeholder="Message"
            ></textarea>
            <br />
            <button className="text-primary rancho btn font-normal text-2xl rounded-full border border-primary mt-5">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[url('https://i.postimg.cc/wMRKzDxn/28.jpg')] text-center mt-5 rancho text-[#fff] font-normal p-2">
        <p>Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
