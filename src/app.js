const express = require("express");

const taskRoutes = require("./routes/taskRoutes");
const reportRoutes = require("./routes/reportRoutes");
const logger = require("./middlewares/logger");

const app = express();

app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TaskFlow API çalışıyor",
  });
});

app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `TaskFlow API http://localhost:${PORT} adresinde çalışıyor.`
  );
});