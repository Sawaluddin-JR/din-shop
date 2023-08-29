import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import { api } from "./utils.js";
import Home from "./pages/Home";
import { Link } from "react-router-dom";

export const CartCont = createContext({
  cart: null,
  setCart: () => {},
});

export const UserCont = createContext({
  user: null,
  sertUser: () => {},
});

export default function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState();

  // useEffect(() => {
  //   api.get("/me").then((user) => {
  //     if (!user) {
  //       setUser(null);
  //     }
  //   });
  // }, []);
  // console.log(user);

  return (
    <div className="overflow-hidden">
      <CartCont.Provider value={{ cart, setCart }}>
        <UserCont.Provider value={{ user, setUser }}>
          <Header />
        </UserCont.Provider>
        {user ? (
          <div className="flex gap-3 items-center">
            <button
              onClick={async () => {
                const response = await api.post("/auth/logout");
                if (response.ok) {
                  setUser();
                }
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="text-xl">Login</button>
          </Link>
        )}
        <Outlet context={[user, setUser]} />
      </CartCont.Provider>
      <Footer />
    </div>
  );
}
