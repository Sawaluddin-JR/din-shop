// import { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { api } from "./utils.js";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import ProductProvider from "./contexts/ProductContext";
import { useState } from "react";
import ProductDetail from "./pages/ProductDetails";

export default function App() {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   api("/me").then((user) => {
  //     if (!user) {
  //       setUser(null);
  //     }
  //   });
  // }, []);
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

  const [product, setProduct] = useState(ProductDetail);

  return (
    <div className="overflow-hidden">
      <ProductProvider>
        <Header />
        {/* <Home /> */}
        <Outlet />
        <SideBar />
        <Footer />
      </ProductProvider>
    </div>
  );
}
