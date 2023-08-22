import express from "express";
import cors from "cors";

import jwt from "jsonwebtoken";
import "dotenv/config";

import conn from "./db.js";
import productRouter from "./routes/products.js";

export const app = express();

// middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // membaca body

// membuat route (langsung)
app.get("/hello", (_req, res) => {
  res.send("Hello Node.js!");
});

// membuat route (dengan objek Router)
const router = express.Router();

router.post("/login", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
  const user = (await prepare.execute([req.body.email]))[0];
  if (user) {
    if (req.body.password === user.password) {
      res.json({
        token: jwt.sign(user, process.env.SECRET_KEY),
        user,
      });
    } else {
      res.status(401);
      res.send("Kata sandi salah.");
    }
  } else {
    res.status(401);
    res.send("Pengguna tidak ditemukan.");
  }
});

// middleware otentikasi
router.use((req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      req.user = user;
      next();
    } catch {
      res.status(401);
      res.send("Token salah.");
    }
  } else {
    res.status(401);
    res.send("Token belum diisi.");
  }
});

router.get("/me", (req, res) => {
  res.json(req.user);
});

router.use("/products", productRouter);

app.use("/api", router);

app.listen(3000, () => console.log("Server berhasil dijalankan di port 3000."));
