import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { persistor, store } from "./Store";
import Review from "./Pages/Review";
import News from "./Pages/News";
import { PersistGate } from "redux-persist/integration/react";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/review" exact component={Review} />
            <Route path="/news" exact component={News} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
