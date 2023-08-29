import "dotenv/config";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authMiddleware from "./middlewares/auth.js";

import authRouter from "./routes/auth.js";
import productsRouter from "./routes/products.js";
import cartRouter from "./routes/cart.js";

import multer from "multer";
const uploadPost = multer({ dest: "public/images" });

export const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

const router = express.Router();
app.use("/api", router);

router.use("/auth", authRouter);

router.use(authMiddleware);
router.use("/products", productsRouter);
router.use("/cart", cartRouter);

const port = 3000;
app.listen(port, () =>
  console.log(`Server berjalan di http://localhost:${port}.`)
);
