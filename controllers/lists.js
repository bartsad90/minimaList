const ListSchema = require('../models/lists')

const getAllLists = async (req, res) => {

  try 
  {const lists = await ListSchema.find({});
  res.status(200).json({lists, nbHits: lists.length});
 } catch {
  throw new Error("Could not find lists")
 }

};
const deleteAllLists = async (req, res) => {

  try {
    let lists = await ListSchema.find({})
    const listsMapped = lists.map((list) => (list._id))
    listsMapped.forEach( async (_id) =>  {
      await ListSchema.findOneAndDelete({_id})
      console.log(`Deleted list: _id ${_id}`)
    })
    const emptyLists = await ListSchema.find({})
    res.status(200).send({emptyLists, nbHits:lists.length});
  } catch {
    throw new Error('Could not delete all lists. Try again.')
  }

};
const getList = async (req, res) => {
  const listId = req.params.listId
  //const list = await ListSchema.findOne({_id:listId})
  const list = await ListSchema.findOne({_id:listId})

  res.status(200).json({list})
};

const createList = async (req, res) => {
  const { name } = req.body
  if (!name) {
    throw new Error('Please provide a name for the list (min. 3 characters')
  }

  const list = await ListSchema.create({
    name
  })

  res.status(200).json({ list })
  //res.status(200).send(`create list, listId:  ${req.params.listId}`);
};
const updateList = async (req, res) => {

  try {
    const listId = req.params.listId
    const newList = req.body
    await ListSchema.findOneAndReplace({_id: listId}, newList)
    const newListData = await ListSchema.findOne({_id: listId})
    res.status(200).json({listId, newListData});
    
  } catch {
    const listId = req.params.listId
    throw new Error(`Could not delete list id: ${listId}`)
  }
};
const deleteList = async (req, res) => {
  try {
  const listId = req.params.listId
  await ListSchema.findOneAndDelete({_id:listId})
  res.status(200).send(`deleted list, listId:  ${listId}`);
}
catch {
    const listId = req.params.id
    throw new Error(`Could not delete list, listId: ${listId}`)
  }
};



module.exports = {
  getAllLists,
  deleteAllLists,
  getList,
  createList,
  updateList,
  deleteList,
};
