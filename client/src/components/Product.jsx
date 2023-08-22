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

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from "./productdetail";

const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(Productdetail);
  };

  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div key={curElm} className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      A Screen Everyone Will Love: Whether your family is
                      streaming or video chatting with friends tablet A8...{" "}
                    </p>
                    <h3>{curElm.Price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      <div className="products">
        <h2># Products</h2>
        <p>Home . products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                <li onClick={() => filtterproduct("Camera")}>Camera</li>
                <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Title}></img>
                        <div className="icon">
                          {isAuthenticated ? (
                            <li onClick={() => addtocart(curElm)}>
                              <AiOutlineShoppingCart />
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <AiOutlineShoppingCart />
                            </li>
                          )}
                          <li onClick={() => view(curElm)}>
                            <BsEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className="detail">
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>${curElm.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
