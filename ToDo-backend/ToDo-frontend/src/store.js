// importing createStore,applyMiddleware and compose from redux
import { createStore, applyMiddleware, compose } from "redux";
// importing the Rootreducer from rootReducer.js
import Rootreducer from "./rootReducer.js";
// importing thunk from redux
import thunk from "redux-thunk";

// creating store to store all the apps states
const store = createStore(
  Rootreducer,
  compose(applyMiddleware(thunk)),
  window.devToolsExtension && window.devToolsExtension()
);
// exporting the store for use in the app
export default store;
