// requiring Job model from the models folder
const ToDoModel = require("../model/model.js");
// exporting the create CRUD operation
exports.create = {
  // property with function to make changes to the collection
  newItem: function (req, res) {
    // storing request body value addToDoItem in a variable
    const item = req.body.addToDoItem;
    // creating new model with request body property
    let toDo = new ToDoModel({
      // setting the description property to the toDoItem in the request body from the front end
      toDoItem: item,
    });
    // if statement to check if item being added is less than 20 character and does'nt include special character
    if (item.length <= 20 && item.match(/^[a-zA-Z0-9]+$/)) {
      // searching model if item being added already exists
      ToDoModel.find({ toDoItem: item })
        // promise with result of the search
        .then((result) => {
          // if statement checking if result returned is not empty meaning item exists in collection
          if (result.length != 0) {
            // sending response back to the frontend
            res.json("Item already exists!");
            // else statement to save document if it does'nt exist
          } else {
            // saving the newly created model
            toDo
              .save()
              // promise with result of the save
              .then((result) => {
                // sending response to frontend
                res.json("Item added!");
              })
              // error handing
              .catch((error) => {
                res.status(500).json(error);
              });
          }
        })
        // error handling
        .catch((error) => {
          res.status(500).json(error);
        });
      // else statement for if item is over 20 characters, empty or has special characters
    } else {
      // sending response back to the frontend
      res.json(
        "Item is empty, not less than 20 characters or includes special characters!"
      );
    }
  },
};
// exporing read CRUD operation
exports.read = {
  // property with function to read all to do items from the collection
  readItem: function (req, res) {
    // finding all documents in the collection
    ToDoModel.find()
      // promise containing results of find
      .then((result) => {
        // sending back results to the frontend
        res.json(result);
      })
      // error handling
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};
// exporting delete CRUD operation
exports.delete = {
  // property eith function to delete one to do item
  deleteItem: function (req, res) {
    // storing variable with data sent from request body
    const deleteItem = req.body.deleteItem;
    // searching model with request body variable
    ToDoModel.deleteOne({ toDoItem: deleteItem })
      // promise containing results of search
      .then((result) => {
        // if statement to check if no match is found
        if (result.deletedCount == 0) {
          // sending data back to front end
          res.json("Item not found!");
          // else statement for when item is found
        } else {
          // sending data back to front end
          res.json("Item deleted!");
        }
      })
      // error handling
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};
// exporting CRUD operations update
exports.update = {
  // property with function to update a document
  updateItem: function (req, res) {
    // storing variable from request body to search for item to update
    const updateItem = req.body.updateItem;
    // storing variable from request body to update item
    const query = req.body.updateQuery;
    // updating collection with search query and new item
    ToDoModel.updateOne(
      { toDoItem: query },
      {
        toDoItem: updateItem,
      }
    ) // promise with result of the ipdate
      .then((result) => {
        // if statement to check if documents were not found
        if (result.matchedCount == 0) {
          // sending back results to the frontend
          res.json("Item not found!");
          // else statement for when documents were'nt found
        } else {
          // sending response back to frontend
          res.json("Item Updated!");
        }
      })
      // error handling
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};
// exporting CRUD opertation to add a link
exports.link = {
  // property with function to add new link
  addLink: function (req, res) {
    // storing variable from request body to store in collection
    const link = req.body.link;
    // creating new model
    let toDo = new ToDoModel({
      // setting the link property to the description in the request body from the frontend
      linkItem: link,
    });
    // if statement to check if link is not empty
    if (link.length > 0) {
      // searching if link does not already exist
      ToDoModel.find({ linkItem: link })
        // promise with result of the find
        .then((result) => {
          // if statement to check if document already exists
          if (result.length != 0) {
            // sending back results to the frontend
            res.json("Item already exists!");
            // else statement for when document does'nt exist
          } else {
            // saving created document
            toDo
              .save()
              // promising with result from save
              .then((result) => {
                // sending back response to frontend
                res.json("Item added!");
              })
              // error handling
              .catch((error) => {
                res.status(500).json(error);
              });
          }
        })
        // error handling
        .catch((error) => {
          res.status(500).json(error);
        });
    } else {
      // sending back results to the frontend
      res.json("Item is empty!");
    }
  },
};
// exporting linkDelete CRUD operation
exports.linkDelete = {
  // property with function to delete link from collectoin
  deleteLink: function (req, res) {
    // storing linkDelete variable from the request body
    const linkDelete = req.body.linkDelete;
    // deleting document with property from request body
    ToDoModel.deleteOne({ linkItem: linkDelete })
      // promise with result of the delete
      .then((result) => {
        // if statement to check if link exists
        if (result.deletedCount == 0) {
          // sending back results to the frontend
          res.json("Item not found!");
          // else statement if item was found
        } else {
          // sending back results to the frontend
          res.json("Item deleted!");
        }
      })
      // error handling
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};
// exporting linkUpdate CRUD operation
exports.linkUpdate = {
  // property with function to update link
  updateLink: function (req, res) {
    // storing varibale from request body for updating
    const updateLink = req.body.updateLink;
    // storing varibale from request body for quering
    const query = req.body.updateLinkQuery;
    // updating collection with query and new link
    ToDoModel.updateOne(
      { linkItem: query },
      {
        linkItem: updateLink,
      }
    ) // promise with result of the update
      .then((result) => {
        // if statement checking if link is not found
        if (result.matchedCount == 0) {
          // sending back results to the frontend
          res.json("Item not found!");
          // else statement for when link is found
        } else {
          // sending back results to the frontend
          res.json("Item Updated!");
        }
      })
      // error handling
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};
