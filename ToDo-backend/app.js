// requiring express to use for the backend
const express = require("express");
// declaring app as the required express function
const app = express();
// requiring helmet for use in server
const helmet = require("helmet");
// requiring mongoose to use in express server
const mongoose = require("mongoose");
// requiring corse to use in server
const cors = require("cors");
// requiring toDO controller to call functions for the backend 
const controller = require("./controller/toDo.controller.js");
// declaring connection uri , to connect to mongodDB, as a variable
const uri =
  "mongodb+srv://Godi28:1Ogodiseng2@my-first-cluster.zti3c4x.mongodb.net/?retryWrites=true&w=majority";

// connecting to MongoDB
mongoose
  // using uri to connect
  .connect(uri)
  // promise returing connection results and listening on port 4000 then dispalying connection message
  .then((result) => app.listen(4000, () => console.log("Listening engaged")))
  // error handling for the connection
  .catch((err) => console.log(err));

// using cors middleware
app.use(cors());
// using helmet middleware
app.use(helmet());
// middleware to parse JSON in post request
app.use(express.json());
// add post route that has a callback function from the controller to create new document for to do items 
app.post("/add", controller.create.newItem);
// read post route that has a callback function from the controller to read all documents
app.get("/read", controller.read.readItem);
// link post route that has a callback function from the controller to create new document for links
app.post("/link", controller.link.addLink);
// linkUpdate post route that has a callback function from the controller to update link documents
app.post("/linkUpdate", controller.linkUpdate.updateLink);
// linkDelete post route that has a callback function from the controller to delete link documents
app.post("/linkDelete", controller.linkDelete.deleteLink);
// delete post route that has a callback function from the controller to delete to do documents
app.post("/delete", controller.delete.deleteItem);
// update post route that has a callback function from the controller to update to do documents
app.post("/update", controller.update.updateItem);
// setting the server to listen on port 8080
app.listen(8080, function () {
  // printing listening message to the console
  console.log("Express listening on port 8080!");
});
