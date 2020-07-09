import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import UserPage from "../UserPage";
import Header from "../Header";
import GenrePage from "../GenrePage";
import {
  HOME_PATH,
  SAVED_BOOKS_PATH,
  GENRE_PATH,
} from "../../constants/RouterConstants";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Switch>
          <Route path={HOME_PATH} exact component={HomePage} />
          <Route path={SAVED_BOOKS_PATH} component={UserPage} />
          <Route path={GENRE_PATH} component={GenrePage} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
