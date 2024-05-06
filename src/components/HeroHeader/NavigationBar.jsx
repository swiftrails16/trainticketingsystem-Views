import { IMAGES } from "@/assets/imgs/Images";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 p-5 pl-10 pr-10 flex flex-row justify-between z-10 text-white bg-transparent">
        <div className="p-4">
          <div className="font-extrabold tracking-widest text-2xl">
            <Link to="/">
              <span style={{ color: "#1f255a" }}>swiftrails</span>
            </Link>
          </div>
        </div>

        <div className="p-4 hidden md:flex flex-row justify-center font-bold">
          <Link to="/" className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            About Us
          </Link>
          <Link to="/how-it-works" className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            How it works
          </Link>
          <Link to="/services" className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            Services
          </Link>
          <Link to="/contact" className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
            Contact
          </Link>
        </div>

        <div className="p-4 md:hidden"></div>
      </nav>

      <div className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10">
        <div className="p-2 divide-y divide-gray-600 flex flex-col">
          <Link to="/" className="p-2 font-semibold hover:text-indigo-700">Home</Link>
          <Link to="/about" className="p-2 font-semibold hover:text-indigo-700">About Us</Link>
          <Link to="/how-it-works" className="p-2 font-semibold hover:text-indigo-700">How it works</Link>
          <Link to="/services" className="p-2 font-semibold hover:text-indigo-700">Services</Link>
          <Link to="/contact" className="p-2 font-semibold hover:text-indigo-700">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
