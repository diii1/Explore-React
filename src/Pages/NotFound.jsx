import React from "react";
import { useHistory } from "react-router";
import classes from "./NotFound.module.css";

function NotFound() {
  const history = useHistory();
  function gotoHome() {
    history.push("/");
  }

  return (
    <div className={classes.bgImg}>
      <div className={classes.container}>
        <div className={classes.contain}>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <div className={classes.line}></div>
          <p>
            The page you are looking for might have been removed, had it's name
            changed or is temporarily unavailable
          </p>
          <button onClick={gotoHome}>Home</button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
