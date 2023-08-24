// import { useEffect } from "react";
// import { useState } from "react";
// import {
//   Link,
//   Navigate,
//   useNavigate,
//   useOutletContext,
// } from "react-router-dom";
// import { api } from "../utils";

// import { useContext } from "react";
// import { ProductContext } from "../contexts/ProductContext";
// import Product from "../components/Product";

//export default function Home() {
//const navigate = useNavigate();

//   const [planets, setPlanets] = useState([]);
//   const [newPlanet, setNewPlanet] = useState({});

//   const user = useOutletContext()[0];
//   console.log(user);
//   useEffect(() => {
//     api("/products").then((planets) => setPlanets(planets));
//   }, [user, navigate]);

//   if (user) {
//     return (
//       <div>
//         {planets.map((planet) => (
//           <div key={planet.id}>
//             <h3>
//               {planet.id} {planet.name}
//             </h3>
//             <p>{planet.diameter}</p>
//             <Link to={`/products/${planet.id}`}>
//               <button>Detail</button>
//             </Link>
//             <Link to={`/products/${planet.id}/edit`}>
//               <button>Edit</button>
//             </Link>
//             <button
//               onClick={async () => {
//                 if (
//                   confirm(`Apakah Anda yakin ingin menghapus ${planet.name}?`)
//                 ) {
//                   const message = await api(`/products/${planet.id}`, "DELETE");
//                   const planets = await api("/products");
//                   setPlanets(planets);
//                   alert(message);
//                 }
//               }}
//             >
//               Hapus
//             </button>
//           </div>
//         ))}
//         <form
//           onSubmit={async (e) => {
//             e.preventDefault();
//             setNewPlanet({});
//             const message = await api("/products", "POST", newPlanet);
//             const planets = await api("/products");
//             setPlanets(planets);
//             alert(message);
//           }}
//         >
//           <h1>Tambah Planet</h1>
//           <label>
//             Nama:
//             <input
//               type="text"
//               value={newPlanet.name ?? ""}
//               onChange={(e) =>
//                 setNewPlanet({ ...newPlanet, name: e.target.value })
//               }
//               required
//             />
//           </label>
//           <label>
//             Diameter:
//             <input
//               type="number"
//               value={newPlanet.diameter ?? ""}
//               onChange={(e) =>
//                 setNewPlanet({
//                   ...newPlanet,
//                   diameter: parseFloat(e.target.value),
//                 })
//               }
//               required
//             />
//           </label>
//           <label>
//             Deskripsi:
//             <textarea
//               value={newPlanet.description ?? ""}
//               onChange={(e) =>
//                 setNewPlanet({
//                   ...newPlanet,
//                   description: e.target.value,
//                 })
//               }
//               required
//             />
//           </label>
//           <button>Simpan</button>
//         </form>
//       </div>
//     );
//   } else {
//     return <Navigate to="/login" />;
//   }

//get products from products context
//const { products } = useContext(ProductContext);

//get only men's & women's clothing category
// const filteredProducts = products.filter((item) => {
//   return (
//     item.category === "men's clothing" || item.category === "women's clothing"
//   );
// });
//console.log(filteredProducts);
// return (
//   <div>
//     <section className="py-16">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
//           {filteredProducts.map((product) => {
//             return <Product key={product} product={product} />;
//           })}
//         </div>
//       </div>
//     </section>
//   </div>
// );
//}

// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, Navigate, useOutletContext } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Homeproduct from "../components/HomeProduct";
import { CartCont } from "../App";

const category = [
  {
    id: 1,
    img: "Mobile Phone.png",
    totalProduct: "23 products",
  },
  {
    id: 2,
    img: "smart watch.png",
    totalProduct: "18 products",
  },
  {
    id: 3,
    img: "headphone.png",
    totalProduct: "52 products",
  },
  {
    id: 4,
    img: "cpu heat.jpg",
    totalProduct: "63 products",
  },
];

const Home = () => {
  // const [cart, setCart] = useState([]);
  const { cart, setCart } = useContext(CartCont);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [user] = useOutletContext();

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  // add to cart
  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      alert("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("product is added to cart");
    }
  };
  console.log(cart);
  if (user) {
    return (
      <>
        {close ? (
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-25">
            <div className="sm:p-6 max-w-screen-md md:p-8 bg-white rounded-lg shadow-md">
              <button
                onClick={() => setClose(false)}
                className="absolute text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <AiOutlineCloseCircle />
              </button>
              {detail.map((curElm) => {
                return (
                  <div
                    className="flex p-4 items-center border border-gray-200 rounded-md"
                    key={curElm}
                  >
                    <div className="mr-2 w-1/4">
                      <img
                        src={curElm.Img}
                        alt={curElm.Title}
                        className="md:w-32 md:h-auto w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-light text-gray-500 tracking-wide uppercase">
                        {curElm.Cat}
                      </h4>
                      <h2 className="mt-2 text-xl text-blue-900 capitalize">
                        {curElm.Title}
                      </h2>
                      <p className="text-gray-700 mt-2">
                        A Screen Everyone Will Love: Whether your family is
                        streaming or video chatting with friends tablet A8...{" "}
                      </p>
                      <h3 className="text-3xl text-blue-900 mt-2">
                        {curElm.Price}
                      </h3>
                      <button
                        className="mt-4 px-4 py-2 text-white bg-blue-800 text-lg rounded-md transition duration-500 hover:bg-blue-500"
                        onClick={() => addtocart(curElm)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                );
              })}
              {/* <div className="productbox"></div> */}
            </div>
          </div>
        ) : null}
        <div className="bg-blue-100 py-8">
          <div className="mx-auto flex justify-between items-center">
            <div className="ml-8 mt-8">
              <h2 className="text-6xl font-semibold text-blue-800 mr-64 mb-10">
                The Best Note Book Colletion 2023
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
              <img src="slider-img.png" alt="sliderimg" />
            </div>
          </div>
        </div>
        <div className="py-7 px-10">
          <div className="container mx-auto grid gap-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {category.map((item) => {
              return (
                <div key={item.id}>
                  <div className="px-4">
                    <div className="h-32 w-32 bg-gray-200 rounded-full flex items-center justify-center">
                      <img
                        src={item.img}
                        alt="mobile"
                        className="h-16 w-16 max-h-[160px] hover:scale-110 transition duration-300 cursor-pointer"
                      />
                    </div>
                    <div className="mt-2 ml-7">
                      <p className="text-gray-600">{item.totalProduct}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-10 px-12">
          <div className="container mx-auto grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="px-4">
              <div className="text-pink-500 text-4xl">
                <FiTruck />
              </div>
              <div className="ml-4">
                <h3 className="text-xl text-blue-800 font-semibold">
                  Free Shipping
                </h3>
                <p className="text-gray-600">Oder above $1000</p>
              </div>
            </div>
            <div className="px-4">
              <div className="text-pink-500 text-4xl">
                <BsCurrencyDollar />
              </div>
              <div className="ml-4">
                <h3 className="text-xl text-blue-800 font-semibold">
                  Return & Refund
                </h3>
                <p className="text-gray-600">Money Back Gaurenty</p>
              </div>
            </div>
            <div className="px-4">
              <div className="text-pink-500 text-4xl">
                <CiPercent />
              </div>
              <div className="ml-4">
                <h3 className="text-xl text-blue-800 font-semibold">
                  Member Discount
                </h3>
                <p className="text-gray-600">On every Oder</p>
              </div>
            </div>
            <div className="px-4">
              <div className="text-pink-500 text-4xl">
                <BiHeadphone />
              </div>
              <div className="ml-4">
                <h3 className="text-xl text-blue-800 font-semibold">
                  Customer Support
                </h3>
                <p className="text-gray-600">Every Time Call Support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 px-6">
          <h2 className="text-2xl text-blue-800 mb-6">Top Products</h2>
          <div className="mx-auto grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Homeproduct.map((curElm) => {
              return (
                <div
                  className="p-4 border border-gray-300 rounded-md mb-4"
                  key={curElm.id}
                >
                  <div className="relative">
                    <img
                      src={curElm.Img}
                      alt={curElm.Title}
                      className="w-full h-40 object-cover hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-6 -right-11 hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 gap-y-2 hover:opacity-100 transition-all">
                      <li
                        onClick={() => addtocart(curElm)}
                        className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white"
                      >
                        <AiOutlineShoppingCart className="text-xl" />
                      </li>
                      <li
                        onClick={() => view(curElm)}
                        className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white"
                      >
                        <BsEye className="text-xl" />
                      </li>
                      <li className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white">
                        <AiOutlineHeart className="text-xl" />
                      </li>
                    </div>
                  </div>
                  <div className="detail mt-2">
                    <p className="text-gray-600">{curElm.Cat}</p>
                    <h3 className="text-lg text-blue-800">{curElm.Title}</h3>
                    <h4 className="mt-2 text-blue-600 font-semibold">
                      ${curElm.Price}
                    </h4>
                  </div>
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
              <p className="text-blue-100 text-xl font-semibold mt-4">$ 986</p>
              <Link
                to="/product"
                className="px-5 py-2 mt-4 text-blue-800 bg-gray-400 rounded-md transition duration-500 hover:bg-white hover:text-black flex items-center w-36"
              >
                <span className="mr-2">Shop Now </span>
                <BsArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="img_box">
              <img
                src="slider-img.png"
                alt="sliderimg"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default Home;
