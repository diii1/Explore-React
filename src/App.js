import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import AboutApp from './pages/AboutApp';
import AboutAuthor from './pages/AboutAuthor';
import NotFound from './pages/NotFoundPage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './stores/todoStore';


function App() {
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/about/about-app" component={AboutApp} />
                        <Route path="/about/about-author" component={AboutAuthor} />
                        <Route component={NotFound} />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
  );
}

export default App;
