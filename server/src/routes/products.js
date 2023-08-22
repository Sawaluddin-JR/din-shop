import express from "express";
import conn from "../db.js";

const productRouter = express.Router();

// simpan semua

// tampilkan semua
productRouter.get("/", async (_req, res) => {
  const angels = await conn.query("SELECT * FROM product");
  res.json(angels);
});

// tampilkan berdasarkan ID
productRouter.get("/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM product WHERE id = ?");
  const angel = await prepare.execute([req.params.id][0]);
  res.json(angel);
});

// buat
productRouter.post("/", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "INSERT INTO product (name,price) VALUES (?,?)"
    );
    await prepare.execute([req.body.name, req.body.price]);
    res.send("Product berhasil disimpan");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// edit
productRouter.put("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "UPDATE product SET name = ?, price = ? WHERE id = ?"
    );
    await prepare.execute([req.body.name, req.body.price, req.params.id]);
    res.send("Data berhasil disimpan");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus berdasarkan ID
productRouter.delete("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare("DELETE FROM product WHERE id = ?");
    await prepare.execute([req.params.id]);
    res.send("Data berhasil dihapus");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus semua

export default productRouter;
