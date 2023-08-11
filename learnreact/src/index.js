import React from "react";
import ReactDOM from "react-dom/client";
// import Counter from "./Counter"
// import LoadData from "./LoadData";
// import Todo from "./Todo";
// import Home from './tesla/Home'
// import App from "./axiosMagic/App";
// import App from "./netflix/App";
// import App from "./mouseMove/App";

// import App from "./ecommerce/App";
// import Home from "./routing/Home";

// import App from './reactImageFetcher/components/App'
// import App from './liftingStateUp/App'
// import App from './ecommerceContext/App'
// import App from './todoListOld/components/App'
// import UseRef from './ref/UseRef'
// import App from './portals/App'
import Counter from "./reduxCounterExample/Counter";
import { Provider } from "react-redux";
import { reduxStore } from "./reduxCounterExample/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <Counter />
  </Provider>
);
