import { AiOutlineInstagram } from "react-icons/ai";
import {
  BsGithub,
  BsTelegram,
  BsYoutube,
  // BsHouseDoorFill,
  // BsCartFill,
  // BsInfoCircleFill,
  // BsEnvelopeFill,
} from "react-icons/bs";
//import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-100">
      <div className="mx-auto py-8 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3">
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <img
              src="logoku.png"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold text-gray-800 ml-2">
              DIN-<span className="text-blue-900">SHOP</span>
            </h1>
          </div>
          <p className="text-sm text-gray-700 mt-2">
            This application is still in the development stage, there is still a
            lot that needs to be fixed.
          </p>
          <div className="icon mt-4 flex">
            <a
              href="https://github.com/Sawaluddin-JR"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <BsGithub className="text-gray-600 hover:text-blue-500 transition text-xl" />
            </a>
            <a
              href="https://www.instagram.com/sawaluddinsiregar_28/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <AiOutlineInstagram className="text-gray-600 hover:text-blue-500 transition text-xl" />
            </a>
            <a
              href="https://web.telegram.org/a/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <BsTelegram className="text-gray-600 hover:text-blue-500 transition text-xl" />
            </a>
            <a
              href="https://www.youtube.com/@Sawalnet"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <BsYoutube className="text-gray-600 hover:text-blue-500 transition text-xl" />
            </a>
          </div>
        </div>
        {/* <div className="mt-6 md:mt-0 text-gray-300 md:mr-20">
          <h3 className="text-2xl text-gray-800 mb-2">Page</h3>
          <ul className="flex flex-col">
            <li className="text-gray-900 hover:underline mb-2">
              <Link to="/cart" className="flex items-center">
                <BsCartFill className="text-gray-600 hover:text-blue-500 transition text-lg mr-2" />
                <span>Cart</span>
              </Link>
            </li>
            <li className="text-gray-900 hover:underline mb-2">
              <Link to="/" className="flex items-center">
                <BsHouseDoorFill className="text-gray-600 hover:text-blue-500 transition text-lg mr-2" />
                <span>Home</span>
              </Link>
            </li>
            <li className="text-gray-900 hover:underline mb-2">
              <Link to="/about" className="flex items-center">
                <BsInfoCircleFill className="text-gray-600 hover:text-blue-500 transition text-lg mr-2" />
                <span>About</span>
              </Link>
            </li>
            <li className="text-gray-900 hover:underline mb-2">
              <Link to="/contact" className="flex items-center">
                <BsEnvelopeFill className="text-gray-600 hover:text-blue-500 transition text-lg mr-2" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
