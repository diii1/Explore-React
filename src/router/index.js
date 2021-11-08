import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import About from "../pages/About";
import AboutApp from "../pages/AboutApp";
import AboutAuthor from "../pages/AboutAuthor";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path='/'>
                <Navbar />
                <Home />
            </Route>
            <Route exact path='about'>
                <Navbar author={"About Author"} app={"About App"}/>
                <About />
            </Route>
            <Route exact path='about-app'>
                <Navbar author={"About Author"} app={"About App"}/>
                <AboutApp />
            </Route>
            <Route exact path='about-author'>
                <Navbar author={"About Author"} app={"About App"}/>
                <AboutAuthor />
            </Route>
            <Route path='*'>
                <NotFoundPage />
            </Route>
        </Routes>
    )
}

export default Router