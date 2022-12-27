const express = require('express');
const router = express.Router();
const db = require('../database');
const { v4: uuidv4 } = require('uuid');

/* GET lessons listing. */
router.get('/', async (req, res) => {
  // Get data from the DB
  const data = await db.getData('/lessons');
  res.json(data);
});

// TODO Other routes

module.exports = router;
