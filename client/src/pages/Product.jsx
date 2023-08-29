import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete, AiOutlineCloseCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { CartCont } from "../App";
import { api } from "../utils";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Protected from "../components/Protected";
import { BsEye } from "react-icons/bs";

const Product = () => {
  const [keyword, setKeyword] = useState("");
  const [showByCategory, setShowByCategory] = useState("");
  const { cart, setCart } = useContext(CartCont);
  const [openAdd, setOpenAdd] = useState(false);
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProducts, setnewProducts] = useState({
    categories: "",
    title: "",
    url: null,
    price: 0,
    description: "",
  });
  const user = useOutletContext()[0];

  useEffect(() => {
    api
      .get("/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, [user, navigate]);

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

  return (
    <Protected>
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
                      {item.categories}
                    </h4>
                    <h2 className="mt-2 text-xl text-blue-900 capitalize">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 mt-2">{item.description}</p>
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
          </div>
        </div>
      ) : null}
      <div className="flex items-center ml-6 mt-6 text-black">
        <input
          type="text"
          value={keyword}
          placeholder="Search Your Product..."
          autoComplete="off"
          onChange={(e) => setKeyword(e.target.value)}
          className="py-3 px-6 border border-blue-600 mr-1 text-black rounded-md"
        />
      </div>
      <div className="w-40 ml-6 mt-6">
        <label className="text-lg font-semibold uppercase">Categories</label>
        <select
          className="mt-2 block border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          value={showByCategory}
          onChange={(e) => setShowByCategory(e.target.value)}
        >
          <option value="">All Products</option>
          <option value="Men is clothing">Men is Clothing</option>
          <option value="Women is clothing">Women is Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Camera">Camera</option>
          <option value="Jawerly">Jawerly</option>
        </select>
      </div>
      <button
        onClick={() => setOpenAdd(true)}
        className="mt-6 ml-6 bg-green-500 text-white px-8 py-2 rounded-md hover:bg-green-600 mb-6"
      >
        Add
      </button>
      <div className="py-8 px-12">
        <h2 className="text-2xl text-blue-800 mb-6">Products</h2>
        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter(
              (produk) =>
                produk.title.toLowerCase().includes(keyword) &&
                produk.categories.includes(showByCategory)
            )
            .map((item, i) => {
              return (
                <div
                  className="p-6 border border-gray-300 transition duration-500 ease-in-out cursor-pointer rounded-md hover:shadow-md"
                  key={i}
                >
                  <div className="relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-1/2 h-64 hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-6 -right-11 hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 gap-y-2 hover:opacity-100 transition-all">
                      <li
                        onClick={() => addToCart(item)}
                        className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white"
                      >
                        <AiOutlineShoppingCart />
                      </li>
                      <li
                        onClick={() => view(item)}
                        className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white"
                      >
                        <BsEye />
                      </li>
                      <Link
                        to={`/products/${item.id}/edit`}
                        className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white"
                      >
                        <FaEdit />
                      </Link>
                      <li className="list-none p-2 bg-white shadow-md rounded-lg text-blue-800 cursor-pointer hover:bg-blue-800 hover:text-white">
                        <button
                          onClick={async () => {
                            if (
                              confirm(
                                `Apakah Anda yakin ingin menghapus ${item.title}?`
                              )
                            ) {
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
                        >
                          <AiTwotoneDelete />
                        </button>
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
              const response1 = await api.post("/products", newProducts);
              const message = await response1.text();
              const response2 = await api.get("/products");
              const products = await response2.json();
              setProducts(products);
              alert(message);
              navigate("/product");
            }}
            className="max-w-xl w-full mx-auto p-12 bg-white rounded-md shadow-md"
          >
            <h1 className="text-2xl font-semibold mb-6 mt-5">Tambah product</h1>
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
                type="text"
                value={newProducts.url ?? ""}
                onChange={(e) => {
                  setnewProducts({
                    ...newProducts,
                    url: e.target.value,
                  });
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
    </Protected>
  );
};

export default Product;
