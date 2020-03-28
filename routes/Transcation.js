const router = require("express").Router();
const {
  getTranscation,
  addTranscation,
  deleteTranscation
} = require("../controllers/transcations");
router.get("/", getTranscation);
router.post("/", addTranscation);
router.delete("/:id", deleteTranscation);

module.exports = router;
