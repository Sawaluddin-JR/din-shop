import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartCont } from "../App";

const Cart = () => {
  const { cart, setCart } = useContext(CartCont);
  const incQty = (product) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item;
      });
    });
  };

  // Dec Qty
  const decQty = (product) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === product.id && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    });
  };
  //Remove cart product
  const removeProduct = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };
  // Total price
  const Totalprice = cart.reduce(
    (price, item) => price + item.qty * item.Price,
    0
  );
  return (
    <>
      <div className="cartcontainer  p-10 w-full bg-gray-200 border-b border-gray-600">
        {cart.length === 0 && (
          <div className="emptycart mt-8 ml-40">
            <h2 className="empty text-2xl text-blue-900 uppercase font-light mb-8">
              Cart is Empty
            </h2>
            <Link
              to="/product"
              className="emptycartbtn ml-70 text-white text-decoration-none py-2 px-4 bg-blue-900"
            >
              Shop Now
            </Link>
          </div>
        )}
        <div className="max-w-full p-8">
          {cart.map((item) => {
            return (
              <div className="flex bg-white rounded-md my-2 p-4" key={item.id}>
                <div className="p-4 bg-gray-300">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-60 h-60 object-cover"
                  />
                </div>
                <div className="ml-4 flex flex-col">
                  <div className="info">
                    <h4 className="text-sm text-gray-600 font-thin uppercase tracking-wider">
                      {item.Cat}
                    </h4>
                    <h3 className="mt-2 text-blue-900 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-blue-900">Price: Rp.{item.price}</p>
                    <div className="mt-2 flex items-center">
                      <button
                        className="px-2 py-1 text-blue-900 text-xl focus:outline-none"
                        onClick={() => incQty(item)}
                      >
                        +
                      </button>
                      <input
                        type="text"
                        value={item.qty}
                        className="w-10 text-blue-900 text-lg bg-transparent border-b border-blue-900 outline-none mx-2 text-center"
                      />
                      <button
                        className="px-2 py-1 text-blue-900 text-xl focus:outline-none"
                        onClick={() => decQty(item)}
                      >
                        -
                      </button>
                    </div>
                    <h4 className="mt-2 text-blue-900 text-lg font-semibold">
                      sub total: ${item.Price * item.qty}
                    </h4>
                  </div>
                  <div className="">
                    <button
                      onClick={() => removeProduct(item)}
                      className="absolute focus:outline-none text-red-600 text-lg cursor-pointer"
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className="totalprice mt-8 ml-1/2 text-lg text-uppercase tracking-wide">
              total: $ {Totalprice}
            </h2>
            <button className="checkout mt-10 ml-56 px-4 py-2 text-white bg-blue-900 border-none focus:outline-none cursor-pointer">
              Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
