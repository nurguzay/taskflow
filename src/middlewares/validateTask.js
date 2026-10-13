const allowedPriorities = ["low", "medium", "high"];
const allowedStatuses = ["pending", "in-progress", "completed"];

const validateCreateTask = (req, res, next) => {
  const {
    title,
    description,
    assignee,
    priority,
    status,
  } = req.body;

  if (!title || !description || !assignee || !priority) {
    return res.status(400).json({
      success: false,
      message:
        "title, description, assignee ve priority alanları zorunludur.",
    });
  }

  if (!allowedPriorities.includes(priority)) {
    return res.status(400).json({
      success: false,
      message:
        "priority alanı low, medium veya high olmalıdır.",
    });
  }

  if (status && !allowedStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message:
        "status alanı pending, in-progress veya completed olmalıdır.",
    });
  }

  next();
};

const validateUpdateTask = (req, res, next) => {
  const {
    priority,
    status,
  } = req.body;

  if (priority && !allowedPriorities.includes(priority)) {
    return res.status(400).json({
      success: false,
      message:
        "priority alanı low, medium veya high olmalıdır.",
    });
  }

  if (status && !allowedStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message:
        "status alanı pending, in-progress veya completed olmalıdır.",
    });
  }

  next();
};

module.exports = {
  validateCreateTask,
  validateUpdateTask,
};