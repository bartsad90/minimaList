const express = require("express");
const listsRouter = express.Router();
const {
  getAllLists,
  deleteAllLists,
  getList,
  createList,
  updateList,
  deleteList,
} = require("../controllers/lists");

listsRouter.route("/")
  .get(getAllLists)
  .delete(deleteAllLists);

listsRouter.route("/:listId")
  .get(getList)
  .post(createList)
  .patch(updateList)
  .delete(deleteList);



module.exports = listsRouter;
