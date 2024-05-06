import { IMAGES } from "@/assets/imgs/Images";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 p-5 pl-10 pr-10 flex flex-row justify-between z-10 text-white bg-transparent">
        <div className="p-4">
          <div className="font-extrabold tracking-widest text-2xl">
            <a>
              <span style={{ color: "#1f255a" ,fontFamily:"cursive", }}>swiftrails</span>
            </a>
          </div>
        </div>

        <div className="p-4 hidden md:flex flex-row justify-center font-bold">
        <Link to={"/"}>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
          <span style={{ color: "#1f255a" }}>Home</span>
          </a>
          </Link>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
          <span style={{ color: "#1f255a" }}>About Us</span>
          </a>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
          <span style={{ color: "#1f255a" }}>How it works</span>
          </a>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
          <span style={{ color: "#1f255a" }}>Services</span>
          </a>
          <Link to={"/Contactus"}>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
          <span style={{ color: "#1f255a" }}>Contact</span>
          </a>
          </Link>
          <Link to={"/Profile"}>
          <a className="mx-4 text-md border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer">
          <span style={{ color: "#1f255a" }}>Profile</span>
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

    </>
  );
};

export default Header1;
