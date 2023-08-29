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
import { useContext, useEffect, useState } from "react";
import { CartCont } from "../App";
import { api } from "../utils";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Protected from "../components/Protected";

const Product = () => {
  // {product, setProducts, detail, view, close, setClose, addToCart}
  // const { loginWithRedirect, isAuthenticated } = useAuth0();
  // const { cart, setCart } = useContext(CartCont);
  // add to cart
  // const [cart, setCart] = useState([]);
  const { cart, setCart } = useContext(CartCont);
  const [openAdd, setOpenAdd] = useState(false);
  const navigate = useNavigate();
  //product Detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //filter product
  const [products, setProducts] = useState([]);
  const [newProducts, setnewProducts] = useState({
    categories: "",
    titel: "",
    url: null,
    price: 0,
    description: "",
  });
  const user = useOutletContext()[0];
  // const [category, setCategory] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, [user, navigate]);

  // useEffect(() => {
  //   api("/categories").then((products) => setProducts(products));
  // });

  const filterproduct = (product) => {
    const update = products.filter((x) => {
      return x.categories === product;
    });
    setProducts(update);
  };
  const AllProducts = () => {
    setProducts(products);
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
    <Protected>
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
              {detail.map((item, i) => {
                return (
                  <div
                    className="flex p-4 items-center border border-gray-200 rounded-md"
                    key={i}
                  >
                    <div className="mr-2 w-1/4">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="md:w-32 md:h-auto object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-light text-gray-500 tracking-wide uppercase">
                        {item.Cat}
                      </h4>
                      <h2 className="mt-2 text-xl text-blue-900 capitalize">
                        {item.title}
                      </h2>
                      <p className="text-gray-700 mt-2">
                        A Screen Everyone Will Love: Whether your family is
                        streaming or video chatting with friends tablet A8...{" "}
                      </p>
                      <h3 className="text-3xl text-blue-900 mt-2">
                        {item.price}
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
                    onClick={() => filterproduct("Men is clothing")}
                    className="cursor-pointer text-blue-900 hover:underline mt-5"
                  >
                    Men is clothing
                  </li>
                  <li
                    onClick={() => filterproduct("Woman is clothing")}
                    className="cursor-pointer text-blue-900 hover:underline mt-5"
                  >
                    Woman is clothing
                  </li>
                  <li
                    onClick={() => filterproduct("Electronics")}
                    className="cursor-pointer text-blue-900 hover:underline mt-5"
                  >
                    Electronics
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
              <button
                onClick={() => setOpenAdd(true)}
                className="bg-green-500 text-white px-8 py-2 rounded-md hover:bg-green-600 mb-6"
              >
                Add
              </button>
              <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {products.map((item, i) => {
                  return (
                    <>
                      <div
                        className="p-4 border border-gray-300 mb-5 transition duration-500 ease-in-out cursor-pointer rounded-md mr-5 hover:shadow-md"
                        key={i}
                      >
                        <div className="relative border-b border-gray-300 pb-2">
                          <img
                            src={item.url}
                            alt={item.title}
                            className="w-1/2 h-68 object-cover hover:scale-110 transition duration-300"
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
                          <p className="text-gray-500">{item.categories}</p>
                          <h3 className="text-base mt-1 text-blue-900 transition duration-500 hover:text-blue-500">
                            {item.title}
                          </h3>
                          <h4 className="mt-2 text-sm text-blue-500 font-semibold">
                            Rp.{item.price}
                          </h4>
                        </div>
                        <div className="felx space-x-4 mt-4">
                          <Link to={`/products/${item.id}/edit`}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                              Edit
                            </button>
                          </Link>
                          <button
                            onClick={async () => {
                              if (
                                confirm(
                                  `Apakah Anda yakin ingin menghapus ${item.title}?`
                                )
                              ) {
                                // const message = await api(
                                //   `/products/${item.id}`,
                                //   "DELETE"
                                // );
                                // const products = await api("/products");
                                const response1 = await api.delete(
                                  `/products/${item.id}`
                                );
                                const message = await response1.text();
                                const response2 = await api.get("/products");
                                const products = await response2.json();
                                setProducts(products);
                                alert(message);
                              }
                            }}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            {openAdd ? (
              <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-25">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setnewProducts({});
                    // const message = await api("/products", "POST", newProducts);
                    // const products = await api("/products");

                    const response1 = await api.post("/products", newProducts);
                    const message = await response1.text();
                    const response2 = await api.get("/products");
                    const products = await response2.json();
                    setProducts(products);
                    alert(message);
                    // navigate("/");
                  }}
                  className="max-w-xl w-full mx-auto p-12 bg-white rounded-md shadow-md"
                >
                  <h1 className="text-2xl font-semibold mb-6 mt-5">
                    Tambah product
                  </h1>
                  <label className="block mb-4">
                    <span className="text-gray-700">Title :</span>
                    <input
                      type="text"
                      value={newProducts.title ?? ""}
                      onChange={(e) =>
                        setnewProducts({
                          ...newProducts,
                          title: e.target.value,
                        })
                      }
                      required
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                  </label>
                  <label className="mb-4">
                    <span className="text-gray-700">Categories :</span>
                    <input
                      type="text"
                      value={newProducts.categories ?? ""}
                      onChange={(e) =>
                        setnewProducts({
                          ...newProducts,
                          categories: e.target.value,
                        })
                      }
                      required
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Url Image :</span>
                    <input
                      type="file"
                      accept="image/*"
                      value={newProducts.url ?? ""}
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            const base64Image = event.target.result;
                            setnewProducts({
                              ...newProducts,
                              url: base64Image,
                            });
                          };
                          reader.readAsDataURL(file);
                        }
                        // setnewProducts({
                        //   ...newProducts,
                        //   url: e.target.files[0],
                        // });
                      }}
                      required
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gray-700">Price :</span>
                    <input
                      type="number"
                      value={newProducts.price ?? ""}
                      onChange={(e) =>
                        setnewProducts({
                          ...newProducts,
                          price: e.target.value,
                        })
                      }
                      required
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                  </label>
                  <label className="block mb-4">
                    <span className="text-gary-700">Deskripsi : </span>
                    <textarea
                      value={newProducts.description ?? ""}
                      onChange={(e) =>
                        setnewProducts({
                          ...newProducts,
                          description: e.target.value,
                        })
                      }
                      required
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                  </label>
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-500 font-bold">
                    Simpan
                  </button>
                  <button
                    className="bg-red-700 text-white ml-4 px-6 py-2 rounded-md hover:bg-red-500 font-bold"
                    onClick={() => setOpenAdd(false)}
                  >
                    Batal
                  </button>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Protected>
  );
};

export default Product;
