import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "../utils.js";

const EditProduct = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [id]);

  console.log(product);
  return (
    // <main className="bg-gray-100 min-h-screen p-4">

    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-25">
      {product ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const response1 = await api.put(`/products/${product.id}`, {
              title: product.title,
              categories: product.categories,
              url: product.url,
              price: product.price,
              description: product.description,
            });
            // const message = await response1.text();
            // const response2 = await api.get("/products");
            // const product = await response2.json();
            // setProduct(product);
            alert(response1);
            navigate("/");
          }}
          className="mt-8 max-w-xl w-full mx-auto p-12 bg-white rounded-md shadow-md"
        >
          <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>
          <label className="block mb-2">
            Title :
            <input
              className="block w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              value={product.title}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </label>
          <label className="block mb-2">
            Categories
            <input
              className="block w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              value={product.categories}
              onChange={(e) =>
                setProduct({ ...product, categories: e.target.value })
              }
            />
          </label>
          <label className="block mb-2">
            Url
            <input
              className="block w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              value={product.url}
              onChange={(e) => setProduct({ ...product, url: e.target.value })}
            />
          </label>
          <label className="block mb-2">
            Price
            <input
              className="block w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </label>
          <label className="block mb-2">
            Description
            <textarea
              className="block w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
              type="text"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </label>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Simpan
          </button>
          <Link to={"/product"}>
            <button className="bg-red-700 text-white ml-4 px-6 py-2 rounded-md hover:bg-red-500 font-bold">
              Batal
            </button>
          </Link>
        </form>
      ) : (
        "loading"
      )}
    </div>
    // </main>
  );
};

export default EditProduct;
