import { useContext, useEffect, useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { CiLogin, CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { api } from "../utils";
import { UserCont } from "../App";

const Header = ({ searchbtn }) => {
  const { user, setUser } = useContext(UserCont);
  const [search, setSearch] = useState();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isHeaderFixed
    ? "bg-gray-100 text-gray-100 text-white shadow-md fixed top-0 left-0 w-full z-10"
    : "text-white shadow-md";

  return (
    <header className="">
      <div className="py-4 px-6 bg-blue-900 text-white flex items-center">
        <div className="text-yellow-500 text-2xl">
          <FaTruckMoving />
        </div>
        <p className="ml-2 text-sm font-semibold">Serve as Best as Possible</p>
      </div>
      <div className={headerClass}>
        <div className="py-4 px-6 border-b border-blue-900">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="logoku.png"
                alt="logo"
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-2xl font-bold text-gray-800 ml-1">
                DIN-<span className="text-blue-900">SHOP</span>
              </h1>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={search}
                placeholder="Search Your Product..."
                autoComplete="off"
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 px-6 border border-blue-600 mr-1 text-black"
              />
              <button
                onClick={() => searchbtn(search)}
                className="py-2 w-full px-4 bg-blue-500 text-white  hover:bg-blue-800"
              >
                Search
              </button>
            </div>
            <div className="flex items-center">
              {user ? (
                <div className="flex items-center mr-6">
                  <div className="text-2xl text-blue-900">
                    <AiOutlineUser />
                  </div>
                  <p className="text-sm font-semibold text-gray-600">
                    Hello, {user?.name}
                  </p>
                </div>
              ) : (
                <p className="text-black mr-2">.........</p>
              )}
              <div className="flex">
                <Link
                  to="/cart"
                  className="text-blue-500 mr-4 text-xl  hover:text-red-500"
                >
                  <BsBagCheck />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 px-7 shadow-md">
          <div className="flex justify-between items-center">
            <div className="">
              <ul className="flex">
                <li className="mr-8 bg-gray-300 w-16 h-7 text-center rounded-md">
                  <Link
                    to="/"
                    className="text-blue-900 hover:text-red-500 hover:text-md"
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-8">
                  <Link
                    to="/product"
                    className="text-blue-900 hover:text-red-500 hover:text-md"
                  >
                    Product
                  </Link>
                </li>
                <li className="mr-8">
                  <Link
                    to="/about"
                    className="text-blue-900 hover:text-red-500 hover:text-md"
                  >
                    About
                  </Link>
                </li>
                <li className="mr-4">
                  <Link
                    to="/contact"
                    className="text-blue-900 hover:text-red-500 hover:text-md"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-2xl">
              {user ? (
                <button
                  onClick={async () => {
                    const response = await api.post("/auth/logout");
                    if (response.ok) {
                      setUser();
                    }
                  }}
                  className="text-blue-900 text-2xl  hover:text-red-500"
                >
                  <CiLogout />
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="text-blue-900 text-3xl  hover:text-red-500">
                    <CiLogin />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
