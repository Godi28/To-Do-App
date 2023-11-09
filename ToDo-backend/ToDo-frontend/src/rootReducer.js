// initializing all the states for the app
const initialState = {
  addToDoItem: "",
  response: "",
  listItems: [],
  deleteItem: "",
  updateItem: "",
  updateQuery: "",
  link: "",
  linkDelete: "",
  updateLinkQuery: "",
  updateLink: "",
};
// creating a rootreducer with states and action as parameter
function Rootreducer(state = initialState, action) {
  // switch statement for actions to perform on states
  switch (action.type) {
    // changeUpdateLinkQuery_TODO action that sets the updateLinkQuery state to input target value
    case "changeUpdateLinkQuery_TODO":
      return { ...state, updateLinkQuery: action.payload.target.value };
    // UpdateLink_TODO action that sets the response state to data returning from the backend
    case "updateLink_TODO":
      return { ...state, response: action.item };
    // changeUpdateLink_TODO action that sets the updateLink state to input target value
    case "changeUpdateLink_TODO":
      return { ...state, updateLink: action.payload.target.value };
    // read_TODO action that sets the response state to data returning from the backend
    case "read_TODOS":
      return { ...state, listItems: action.data };
    // add_TODO action that sets the response state to data returning from the backend
    case "add_TODO":
      return { ...state, response: action.item };
    // addLink_TODO action that sets the response state to data returning from the backend
    case "addLink_TODO":
      return { ...state, response: action.item };
    // delete_TODO action that sets the response state to data returning from the backend
    case "delete_TODO":
      return { ...state, response: action.item };
    // deleteLink_TODO action that sets the response state to data returning from the backend
    case "deleteLink_TODO":
      return { ...state, response: action.item };
    // update_TODO action that sets the response state to data returning from the backend
    case "update_TODO":
      return { ...state, response: action.item };
    // changeAddInput_TODO action that sets the addToDoItem state to input target value
    case "changeAddInput_TODO":
      return { ...state, addToDoItem: action.payload.target.value };
    // changeUpdateItem_TODO action that sets the updateItem state to input target value
    case "changeUpdateItem_TODO":
      return { ...state, updateItem: action.payload.target.value };
    // changeDeleteItem_TODO action that sets the deleteItem state to input target value
    case "changeDeleteItem_TODO":
      return { ...state, deleteItem: action.payload.target.value };
    // changeUpdateQuery_TODO action that sets the updateQuery state to input target value
    case "changeUpdateQuery_TODO":
      return { ...state, updateQuery: action.payload.target.value };
    // changeLinkInput_TODO action that sets the link state to input target value
    case "changeLinkInput_TODO":
      return { ...state, link: action.payload.target.value };
    // changeLinkDeleteInput_TODO action that sets the linkDelete state to input target value
    case "changeLinkDeleteInput_TODO":
      return { ...state, linkDelete: action.payload.target.value };
    // returning default state if no changes occur
    default:
      return state;
  }
}
// exporting Rootreducer to use in app
export default Rootreducer;
