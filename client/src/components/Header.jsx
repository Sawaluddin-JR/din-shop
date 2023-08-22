import { useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// eslint-disable-next-line react/prop-types
const Header = ({ searchbtn }) => {
  const [search, setSearch] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="py-4 px-6 bg-blue-900 text-white flex items-center">
        <div className="text-yellow-500 text-2xl">
          <FaTruckMoving />
        </div>
        <p className="ml-2 text-sm font-semibold">
          FREE Shipping when shopping up to $1000
        </p>
      </div>
      <div className="py-6 px-8 border-b border-blue-900">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center">
            <img src="logo.jpg" alt="logo" className="w-14 h-14 rounded-full" />
            <h1 className="text-2xl font-bold text-gray-800">
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
              className="py-2 px-4 border border-blue-500 mr-4"
            />
            <button
              onClick={() => searchbtn(search)}
              className="py-2 px-4 bg-blue-500 text-white"
            >
              Search
            </button>
          </div>
          <div className="flex items-center">
            {isAuthenticated && (
              <div className="flex items-center mr-6">
                <div className="text-2xl text-blue-900">
                  <AiOutlineUser />
                </div>
                <p className="text-sm font-semibold">Hello, {user.name}</p>
              </div>
            )}
            <div className="flex">
              <Link to="/" className="text-blue-500 mr-4">
                <AiOutlineHeart />
              </Link>
              <Link to="/cart" className="text-blue-500">
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
              <li className="mr-4">
                <Link to="/" className="text-blue-900">
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/product" className="text-blue-900">
                  Product
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/about" className="text-blue-900">
                  About
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/contact" className="text-blue-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-2xl">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="text-blue-900"
              >
                <CiLogout />
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="text-blue-900"
              >
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
