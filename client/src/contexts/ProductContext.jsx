import { useEffect } from "react";
import { createContext, useState } from "react";

//create context
export const ProductContext = createContext({
  products: null,
  setProducts: () => {},
});

const ProductProvider = ({ children }) => {
  //product state
  const [products, setProducts] = useState([]);

  //fetch product
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
