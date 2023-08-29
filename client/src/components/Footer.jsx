import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub, BsTelegram, BsYoutube } from "react-icons/bs";

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
      </div>
    </div>
  );
};

export default Footer;
