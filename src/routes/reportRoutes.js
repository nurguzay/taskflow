const express = require("express");

const {
  getCompletedReport,
  getPendingReport,
  getSummaryReport,
} = require("../controllers/reportController");

const router = express.Router();

router.get("/completed", getCompletedReport);
router.get("/pending", getPendingReport);
router.get("/summary", getSummaryReport);

module.exports = router;