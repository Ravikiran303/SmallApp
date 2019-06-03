import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Cart } from "./Cart/Cart";
import { Products } from "./Products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
