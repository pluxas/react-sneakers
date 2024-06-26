import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/Store";
import App from "./App";
import "./index.scss";
import './firebase'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </Suspense>
  </React.StrictMode>
);
