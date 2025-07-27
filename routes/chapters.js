// Define routes
const express = require("express");
const router = express.Router();
const Chapters = require("../models/Chapters");

router.get("/", async (req, res) => {
  try {
    const chapters = await Chapters.find();
    res.status(200).render("chapters", { chapters });
  } catch (err) {
    res.status(400).send("Erreur lors de la récupération des chapitres");
  }
});

router.post("/", async (req, res) => {
  try {
    await Chapters.create(req.body);
    res.status(200).redirect("/chapters");
  } catch (err) {
    res.status(400).render({ error: err.message });
  }
});

module.exports = router;
