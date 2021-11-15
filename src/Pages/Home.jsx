import React from "react";
import Header from "../Components/Header/Header";
import classes from "./Home.module.css";
import girlImg from "../Assets/girl.png";
import { Link } from "react-router-dom";
import Clock from "../Components/Clock";

function Home() {
  return (
    <div className={classes.bgImg}>
      <Header />
      <Clock />
      <main className={classes.container}>
        <div className={classes.left}>
          <img className={classes["girl-img"]} src={girlImg} alt="girl-img" />
        </div>
        <div className={classes.right}>
          <p className={`${classes["text"]} ${classes["text-sm"]}`}>
            Hi, my name is
          </p>
          <h1 className={`${classes["text"]} ${classes["text-title"]}`}>
            Anne Sullivan
          </h1>
          <p className={`${classes["text"]} ${classes["text-md"]}`}>
            I build things for the web
          </p>
          <Link to="/contact">
            <button data-test-id="btn" className={classes.btn}>
              Get In Touch
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
