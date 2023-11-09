// importing react
import React from "react";
// importing reactDOM
import ReactDOM from "react-dom/client";
// importing SCSS from index.SCSS for styling the app
import "./SCSS/index.scss";
// importing the ToDo component for rendering
import ToDo from "./Components/ToDo.js";
// importing webvitals
import reportWebVitals from "./WebVitals/reportWebVitals";
// importing redux store from store.js
import store from "./store.js";
// importinf redux Provider to make redux accessible to the ToDo component
import { Provider } from "react-redux";
// creating root and referencing it for rending in index html
const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering the ToDo component and wrapping it with a Provider with store passed to it as props 
root.render(
  <Provider store={store}>
    <ToDo />
  </Provider>
);
// calling reportWebVitals function 
reportWebVitals();
