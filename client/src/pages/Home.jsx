import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import HomeProduct from "../components/HomeProduct.jsx";

const category = [
  {
    id: 1,
    categories: "Men is Clothing",
    img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    totalProduct: "23 products",
  },
  {
    id: 2,
    categories: "Jawerly",
    img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    totalProduct: "18 products",
  },
  {
    id: 3,
    categories: "Electronics",
    img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    totalProduct: "52 products",
  },
  {
    id: 4,
    categories: "Woman is Clothing",
    img: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    totalProduct: "63 products",
  },
];

const Home = () => {
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const user = useOutletContext()[0];

  console.log(user);

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  return (
    <main>
      {close ? (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-25">
          <div className="sm:p-6 max-w-screen-md md:p-8 bg-white rounded-lg shadow-md">
            <button
              onClick={() => setClose(false)}
              className="absolute text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <AiOutlineCloseCircle />
            </button>
            {detail.map((item) => {
              return (
                <div
                  className="flex p-4 items-center border border-gray-200 rounded-md"
                  key={item}
                >
                  <div className="mr-2 w-1/4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="md:w-32 md:h-auto w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-light text-gray-500 tracking-wide uppercase">
                      {item.categories}
                    </h4>
                    <h2 className="mt-2 text-xl text-blue-900 capitalize">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                    <h3 className="text-3xl text-blue-900 mt-2">
                      Rp {item.price}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="bg-blue-100 py-8">
        <div className="mx-auto flex justify-between items-center">
          <div className="ml-8 mt-8">
            <h2 className="text-6xl font-semibold text-blue-800 mr-64 mb-10">
              Spend Your Money Here,{" "}
              <span className="text-gray-600">We Will Be Happy</span>
            </h2>
            <Link
              to="/product"
              className="px-5 py-4 rounded-md text-blue-800 bg-white transition duration-500 hover:bg-blue-800 hover:text-white flex items-center w-36"
            >
              <span className="mr-2">Shop Now</span>{" "}
              <BsArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mr-8 max-w-full">
            <img src="shop-home.png" alt="sliderimg" />
          </div>
        </div>
      </div>
      <div className="py-7 px-10 mt-12">
        <div className="container mx-auto grid gap-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {category.map((item) => {
            return (
              <div key={item.id}>
                <div className="px-4">
                  <div className="w-36 h-36 bg-white rounded-md flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.categories}
                      className="h-32 w-32 py-4 px-4 max-h-[160px] hover:scale-110 transition duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="mt-2 ml-7">
                    <p className="text-blue-600 font-bold">{item.categories}</p>
                    <p className="text-gray-600">{item.totalProduct}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-8 px-12">
        <h2 className="text-2xl text-blue-800 mb-6">Top Products</h2>
        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
          {HomeProduct.map((item) => {
            return (
              <div
                className="p-6 border border-gray-300 rounded-md mb-4"
                key={item.id}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-1/2 h-64 hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="detail mt-2">
                  <p className="text-gray-600">{item.categories}</p>
                  <h3 className="text-lg text-blue-800">{item.title}</h3>
                  <h4 className="mt-2 text-blue-600 font-semibold">
                    Rp {item.price}
                  </h4>
                </div>
                <li
                  onClick={() => view(item)}
                  className="list-none text-gray-200 font-bold bg-blue-500 flex items-center justify-center w-full h-10 rounded-md mt-4 hover:bg-blue-700 cursor-pointer"
                >
                  Detail
                </li>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-5">
        <div className="container mx-auto p-10 bg-blue-800 rounded-lg flex justify-between">
          <div className="detail">
            <h4 className="text-blue-200 text-sm font-medium tracking-wide">
              LATEST TECHNOLOGY ADDED
            </h4>
            <h3 className="text-white text-2xl font-semibold mt-2">
              Apple iPad 10.2 9th Gen - 2021
            </h3>
            <p className="text-blue-100 text-xl font-semibold mt-4">
              Rp 9.860.000
            </p>
            <Link
              to="/product"
              className="px-5 py-2 mt-4 text-blue-800 bg-gray-400 rounded-md transition duration-500 hover:bg-white hover:text-black flex items-center w-36"
            >
              <span className="mr-2">Shop Now </span>
              <BsArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="img_box">
            <img src="slider-img.png" alt="sliderimg" className="max-w-full" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
