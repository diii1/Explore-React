import React from "react";
import { render, screen } from "@testing-library/react";
import Review from "./Review";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Store/index";

describe("Contact", () => {
  test("Rendering Contact page", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Review />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/full name/i)).toBeInTheDocument();
    expect(screen.getByText(/email address/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByText(/nationality/i)).toBeInTheDocument();
    expect(screen.getByText("Thanks for contacting us!")).toBeInTheDocument();
    expect(
      screen.getByText("We will be in touch with you shortly.")
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
