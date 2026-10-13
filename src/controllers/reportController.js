const tasks = require("../data/tasks");

const getCompletedReport = (req, res) => {
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  );

  return res.status(200).json({
    success: true,
    completedCount: completedTasks.length,
    data: completedTasks,
  });
};

const getPendingReport = (req, res) => {
  const pendingTasks = tasks.filter(
    (task) => task.status === "pending"
  );

  return res.status(200).json({
    success: true,
    pendingCount: pendingTasks.length,
    data: pendingTasks,
  });
};

const getSummaryReport = (req, res) => {
  const totalTasks = tasks.length;

  // Status dağılımı
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress"
  ).length;

  // Priority dağılımı
  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "high"
  ).length;

  const mediumPriorityTasks = tasks.filter(
    (task) => task.priority === "medium"
  ).length;

  const lowPriorityTasks = tasks.filter(
    (task) => task.priority === "low"
  ).length;

  return res.status(200).json({
    success: true,
    data: {
      totalTasks,

      statusSummary: {
        completed: completedTasks,
        pending: pendingTasks,
        inProgress: inProgressTasks,
      },

      prioritySummary: {
        high: highPriorityTasks,
        medium: mediumPriorityTasks,
        low: lowPriorityTasks,
      },
    },
  });
};

module.exports = {
  getCompletedReport,
  getPendingReport,
  getSummaryReport,
};