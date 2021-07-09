import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import PhotoContainer from "./components/PhotoContainer";

import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <SearchForm />
          <Nav />

          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/:query" component={PhotoContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
