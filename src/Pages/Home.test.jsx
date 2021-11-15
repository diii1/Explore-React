import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  test("Render Home page component", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText("Hi, my name is")).toBeInTheDocument();
    expect(screen.getByText("Anne Sullivan")).toBeInTheDocument();
    expect(screen.getByText("I build things for the web")).toBeInTheDocument();
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
    expect(screen.getByText("HOME")).toBeInTheDocument();
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
    expect(screen.getByText("NEWS")).toBeInTheDocument();
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
  });
});
