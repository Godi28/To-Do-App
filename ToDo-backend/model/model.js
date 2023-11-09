// requiring mongoose for use in model
const mongoose = require("mongoose");

// creating a job schema with the necessary properties
let ToDoSchema = mongoose.Schema({
  // toDoItem property with string type and required set to false
  toDoItem: {
    type: String,
    required: false,
  },
  // linkItem property with string type and required set to false
  linkItem: {
    type: String,
    required: false,
  },
});
// declaring newly created scchema
let ToDo = mongoose.model("ToDo", ToDoSchema);
// exporting it for use in controller
module.exports = ToDo;
