
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./stores/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='container'>
          <Home />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;