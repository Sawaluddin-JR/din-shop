import express from "express";
import conn from "../db.js";

const router = express.Router();

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
router.post("/", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "INSERT INTO products (title, categories, url, price, description) VALUES (?, ?, ?, ?, ?)"
    );
    console.log(req.body);
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
      "UPDATE products SET categories = ?, title = ?, url = ?, price = ?, description = ? WHERE id = ?"
    );
    await prepare.execute([
      req.body.categories,
      req.body.title,
      rq.body.url,
      req.body.price,
      req.body.description,
      req.params.id,
    ]);
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

export default router;
