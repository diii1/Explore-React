import React, { useState } from "react";
import classes from "./Contact.module.css";
import logo from "../Assets/logo-contact.png";
import {
  validateName,
  validateEmail,
  validatePhoneNumber,
} from "../Validation/index";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addFormData } from "../Store/formDataSlice";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    message: "",
  });
  const [error, setError] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "fullName") {
      const valFullName = validateName(value);
      if (!valFullName.status) {
        setError((prev) => ({ ...prev, [name]: valFullName.message }));
      } else {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
    }

    if (name === "email") {
      const valEmail = validateEmail(value);
      if (!valEmail.status) {
        setError((prev) => ({ ...prev, [name]: valEmail.message }));
      } else {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
    }

    if (name === "phoneNumber") {
      const valPhoneNumber = validatePhoneNumber(value);
      if (!valPhoneNumber.status) {
        setError((prev) => ({ ...prev, [name]: valPhoneNumber.message }));
      } else {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
    }

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formIsValid = true;
    const valFullName = validateName(formData.fullName);
    if (!valFullName.status) {
      setError((prev) => ({ ...prev, fullName: valFullName.message }));
      formIsValid = false;
    }

    const valEmail = validateEmail(formData.email);
    if (!valEmail.status) {
      setError((prev) => ({ ...prev, email: valEmail.message }));
      formIsValid = false;
    }

    const valPhoneNumber = validatePhoneNumber(formData.phoneNumber);
    if (!valPhoneNumber.status) {
      setError((prev) => ({ ...prev, phoneNumber: valPhoneNumber.message }));
      formIsValid = false;
    }

    if (formIsValid) {
      dispatch(addFormData(formData));
      history.push("/review");
    }
  }

  return (
    <div className={classes.myContainer}>
      <div className={classes.left}>
        <div className={classes.inner}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={classes.right}>
        <form onSubmit={handleSubmit} action="">
          <h1>Contact Us</h1>
          <div className={classes["form-control"]}>
            <label htmlFor="fullName" className={classes.required}>
              Full Name
            </label>
            <input
              aria-labelledby="fullName"
              data-testid="fullname"
              name="fullName"
              type="text"
              onChange={handleChange}
              placeholder="Your Full Name Here..."
              value={formData.fullName}
            />
            <p className={classes.error}>{error.fullName}</p>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="email" className={classes.required}>
              Email Address
            </label>
            <input
              data-testid="email"
              name="email"
              onChange={handleChange}
              placeholder="example@domail.com"
              value={formData.email}
              type="text"
            />
            <p className={classes.error}>{error.email}</p>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="phoneNumber" className={classes["required"]}>
              Phone Number
            </label>
            <input
              data-testid="phonenumber"
              name="phoneNumber"
              onChange={handleChange}
              placeholder="08573890xxxxx"
              value={formData.phoneNumber}
              type="text"
            />
            <p className={classes.error}>{error.phoneNumber}</p>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="nationality">Nationality</label>
            <select
              data-testid="select"
              name="nationality"
              onChange={handleChange}
              value={formData.nationality}
              id=""
            >
              <option value="">Selected</option>
              <option value="Indonesia">Indonesia</option>
              <option value="French">French</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="message">Message</label>
            <textarea
              data-testid="message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              placeholder="Your Full Name Here..."
            ></textarea>
          </div>
          <button data-testid="submit" className={classes["btn"]} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
