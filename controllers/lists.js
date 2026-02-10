const getAllLists = async (req, res) => {
  res.status(200).send("get all lists");
};
const deleteAllLists = async (req, res) => {
  res.status(200).send("delete all lists");
};
const getList = async (req, res) => {
  res.status(200).send(`get list, listId:  ${req.params.listId}`);
};
const createList = async (req, res) => {
  res.status(200).send(`create list, listId:  ${req.params.listId}`);
};
const updateList = async (req, res) => {
  res.status(200).send(` update list, listId:  ${req.params.listId}`);
};
const deleteList = async (req, res) => {
  res.status(200).send(`delete list, listId:  ${req.params.listId}`);
};



module.exports = {
  getAllLists,
  deleteAllLists,
  getList,
  createList,
  updateList,
  deleteList,
};
