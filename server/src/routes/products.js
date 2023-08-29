import express from "express";
import conn from "../db.js";
import multer from "multer";

const router = express.Router();
router.post("/all", async (_req, res) => {
  for await (const product of products) {
    const prepare = await conn.prepare(
      "INSERT INTO products (categories, title, url, price, description) VALUES (?, ?, ?, ?, ?)"
    );
    await prepare.execute([
      product.categories,
      product.title,
      product.url,
      product.price,
      product.description,
    ]);
  }
  res.send("Semua product berhasil disimpan.");
});

// simpan semua

// tampilkan semua
router.get("/", async (_req, res) => {
  const products = await conn.query("SELECT * FROM products");
  res.json(products);
});

// tampilkan berdasarkan categories
router.get("/categories", async (req, res) => {
  const prepare = await conn.prepare(
    "SELECT * FROM products WHERE categories = ?"
  );
  const product = await prepare.execute([req.body.categories]);
  res.json(product);
});

// tampilkan berdasarkan ID
router.get("/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM products WHERE id = ?");
  const product = await prepare.execute([req.params.id][0]);
  res.json(product);
});

// buat

// const upload = multer({ storage: storage });

router.post("/", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "INSERT INTO products (title, categories, url, price, description) VALUES (?, ?, ?, ?, ?)"
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

// edit
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
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

export default router;
