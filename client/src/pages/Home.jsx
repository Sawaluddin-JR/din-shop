import { useContext, useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye, BsArrowRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { api } from "../utils.js";
import { CartCont } from "../App.jsx";
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
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartCont);
  const [close, setClose] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  const [newProducts, setnewProducts] = useState({});
  const user = useOutletContext()[0];

  console.log(user);
  useEffect(() => {
    api("/products").then((products) => setProducts(products));
  }, [user, navigate]);

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
                      <button
                        className="mt-4 px-4 py-2 text-white bg-blue-800 text-lg rounded-md transition duration-500 hover:bg-blue-500"
                        onClick={() => addtocart(item)}
                      >
                        Add To Cart
                      </button>
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
                      <p className="text-blue-600 font-bold">
                        {item.categories}
                      </p>
                      <p className="text-gray-600">{item.totalProduct}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="py-10 px-12">
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
        </div> */}
        <div className="py-8 px-12">
          <h2 className="text-2xl text-blue-800 mb-6">Top Products</h2>
          <button
            onClick={() => setOpenAdd(true)}
            className="bg-green-500 text-white px-8 py-2 rounded-md hover:bg-green-600"
          >
            Add
          </button>
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
                      className="w-1/2 h-64 cover hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-6 -right-11 hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 gap-y-2 hover:opacity-100 transition-all">
                      <li
                        onClick={() => addtocart(item)}
                        className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white"
                      >
                        <AiOutlineShoppingCart className="text-xl" />
                      </li>
                      <li
                        onClick={() => view(item)}
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
                    <p className="text-gray-600">{item.categories}</p>
                    <h3 className="text-lg text-blue-800">{item.title}</h3>
                    <h4 className="mt-2 text-blue-600 font-semibold">
                      Rp {item.price}
                    </h4>
                  </div>
                  <div className="felx space-x-4 mt-4">
                    <Link to={`/products/${item.id}`}>
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
                          const message = await api(
                            `/products/${item.id}`,
                            "DELETE"
                          );
                          const products = await api("/products");
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
                const message = await api("/products", "POST", newProducts);
                const products = await api("/products");
                setProducts(products);
                alert(message);
                navigate("/");
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
                  value={newProducts.categories_id ?? ""}
                  onChange={(e) =>
                    setnewProducts({
                      ...newProducts,
                      categories_id: e.target.value,
                    })
                  }
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Url Image :</span>
                <input
                  type="text"
                  value={newProducts.url ?? ""}
                  onChange={(e) =>
                    setnewProducts({
                      ...newProducts,
                      url: e.target.value,
                    })
                  }
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
