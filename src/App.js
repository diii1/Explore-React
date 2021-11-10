import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import Home from './component/Home';
import { store, persistor } from './store/store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Navbar />
            </Router>
            <Home />
          </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
