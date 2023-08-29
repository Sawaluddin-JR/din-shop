import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

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
        <Outlet context={[user, setUser]} />
      </CartCont.Provider>
      <Footer />
    </div>
  );
}
