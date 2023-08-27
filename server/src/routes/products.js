import express from "express";
import conn from "../db.js";
//import multer from "multer";
//import path from "path";
//import fs from "fs";

const productRouter = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const fileExtension = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension);
//   },
// });

//const upload = multer({ storage: storage });
// mengatur penyajian konten dari direktori 'public
// simpan semua

// tampilkan semua
productRouter.get("/", async (_req, res) => {
  const products = await conn.query("SELECT * FROM products");
  res.json(products);
});

// tampilkan berdasarkan categories
productRouter.get("/categories", async (req, res) => {
  const prepare = await conn.prepare(
    "SELECT * FROM products WHERE categories = ?"
  );
  const product = await prepare.execute([req.body.categories]);
  res.json(product);
});

// tampilkan berdasarkan ID
productRouter.get("/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM products WHERE id = ?");
  const product = await prepare.execute([req.params.id][0]);
  res.json(product);
});

// buat
// Konfigurasi penyimpanan menggunakan Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public/images"); // Ganti dengan direktori penyimpanan yang sesuai
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(
//       null,
//       path.parse(file.originalname).name +
//         "-" +
//         Date.now() +
//         path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });

productRouter.post("/", async (req, res) => {
  // if (!req.file) return res.status(400).json({ message: "No file Upload" });

  // const { title, categories, price, description } = req.body;
  // const name = req.body.title;
  // const imageFile = req.file;
  // const fileSize = file.data.length;
  // const ext = path.extname(imageFile.originalname);
  // const allowedType = [".png", ".jgp", ".jpeg"];

  // if (!allowedType.includes(ext.toLowerCase()))
  // return res.status(422).json({ msg: "Invalid Images" });

  // const imageSize = imageFile.size;
  // if (imageSize > 5000000)
  // return res.status(422).json({ msg: "Image must be less than 5 MB" });

  // const fileName = imageFile.filename;
  // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  // file.mv(`./public/images/${fileName}`, async (err) => {
  // if (err) return res.status(500).json({ msg: err.message });
  try {
    const prepare = await conn.prepare(
      "INSERT INTO products (title,categories,url,price,description) VALUES (?,?,?,?,?)"
    );
    // const imageUrl = req.file ? req.file.filename : "";
    await prepare.execute([
      req.body.title,
      req.body.categories,
      req.body.url,
      req.body.price,
      req.body.description,
    ]);
    res.send("Product berhasil disimpan");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});
// });

// edit
productRouter.put("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "UPDATE products SET title = ?, price = ? WHERE id = ?"
    );
    await prepare.execute([req.body.title, req.body.price, req.params.id]);
    res.send("Data berhasil disimpan");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus berdasarkan ID
productRouter.delete("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare("DELETE FROM products WHERE id = ?");
    await prepare.execute([req.params.id]);
    res.send("Data berhasil dihapus");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus semua

export default productRouter;
