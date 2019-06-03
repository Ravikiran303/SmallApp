import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cart } from "./Cart/Cart";
import { Products } from "./Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
