import { IMAGES } from "@/assets/imgs/Images";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 p-5 pl-10 pr-10 flex flex-row justify-between z-10 text-white bg-transparent">
        <div className="p-4">
          <div className="font-extrabold tracking-widest text-2xl">
            <a>
              <span style={{ color: "#1f255a" }}>swiftrails</span>
            </a>
          </div>
        </div>

        <div className="p-4 hidden md:flex flex-row justify-center font-bold">
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            Home
          </a>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            About Us
          </a>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            How it works
          </a>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            Services
          </a>
          <Link to={"/Contactus"}>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            Contact
          </a>
          </Link>
          <Link to={"/Profile"}>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            Profile
          </a>
          </Link>
        </div>

        <div className="p-4 md:hidden"></div>
      </nav>

      <div className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10">
        <div className="p-2 divide-y divide-gray-600 flex flex-col">
          <a className="p-2 font-semibold hover:text-indigo-700">Home</a>
          <a className="p-2 font-semibold hover:text-indigo-700">About Us</a>
          <a className="p-2 font-semibold hover:text-indigo-700">
            How it works
          </a>
          <a className="p-2 font-semibold hover:text-indigo-700">Services</a>
          <a className="p-2 font-semibold hover:text-indigo-700">Contact</a>
        </div>
      </div>

      <header
        className="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
        style={{ backgroundImage: `url(${IMAGES.heroImage})` }}
      >
        <div
          className="h-screen bg-opacity-50 bg-black flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.25)" }}
        >
          <div className="mx-2 text-center">
            <h1 className="text-gray-100 font-bold text-4xl xs:text-5xl md:text-5xl">
              Welcome Aboard: SwiftRails
            </h1>
            <h2 className="text-gray-200 font-bold text-3xl xs:text-4xl md:text-5xl mt-5">
              Your Ultimate Journey Companion
            </h2>
            <div className="inline-flex mt-8">
              <Link to={"/login"}>
                <button className="p-2 py-3 px-8 my-5 mx-2 bg-[#5a3970] hover:bg-[#482e5a] font-bold text-white rounded-md border-2 border-transparent hover:border-[#7e529e] shadow-md transition duration-500 md:text-xl">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroHeader;
