import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import Welcome from "./components/Welcome";
import PhotoContainer from "./components/PhotoContainer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/:query" component={PhotoContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
