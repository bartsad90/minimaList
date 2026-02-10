
const getTask = async (req, res) => {
    // console.log(req.params)
  res.status(200).send(`get task, taskId:  ${req.params.taskId} on list: ${req.params.listId}`);
};
const createTask = async (req, res) => {
  res.status(200).send(`create task, taskId: ${req.params.taskId} on list: ${req.params.listId}`);
};
const updateTask = async (req, res) => {
  res.status(200).send(` update task, taskId: ${req.params.taskId} on list: ${req.params.listId}`);
};
const deleteTask = async (req, res) => {
  res.status(200).send(`delete task, taskId: ${req.params.taskId} on list: ${req.params.listId}`);
};



module.exports = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
