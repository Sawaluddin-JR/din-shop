// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const [angel, setAngel] = useState();
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${id}`)
//       .then((response) => response.json())
//       .then((angel) => setAngel(angel));
//   }, [id]);

//   return (
//     <main>
//       {angel ? (
//         <>
//           <h1>{angel.name}</h1>
//           <p>Task: {angel.task}</p>
//           {/* <p>{angel.description}</p> */}
//         </>
//       ) : (
//         "Loading..."
//       )}
//     </main>
//   );
// };
// export default ProductDetails;

const ProductDetail = [
  {
    id: 1,
    Title: "Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.",
    Cat: "Tablet",
    Price: "723",
    Img: "tp1.jpg",
  },
  {
    id: 2,
    Title: "Tracker with IP67 Waterproof Pedometer Smart watch.",
    Cat: "Smart Watch",
    Price: "168",
    Img: "tp2.jpg",
  },
  {
    id: 3,
    Title: "Cancelling Headphones Wireless.",
    Cat: "Headphone",
    Price: "49",
    Img: "tp3.jpg",
  },
  {
    id: 4,
    Title: "Professional Camera 4K Digital Video Camera.",
    Cat: "Camera",
    Price: "1049",
    Img: "tp4.jpg",
  },
  {
    id: 5,
    Title: "Mini Portable PD 22.5W Fast Charging Powerbank.",
    Cat: "Powerbank",
    Price: "49",
    Img: "tp5.jpg",
  },
  {
    id: 6,
    Title: "CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.",
    Cat: "Electronics",
    Price: "156",
    Img: "tp6.png",
  },
  {
    id: 7,
    Title: "Playstation 4 2TB Slim Gaming Console.",
    Cat: "Gaming",
    Price: "2098",
    Img: "tp7.jpg",
  },
  {
    id: 8,
    Title: "Mini Portable Mobile Phone Powerbank for iphone.",
    Cat: "Electronics",
    Price: "386",
    Img: "tp8.jpg",
  },
  {
    id: 9,
    Title: "Microsoft Surface Pro 8-13' Touchscreen.",
    Cat: "Tablet",
    Price: "693",
    Img: "p9.jpg",
  },
  {
    id: 10,
    Title: "Playstation 4 2TB Slim Gaming Console.",
    Cat: "Gaming",
    Price: "5036",
    Img: "p10.jpg",
  },
  {
    id: 11,
    Title: "Echo Show 5 (2nd Gen) Adjustable Stand | Charcoal",
    Cat: "Electronics",
    Price: "198",
    Img: "p11.jpg",
  },
  {
    id: 12,
    Title: "Echo Dot smart speaker",
    Cat: "Electronics",
    Price: "793",
    Img: "p12.jpg",
  },
];
export default ProductDetail;