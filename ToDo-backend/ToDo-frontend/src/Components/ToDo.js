// importing React for use in the component
import React from "react";
// importing connect from react-redux
import { connect } from "react-redux";
// importing a variety of functions from the action creator
import {
  changeAddInput,
  changeLinkInput,
  changeUpdateLinkInput,
  changeUpdateLinkQueryInput,
  updateLink,
  addLink,
  deleteLink,
  changeLinkDeleteInput,
  changeDeleteInput,
  changeUpdateItemInput,
  changeUpdateQueryInput,
  getTodos,
  updateTodo,
  addTodo,
  deleteTodo,
} from "../actionCreator";
// importing redux store from store.js
import store from "../store.js";

//ToDo component that asks for user input to do CRUD operations for the To Do list
class ToDo extends React.Component {
  /*
   * constructor with resprective handle functions
   * @param props properties
   */
  constructor(props) {
    super(props);
    this.state = {};
    // function to handle add input changes binded to the key word 'this'
    this.handleAdd = this.handleAdd.bind(this);
    // function to handle the submit for adding items binded to the key word 'this'
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    // function handleList for getting to do items binded to to the key word 'this
    this.handleList = this.handleList.bind(this);
    // function handleDelete to handle input changes for delete binded to to the key word 'this
    this.handleDelete = this.handleDelete.bind(this);
    // function to handle the submit for deleting items binded to the key word 'this'
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    // function to handle the submit for updating  items binded to the key word 'this'
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    // function to handle update input changes binded to the key word 'this'
    this.handleUpdate = this.handleUpdate.bind(this);
    // function to handle query input changes binded to the key word 'this'
    this.handleUpdateQuery = this.handleUpdateQuery.bind(this);
    // function handleLink that handles the link add input binded to to the key word 'this
    this.handleLink = this.handleLink.bind(this);
    // function to handle the submit for adding of links binded to the key word 'this'
    this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    // function handleDeleteLink that handles delete link input changes binded to to the key word 'this
    this.handleLinkDelete = this.handleLinkDelete.bind(this);
    // function to handle the submit for deleting of links binded to the key word 'this'
    this.handleLinkDeleteSubmit = this.handleLinkDeleteSubmit.bind(this);
    // function handleLunkUpdateQuery to handle query input changes binded to to the key word 'this
    this.handleLinkUpdateQuery = this.handleLinkUpdateQuery.bind(this);
    // function handleLinkUpdate to handle update input changes binded to to the key word 'this
    this.handleLinkUpdate = this.handleLinkUpdate.bind(this);
    // function handleLinkUpdateSubmit that handles the submit for the link update binded to to the key word 'this
    this.handleLinkUpdateSubmit = this.handleLinkUpdateSubmit.bind(this);
  }

  // function to handle input changes for the query to update the link with an event as a parameter
  handleLinkUpdateQuery(e) {
    // calling function from action creator to manage input with event passed to it
    this.props.changeUpdateLinkQueryInput(e);
  }
  // function to handle input changes for the to do item update with an event as a parameter
  handleLinkUpdate(e) {
    // calling function from action creator to manage input with event passed to it
    this.props.changeUpdateLinkInput(e);
  }
  // function to handle input changes for the delete query with an event as a parameter
  handleLinkDelete(e) {
    // calling function from action creator to manage input with event passed to it
    this.props.changeLinkDeleteInput(e);
  }
  // function to handle input changes for the adding of the link and event as a parameter
  handleLink(e) {
    // calling function from action creator to manage input with event passed to it
    this.props.changeLinkInput(e);
  }

  // function to handle input changes for the to do item to be updated  with event as a parameter
  handleUpdate(e) {
    // calling function from action creator to manage input with event passed to it
    this.props.changeUpdateItemInput(e);
  }

  // function to handle input changes for the query to update the to do item with event as a parameter
  handleUpdateQuery(e) {
    // calling function from action creator to manage input with event passed to it
    this.props.changeUpdateQueryInput(e);
  }
  // function to handle input changes for the adding of items with event as a parameter
  handleAdd(e) {
    // calling function from action creator to manage input with event passed to it
    this.props.changeAddInput(e);
  }

  // function to handle input changes for the deleting of items with event as a parameter
  handleDelete(e) {
    // calling function from action creator to manage input with event passed to it
    this.props.changeDeleteInput(e);
  }
  // function to call another function from the action creator to fetch to do item data from the api
  handleList(e) {
    // preventing browsers default behaviour
    e.preventDefault();
    // calling function from the action creator to list to do items
    this.props.getTodos();
  }
  // function to call another function from the action creator to delete to do items
  handleLinkDeleteSubmit(e) {
    // preventing browsers default behaviour
    e.preventDefault();
    // storing linkDelete state from the state store in a variable
    const linkDelete = store.getState().linkDelete;
    // calling function to delete list from the action creator with linkDelete variable as a parameter
    this.props.deleteLink(linkDelete);
  }
  // function to call another function from the action creator to add links to the to do list
  handleLinkSubmit(e) {
    // preventing browsers default behaviour
    e.preventDefault();
    // storing link state from the state store in a variable
    const link = store.getState().link;
    // calling function to add link from the action creator with link variable as a parameter
    this.props.addLink(link);
  }

  // function calling another function from the action creator to add to do items with an event as a parameter
  handleAddSubmit(e) {
    // preventing browsers default behaviour
    e.preventDefault();
    // storing addToDoItem state from the state store in a variable
    const addToDoItem = store.getState().addToDoItem;
    // calling function to add to do items from the action creator with addToDoItem variable as a parameter
    this.props.addTodo(addToDoItem);
  }
  // function that calls another function from the action creator to update to do items with event as a parameter
  handleUpdateSubmit(e) {
    // preventing browsers default behaviour
    e.preventDefault();
    // storing updateItem state from the state store in a variable
    const updateItem = store.getState().updateItem;
    // storing updateQuery state from the state store in a variable
    const updateQuery = store.getState().updateQuery;
    // calling function to update to do item with updateItem and updateQuery as a parameter
    this.props.updateTodo(updateItem, updateQuery);
  }

  // function that calls another function from the action creator to update links with event as a parameter
  handleLinkUpdateSubmit(e) {
    // preventing browsers default behaviour
    e.preventDefault();
    // storing updateLink state from the state store in a variable
    const updateLink = store.getState().updateLink;
    // storing updateLinkQuery state from the state store in a variable
    const updateLinkQuery = store.getState().updateLinkQuery;
    // calling function to update links item with updateLink and updateLinkQuery as a parameter
    this.props.updateLink(updateLink, updateLinkQuery);
  }

  // function that calls another function from the action creator to delete to do items with event as a parameter
  handleDeleteSubmit(e) {
    // preventing browsers default behaviour
    e.preventDefault();
    // storing deleteItem state from the state store in a variable
    const deleteItem = store.getState().deleteItem;
    // calling function to delete to do items from action creator with variable deleteItem as a parameter
    this.props.deleteTodo(deleteItem);
  }

  render() {
    // storing addToDoItem state from the state store in a variable to use for rendering
    let addToDoItem = store.getState().addToDoItem;
    // storing response state from the state store in a variable to use for rendering
    let response = store.getState().response;
    // storing listItem state from the state store in a variable to use for rendering
    let listItem = store.getState().listItems;
    // storing deleteItem state from the state store in a variable to use for rendering
    let deleteItem = store.getState().deleteItem;
    // storing updateItem state from the state store in a variable to use for rendering
    let updateItem = store.getState().updateItem;
    // storing updateQuery state from the state store in a variable to use for rendering
    let updateQuery = store.getState().updateQuery;
    // storing link state from the state store in a variable to use for rendering
    let link = store.getState().link;
    // storing linkDelete state from the state store in a variable to use for rendering
    let linkDelete = store.getState().linkDelete;
    // storing updateLink state from the state store in a variable to use for rendering
    let updateLink = store.getState().updateLink;
    // storing updateLinkQuery state from the state store in a variable to use for rendering
    let updateLinkQuery = store.getState().updateLinkQuery;
    // html to print the form for to do app that calls the respective functions appropriately with states used appropriately
    return (
      <div>
        <h1>To do List</h1>
        <p>Response: {response}</p>
        <table>
          <tr>
            <th>Description</th>
          </tr>

          {listItem.map(function (data) {
            return (
              <tr>
                <td>
                  <input key={data} type="checkbox" value={data.toDoItem} />
                  {data.toDoItem}
                  <a rel="noreferrer" target="_blank" href={data.linkItem}>
                    {data.linkItem}
                  </a>
                </td>
              </tr>
            );
          })}
        </table>
        <form onSubmit={this.handleList}>
          <button id="post" type="submit">
            Click To View To Do List
          </button>
        </form>
        <form onSubmit={this.handleAddSubmit}>
          <h5>Enter To do item:</h5>
          <input
            className="inp1"
            type="text"
            placeholder="enter to do item"
            value={addToDoItem}
            onChange={this.handleAdd}
          />
          <button id="post" type="submit">
            Add To Do Item
          </button>
        </form>
        <form onSubmit={this.handleDeleteSubmit}>
          <h5>Enter item To Delete:</h5>
          <input
            className="inp1"
            type="text"
            placeholder="enter item to delete"
            value={deleteItem}
            onChange={this.handleDelete}
          />
          <button id="post" type="submit">
            Delete Item
          </button>
        </form>
        <form onSubmit={this.handleUpdateSubmit}>
          <h5>Enter item To Update:</h5>
          <input
            className="inp1"
            type="text"
            placeholder="enter item to update"
            value={updateQuery}
            onChange={this.handleUpdateQuery}
          />
          <h5>Enter New Item To Update To:</h5>
          <input
            className="inp1"
            type="text"
            placeholder="enter item to update to"
            value={updateItem}
            onChange={this.handleUpdate}
          />
          <button id="post" type="submit">
            Update Item
          </button>
        </form>
        <form onSubmit={this.handleLinkSubmit}>
          <h5>Enter Link To Add:</h5>
          <input
            className="inp1"
            type="text"
            placeholder="enter link to add"
            value={link}
            onChange={this.handleLink}
          />
          <button id="post" type="submit">
            Add Link
          </button>
        </form>
        <form onSubmit={this.handleLinkDeleteSubmit}>
          <h5>Enter Link To Delete:</h5>
          <input
            className="inp1"
            type="text"
            placeholder="enter link to add"
            value={linkDelete}
            onChange={this.handleLinkDelete}
          />
          <button id="post" type="submit">
            Delete Link
          </button>
        </form>
        <form onSubmit={this.handleLinkUpdateSubmit}>
          <h5>Enter Link To Update:</h5>
          <input
            className="inp1"
            type="text"
            placeholder="enter link to update"
            value={updateLinkQuery}
            onChange={this.handleLinkUpdateQuery}
          />
          <h5>Enter New Link To Update To:</h5>
          <input
            className="inp1"
            id="end2"
            type="text"
            placeholder="enter link to update to"
            value={updateLink}
            onChange={this.handleLinkUpdate}
          />
          <button id="end1" type="submit">
            Update Link
          </button>
        </form>
      </div>
    );
  }
}
// mapping all the apps states to redux
function mapStateToProp(reduxState) {
  return {
    addToDoItem: reduxState.addToDoItem,
    response: reduxState.response,
    listItems: reduxState.listItems,
    deleteItem: reduxState.deleteItem,
    updateItem: reduxState.updateItem,
    updateQuery: reduxState.updateQuery,
    link: reduxState.link,
    linkDelete: reduxState.linkDelete,
    updateLinkQuery: reduxState.updateLinkQuery,
    updateLink: reduxState.updateLink,
  };
}
// mapping all the apps action creator functions
const mapDispatch = {
  changeAddInput,
  changeLinkInput,
  addLink,
  changeUpdateLinkQueryInput,
  changeUpdateLinkInput,
  updateLink,
  deleteLink,
  changeLinkDeleteInput,
  changeUpdateItemInput,
  changeUpdateQueryInput,
  getTodos,
  updateTodo,
  addTodo,
  changeDeleteInput,
  deleteTodo,
};
// connecting app to redux and exporting ToDO component for rendering
export default connect(mapStateToProp, mapDispatch)(ToDo);
