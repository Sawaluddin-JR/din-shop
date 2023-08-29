import express from "express";
import conn from "../db.js";

const router = express.Router();
// tampilkan semua
router.get("/cart", async (_req, res) => {
  const carts = await conn.query("SELECT * FROM carts");
  res.json(carts);
});

router.post("/cart", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "INSERT INTO carts (id_products, id_user,total_price,amount_products ) VALUES (?, ?, ?, ?)"
    );
    console.log(req.body);
    await prepare.execute([
      req.body.id_products,
      req.body.id_user,
      req.body.total_price,
      req.body.amount_products,
    ]);
    res.send("Product berhasil disimpan");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

export default router;
