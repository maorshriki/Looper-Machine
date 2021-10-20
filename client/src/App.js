import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
