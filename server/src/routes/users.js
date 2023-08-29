import express from "express";
import conn from "../db.js";
import bcrypt from "bcryptjs";

const prepare = await conn.prepare(
  "INSERT INTO users (name, telephone, address, email, password, is_admin) VALUES (?, ?, ?, ?, ?, ?)"
);
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash("1234", 1);
await prepare.execute(["Sawaluddin", "sawaluddin@gmail.com", hash, true]);
