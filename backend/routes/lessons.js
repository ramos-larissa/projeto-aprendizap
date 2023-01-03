const express = require("express");
const router = express.Router();
const db = require("../database");
const { v4: uuidv4 } = require("uuid");

/* GET lessons listing. */
router.get("/", async (req, res) => {
  // Get data from the DB
  try {
    const data = await db.getData("/lessons");
    res.json(data);
  } catch (err) {
    return res.status(400).json({ error: "Can't get information" });
  }
});

/* GET lesson by id. */
router.get("/:id", async (req, res) => {
  try {
    // Get data from the DB
    const data = await db.getData(`/lessons/${req.params.id}`);
    res.json(data);
  } catch (err) {
    return res.status(400).json({ error: "Can't get information" });
  }
});

/* POST lesson. */
router.post("/create", async (req, res) => {
  try {
    // Get data from the DB
    const newLesson = {
      id: uuidv4(),
      title: req.body.title,
      subject: req.body.subject,
      gif: {},
      Date: new Date(),
    };

    await db.push(`/lessons/${newLesson.id}`, newLesson, false);
    await db.save();
    await db.reload();

    res.json(db);
  } catch (err) {
    return res.status(400).json({ error: "Can't create a new lesson" });
  }
});

/* PUT lesson. */
router.put("/:id", async (req, res) => {
  // Get data from the DB
  try {
    const data = await db.getData(`/lessons/${req.params.id}`);
    const updatedLesson = {
      id: data.id,
      title: req.body.title,
      subject: req.body.subject,
      Date: new Date(),
    };

    await db.push(`/lessons/${updatedLesson.id}/`, updatedLesson, false);
    await db.save();
    await db.reload();

    res.json(db);
  } catch (err) {
    return res.status(400).json({ error: "Can't update the lesson" });
  }
});

/* DELETE lesson. */
router.delete("/:id", async (req, res) => {
  try {
    await db.delete(`/lessons/${req.params.id}`);
    await db.save();
    await db.reload();
    res.json(db);
  } catch (err) {
    return res.status(400).json({ error: "Can't delete the lesson" });
  }
});

/* POST GIF */
router.post("/:id/gif", async (req, res) => {
  try {
    // Get data from the DB
    const data = await db.getData(`/lessons/${req.params.id}`);
    const createGif = {
      id: uuidv4(),
      url: req.body.url,
      description: req.body.description,
    };

    await db.push(`/lessons/${data.id}/gif/${createGif.id}`, createGif, false);
    await db.save();
    await db.reload();

    res.json(db);
  } catch (err) {
    return res.status(400).json({ error: "Can't create a new gif" });
  }
});
/* PUT Gif. */
router.put("/:id/gif/:idGif", async (req, res) => {
  // Get data from the DB
  try {
    // Get data from the DB
    const data = await db.getData(
      `/lessons/${req.params.id}/gif/${req.params.idGif}`
    );
    const updateGif = {
      url: req.body.url,
      description: req.body.description,
    };

    await db.push(`/lessons/${data.id}/gif/${updateGif.id}`, updateGif, false);
    await db.save();
    await db.reload();

    res.json(db);
  } catch (err) {
    return res.status(400).json({ error: "Can't update the gif" });
  }
});

/* DELETE lesson. */
router.delete("/:id/gif/:idGif", async (req, res) => {
  try {
    await db.delete(`/lessons/${req.params.id}/gif/${req.params.idGif}`);
    await db.save();
    await db.reload();
    res.json(db);
  } catch (err) {
    return res.status(400).json({ error: "Can't delete the gif" });
  }
});





module.exports = router;
