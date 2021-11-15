import React from "react";
import classes from "./Review.module.css";
import line from "../Assets/line.png";
import footer from "../Assets/footerl.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function News() {
    const formData = useSelector((state) => state.formData.formData);
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <ul>
                    <li className={classes.data}>
                        <p>Full Name</p>
                        <p>: {formData.fullName}</p>
                    </li>
                    <li className={classes.data}>
                        <p>Email Address</p>
                        <p>: {formData.email}</p>
                    </li>
                    <li className={classes.data}>
                        <p>Phone Number</p>
                        <p>: {formData.phoneNumber}</p>
                    </li>
                    <li className={classes.data}>
                        <p>Nationality</p>
                        <p>: {formData.nationality}</p>
                    </li>
                    <li className={classes.data}>
                        <p>
                            <i>{formData.message}</i>
                        </p>
                    </li>
                </ul>
                <div className={classes.divider}>
                    <img src={line} alt="line" />
                </div>
                <div className={`${classes.feedback} ${classes.fullwidth}`}>
                    <p>Thanks for contacting us!</p>
                    <p>We will be in touch with you shortly.</p>
                </div>
                <div className={classes.fullwidth}>
                    <Link to="/">
                        <button className={classes.btn}>Home</button>
                    </Link>
                </div>
            </div>
            <footer className={classes.footer}>
                <img src={footer} alt="footer" />
            </footer>
        </div>
    );
}

export default News;
