import express from "express";
import conn from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
  const user = (await prepare.execute([req.body.email]))[0];
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign(user, process.env.SECRET_KEY);
      res
        .cookie("jwt", token, {
          httpOnly: true,
        })
        .send("Login berhasil.");
    } else {
      res.status(401).send("Kata sandi salah.");
    }
  } else {
    res.status(401).send("Pengguna tidak ditemukan.");
  }
});

router.post("/check", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
  const user = (await prepare.execute([req.body.email]))[0];
  if (user) {
    res.send("Berhasil mengambil");
  } else {
    res.status(401);
    res.send("Email Tidak Di temukan");
  }
});

router.post("/daftar", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
  const user = (await prepare.execute([req.body.email]))[0];
  if (user) {
    res.status(401);
    res.send("email Sudah ada");
  } else {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(req.body.password, salt);

    const prepare = await conn.prepare(
      "INSERT INTO users (name, telephone, address, email, password, is_admin) VALUES (?, ?, ?, ?, ?, ?)"
    );
    await prepare.execute([
      req.body.name,
      req.body.telephone,
      req.body.address,
      req.body.email,
      hash,
      req.body.is_admin,
    ]);
    res.send("Akun berhasil ditambahkan.");
  }
});

router.use(authMiddleware);

router.get("/me", (req, res) => {
  res.json(req.user);
});

router.post("/logout", (_req, res) => {
  res.clearCookie("jwt").send("Logout berhasil.");
});

export default router;
