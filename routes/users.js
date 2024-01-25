const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/register", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "register.html"));
});

// /admin/add-product => POST
router.post("/register", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
