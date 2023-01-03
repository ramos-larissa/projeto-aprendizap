const express = require("express");
const router = express.Router();
const db = require("../database");
const { v4: uuidv4 } = require("uuid");

/* GET lessons listing. */
router.get("/", async (req, res) => {
  // Get data from the DB
  const data = await db.getData("/lessons");
  res.json(data);
});

/* GET lesson by id. */
router.get("/:id", async (req, res) => {
  // Get data from the DB
  const data = await db.getData(`/lessons/${req.params.id}`);
  res.json(data);
});

/* POST lesson. */
router.post("/create", async (req, res) => {
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
});

/* POST GIF */
router.post("/:id/gif", async (req, res) => {
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

  console.log(db, "!!!!!!!");
  res.json(db);
});

/* PUT lesson. */
router.put("/:id", async (req, res) => {
  // Get data from the DB
  const data = await db.getData(`/lessons/${req.params.id}`);
  const updatedLesson = {
    id: data.id,
    title: req.body.title,
    subject: req.body.subject,
    gif: {},
    Date: new Date(),
  };

  await db.push(`/lessons/${updatedLesson.id}/`, updatedLesson, false);
  await db.save();
  await db.reload();

  res.json(db);
});

/* DELETE lesson. */
router.delete("/:id", async (req, res) => {
  // Get data from the DB
  await db.delete(`/lessons/${req.params.id}`);
  await db.save();
  await db.reload();
  res.json(db);
});

module.exports = router;
