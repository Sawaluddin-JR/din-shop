// import { Link } from "@mui/material";
// import { BsEyeFill, BsPlus } from "react-icons/bs";

// const Product = ({ product }) => {
//   const { id, image, category, title, price } = product;

//   return (
//     <div>
//       <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
//         <div className="w-full h-full flex justify-center items-center">
//           <div className="w-[200px] mx-auto justify-center items-center">
//             <img
//               src={image}
//               alt={title}
//               className="max-h-[160px] group-hover:scale-110 transition duration-300"
//             />
//           </div>
//         </div>
//         <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
//           <button>
//             <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
//               <BsPlus className="text-3xl" />
//             </div>
//           </button>
//           <Link
//             to={`/products/${id}`}
//             className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
//           >
//             <BsEyeFill />
//           </Link>
//         </div>
//       </div>
//       <div>2</div>
//     </div>
//   );
// };

// export default Product;

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
// import { useAuth0 } from "@auth0/auth0-react";
import ProductDetail from "../components/ProductDetails";
import { useContext, useState } from "react";
import { CartCont } from "../App";

const Product = () => {
  // {product, setProduct, detail, view, close, setClose, addToCart}
  // const { loginWithRedirect, isAuthenticated } = useAuth0();
  // const { cart, setCart } = useContext(CartCont);
  // add to cart
  // const [cart, setCart] = useState([]);
  const { cart, setCart } = useContext(CartCont);
  //product Detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //filter product
  const [product, setProduct] = useState(ProductDetail);

  const filterproduct = (product) => {
    const update = ProductDetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(ProductDetail);
  };

  //product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  // add to cart
  const addToCart = (product) => {
    const item = cart.find((x) => {
      return x.id === product.id;
    });
    if (item) {
      alert("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("product is added to cart");
    }
  };
  //   if (cart.find((p) => p.id == product.id)) {
  //     setCart(
  //       cart.map((p) => (p.id == product.id ? { ...p, count: p.count + 1 } : p))
  //     );
  //   } else {
  //     setCart([...cart, { ...product, count: 1 }]);
  //   }
  // };
  // console.log(cart);

  return (
    <div>
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
                      src={item.Img}
                      alt={item.Title}
                      className="md:w-32 md:h-auto object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-light text-gray-500 tracking-wide uppercase">
                      {item.Cat}
                    </h4>
                    <h2 className="mt-2 text-xl text-blue-900 capitalize">
                      {item.Title}
                    </h2>
                    <p className="text-gray-700 mt-2">
                      A Screen Everyone Will Love: Whether your family is
                      streaming or video chatting with friends tablet A8...{" "}
                    </p>
                    <h3 className="text-3xl text-blue-900 mt-2">
                      {item.Price}
                    </h3>
                    <button
                      className="mt-4 px-4 py-2 text-white bg-blue-800 text-lg rounded-md transition duration-500 hover:bg-blue-500"
                      onClick={() => addToCart(item)}
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
      <div className="px-4 md:py-20 md:px-32 p-10 w-full">
        <h2 className="text-3xl md:text-4xl font-light uppercase mb-2">
          Products
        </h2>
        <p className="text-gray-600 mt-2">Home - Products</p>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold uppercase">categories</h3>
              <ul className="mt-2 space-y-5">
                <li
                  onClick={() => AllProducts()}
                  className="cursor-pointer text-blue-900 hover:underline mt-5"
                >
                  All Products
                </li>
                <li
                  onClick={() => filterproduct("Tablet")}
                  className="cursor-pointer text-blue-900 hover:underline mt-5"
                >
                  Tablet
                </li>
                <li
                  onClick={() => filterproduct("Smart Watch")}
                  className="cursor-pointer text-blue-900 hover:underline mt-5"
                >
                  Smart Watch
                </li>
                <li
                  onClick={() => filterproduct("Headphone")}
                  className="cursor-pointer text-blue-900 hover:underline mt-5"
                >
                  Headphone
                </li>
                <li
                  onClick={() => filterproduct("Camera")}
                  className="cursor-pointer text-blue-900 hover:underline mt-5"
                >
                  Camera
                </li>
                <li
                  onClick={() => filterproduct("Gaming")}
                  className="cursor-pointer text-blue-900 hover:underline mt-5"
                >
                  Gaming
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-3/4 mt-6 md:mt-0 py-8 px-6">
            <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {product.map((item) => {
                return (
                  <>
                    <div
                      className="p-4 border border-gray-300 mb-5 transition duration-500 ease-in-out cursor-pointer rounded-md mr-5 hover:shadow-md"
                      key={item.id}
                    >
                      <div className="relative border-b border-gray-300 pb-2">
                        <img
                          src={item.Img}
                          alt={item.Title}
                          className="w-full h-40 object-cover hover:scale-110 transition duration-300"
                        />
                        <div className="absolute top-6 -right-11 hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 gap-y-2 hover:opacity-100 transition-all">
                          {/* {isAuthenticated ? ( */}
                          <li
                            onClick={() => addToCart(item)}
                            className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white"
                          >
                            <AiOutlineShoppingCart />
                          </li>
                          {/* ) : (
                            <li
                              onClick={() => loginWithRedirect()}
                              className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white"
                            >
                              <AiOutlineShoppingCart />
                            </li>
                          )} */}
                          <li
                            onClick={() => view(item)}
                            className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white"
                          >
                            <BsEye />
                          </li>
                          <li className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white">
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-gray-500">{item.Cat}</p>
                        <h3 className="text-base mt-1 text-blue-900 transition duration-500 hover:text-blue-500">
                          {item.Title}
                        </h3>
                        <h4 className="mt-2 text-sm text-blue-500 font-semibold">
                          ${item.Price}
                        </h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
