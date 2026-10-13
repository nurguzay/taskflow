const express = require("express");

const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const {
  validateCreateTask,
  validateUpdateTask,
} = require("../middlewares/validateTask");

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);

router.post("/", validateCreateTask, createTask);

router.put("/:id", validateUpdateTask, updateTask);

router.delete("/:id", deleteTask);

module.exports = router;