const express = require("express");
const tasksRouter = express.Router();
const {
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

tasksRouter.route("/:listId.:taskId")
  .get(getTask)
  .post(createTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = tasksRouter
