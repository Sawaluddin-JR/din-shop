// import { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { api } from "./utils.js";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useEffect, useState } from "react";
import { api } from "./utils";

export const CartCont = createContext({
  cart: null,
  setCart: () => {},
});

export default function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    api("/me").then((user) => {
      if (!user) {
        setUser(null);
      }
    });
  }, []);
  // console.log(user);
  // return (
  //   <>
  //     <header>
  //       <Link to="/">
  //         <div>Integer20</div>
  //       </Link>
  //       <Link to="/login">
  //         <button>Login</button>
  //       </Link>
  //     </header>
  //     <Outlet context={[user, setUser]} />
  //     <footer>&copy; 2023 Integer</footer>
  //   </>
  // );

  return (
    <div className="overflow-hidden">
      <CartCont.Provider value={{ cart, setCart }}>
        <Header />
        <Outlet context={[user, setUser]} />
      </CartCont.Provider>
      <Footer />
    </div>
  );
}
