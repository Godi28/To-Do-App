// updateLink_TODO action handle function to be dispacted
function handleUpdateLink(item) {
  return { type: "updateLink_TODO", item };
}
// changeUpdateLinkQuery_TODO action handle function to be dispacted
function handleUpdateLinkQueryInput(event) {
  return { type: "changeUpdateLinkQuery_TODO", payload: event };
}
// changeUpdateLink_TODO action handle function to be dispacted
function handleUpdateLinkInput(event) {
  return { type: "changeUpdateLink_TODO", payload: event };
}
// changeUpdateQuery_TODO action handle function to be dispacted
function handleUpdateQueryInput(event) {
  return { type: "changeUpdateQuery_TODO", payload: event };
}
//read_TODOS action handle function to be dispacted
function handleTodos(data) {
  return { type: "read_TODOS", data };
}
// add_TODO action handle function to be dispacted
function handleAdd(item) {
  return { type: "add_TODO", item };
}
// addLink_TODO action handle function to be dispacted
function handleAddLink(item) {
  return { type: "addLink_TODO", item };
}
// delete_TODO action handle function to be dispacted
function handleDelete(item) {
  return { type: "delete_TODO", item };
}
// deleteLink_TODO action handle function to be dispacted
function handleLinkDelete(item) {
  return { type: "deleteLink_TODO", item };
}
// update_TODO action handle function to be dispacted
function handleUpdate(item) {
  return { type: "update_TODO", item };
}
// changeAddInput_TODO action handle function to be dispacted
function handleAddInput(event) {
  return { type: "changeAddInput_TODO", payload: event };
}
// changeLinkInput_TODO action handle function  to be dispacted
function handleLinkInput(event) {
  return { type: "changeLinkInput_TODO", payload: event };
}
// changeLinkDeleteInput_TODO action handle function to be dispacted
function handleLinkDeleteInput(event) {
  return { type: "changeLinkDeleteInput_TODO", payload: event };
}
// changeUpdateItem_TODO action handle function to be dispacted
function handleUpdateItemInput(event) {
  return { type: "changeUpdateItem_TODO", payload: event };
}
// changeDeleteItem_TODO action handle function to be dispacted
function handleDeleteItemInput(event) {
  return { type: "changeDeleteItem_TODO", payload: event };
}
// exporting changeUpdateLinkQuery action with event parameter to be used in app
export function changeUpdateLinkQueryInput(event) {
  return (dispatch) => {
    // dispatching the action with appropriate handle function
    return dispatch(handleUpdateLinkQueryInput(event));
  };
}
// exporting changeUpdateLinkInput action with event parameter to be used in app
export function changeUpdateLinkInput(event) {
  return (dispatch) => {
       // dispatching the action with appropriate handle function
    return dispatch(handleUpdateLinkInput(event));
  };
}
// exporting changeLinkDeleteInput action with event parameter to be used in app
export function changeLinkDeleteInput(event) {
  return (dispatch) => {
       // dispatching the action with appropriate handle function
    return dispatch(handleLinkDeleteInput(event));
  };
}
// exporting changeLinkInput action with event parameter to be used in app
export function changeLinkInput(event) {
  return (dispatch) => {
       // dispatching the action with appropriate handle function
    return dispatch(handleLinkInput(event));
  };
}
// exporting changeAddInput action with event parameter to be used in app
export function changeAddInput(event) {
  return (dispatch) => {
       // dispatching the action with appropriate handle function
    return dispatch(handleAddInput(event));
  };
}
// exporting changeAddInput action with event parameter to be used in app
export function changeUpdateQueryInput(event) {
  return (dispatch) => {
       // dispatching the action with appropriate handle function
    return dispatch(handleUpdateQueryInput(event));
  };
}
// exporting changeUpdateItemInput action with event parameter to be used in app
export function changeUpdateItemInput(event) {
  return (dispatch) => {
       // dispatching the action with appropriate handle function
    return dispatch(handleUpdateItemInput(event));
  };
}
// exporting changeDeleteInput action with event parameter to be used in app
export function changeDeleteInput(event) {
  return (dispatch) => {
       // dispatching the action with appropriate handle function
    return dispatch(handleDeleteItemInput(event));
  };
}
// exporting deleteLink action ,that houses a backend call to linkDelete route, to be used in app 
export function deleteLink(linkDelete) {
  return (dispatch) => {
    // fetch call to backend with headers, method and body
    return fetch("http://localhost:8080/linkDelete", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ linkDelete }),
    })
      .then((res) => res.json())
      // dispatching the action with appropriate handle function
      .then((data) => dispatch(handleLinkDelete(data)))
      // error handling
      .catch((err) => console.log("Something went wrong", err));
  };
}
// exporting getTodos action ,that houses a backend call to linkDelete route, to be used in app 
export function getTodos() {
  return (dispatch) => {
    // fetch call to backend with headers, method and body
    return fetch("http://localhost:8080/read", {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((res) => res.json())
      // dispatching the action with appropriate handle function
      .then((data) => dispatch(handleTodos(data)))
      // error handling
      .catch((err) => console.log("Something went wrong", err));
  };
}
// exporting addLink action ,that houses a backend call to linkDelete route, to be used in app 
export function addLink(link) {
  return (dispatch) => {
    // fetch call to backend with headers, method and body
    return fetch("http://localhost:8080/link", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ link }),
    })
      .then((res) => res.json())
      // dispatching the action with appropriate handle function
      .then((data) => dispatch(handleAddLink(data)))
      // error handling
      .catch((err) => console.log("Something went wrong", err));
  };
}
// exporting addTodo action ,that houses a backend call to linkDelete route, to be used in app 
export function addTodo(addToDoItem) {
  return (dispatch) => {
    // fetch call to backend with headers, method and body
    return fetch("http://localhost:8080/add", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ addToDoItem }),
    })
      .then((res) => res.json())
      // dispatching the action with appropriate handle function
      .then((data) => dispatch(handleAdd(data)))
      // error handling
      .catch((err) => console.log("Something went wrong", err));
  };
}
// exporting deleteTodo action ,that houses a backend call to linkDelete route, to be used in app 
export function deleteTodo(deleteItem) {
  return (dispatch) => {
    // fetch call to backend with headers, method and body
    return fetch(`http://localhost:8080/delete`, {
      method: "POST",
      // header posted in request defining the posted content type
      headers: {
        "Content-Type": "application/json",
      },
      // request body sending json string of the user object property entered by user
      body: JSON.stringify({
        deleteItem,
      }),
    })
      .then((res) => res.json())
      // dispatching the action with appropriate handle function
      .then((item) => dispatch(handleDelete(item)))
      // error handling
      .catch((err) => console.log("Something went wrong", err));
  };
}
// exporting updateTodo action ,that houses a backend call to linkDelete route, to be used in app 
export function updateTodo(updateItem, updateQuery) {
  return (dispatch) => {
    // fetch call to backend with headers, method and body
    return fetch(`http://localhost:8080/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updateItem,
        updateQuery,
      }),
    })
      .then((res) => res.json())
      // dispatching the action with appropriate handle function
      .then((data) => dispatch(handleUpdate(data)))
      // error handling
      .catch((err) => console.log("Something went wrong", err));
  };
}
// exporting updateLink action ,that houses a backend call to linkDelete route, to be used in app 
export function updateLink(updateLink, updateLinkQuery) {
  return (dispatch) => {
    // fetch call to backend with headers, method and body
    return fetch(`http://localhost:8080/linkUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updateLink,
        updateLinkQuery,
      }),
    })
      .then((res) => res.json())
      // dispatching the action with appropriate handle function
      .then((data) => dispatch(handleUpdateLink(data)))
      // error handling
      .catch((err) => console.log("Something went wrong", err));
  };
}
