const tasks = require("../data/tasks");

const getTasks = (req, res) => {
  let result = [...tasks];

  const {
    status,
    priority,
    assignee,
    keyword,
    page = 1,
    limit = 10,
    sort,
  } = req.query;

  // Status filtresi
  if (status) {
    result = result.filter(
      (task) => task.status.toLowerCase() === status.toLowerCase(),
    );
  }

  // Priority filtresi
  if (priority) {
    result = result.filter(
      (task) => task.priority.toLowerCase() === priority.toLowerCase(),
    );
  }

  // Assignee filtresi
  if (assignee) {
    result = result.filter(
      (task) => task.assignee.toLowerCase() === assignee.toLowerCase(),
    );
  }

  // Arama
  if (keyword) {
    const searchText = keyword.toLowerCase();

    result = result.filter(
      (task) =>
        task.title.toLowerCase().includes(searchText) ||
        task.description.toLowerCase().includes(searchText),
    );
  }

  // Sıralama
  if (sort === "createdAt") {
    result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  if (sort === "-createdAt") {
    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  // Sayfalama
  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;

  const paginatedTasks = result.slice(startIndex, endIndex);

  return res.status(200).json({
    success: true,
    total: result.length,
    page: pageNumber,
    limit: limitNumber,
    count: paginatedTasks.length,
    data: paginatedTasks,
  });
};

const getTaskById = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Görev bulunamadı.",
    });
  }

  return res.status(200).json({
    success: true,
    data: task,
  });
};

const createTask = (req, res) => {
  const { title, description, assignee, priority, status } = req.body;

  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,

    title,
    description,
    assignee,
    priority,
    status: status || "pending",
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  return res.status(201).json({
    success: true,
    message: "Görev başarıyla oluşturuldu.",
    data: newTask,
  });
};

const updateTask = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Görev bulunamadı.",
    });
  }

  const { title, description, assignee, priority, status } = req.body;

  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.assignee = assignee ?? task.assignee;
  task.priority = priority ?? task.priority;
  task.status = status ?? task.status;

  return res.status(200).json({
    success: true,
    message: "Görev başarıyla güncellendi.",
    data: task,
  });
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Görev bulunamadı.",
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];

  return res.status(200).json({
    success: true,
    message: "Görev başarıyla silindi.",
    data: deletedTask,
  });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
