import React from "react";
import classes from "./New.module.css";
import Card from "../Components/Card";

function New({ author, title, image }) {
  return (
    <li data-testid="new" className={classes.list}>
      <Card>
        <div className={classes.contain}>
          <div className={classes.wrapper}>
            <img src={image} alt="new" />
          </div>
          <h3>{title}</h3>
          <p>Author : {author}</p>
        </div>
      </Card>
    </li>
  );
}

export default New;
