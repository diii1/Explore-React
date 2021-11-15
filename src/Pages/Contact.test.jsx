import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Store/index";

describe("Contact", () => {
    test("Rendering Contact page", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Contact />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByRole("heading")).toBeInTheDocument();
        expect(screen.getByText("Full Name")).toBeInTheDocument();
        expect(screen.getByText("Email Address")).toBeInTheDocument();
        expect(screen.getByText("Phone Number")).toBeInTheDocument();
        expect(screen.getByText("Nationality")).toBeInTheDocument();
        expect(screen.getByText("Message")).toBeInTheDocument();
    });

    test("Fill input field with valid value", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Contact />
                </BrowserRouter>
            </Provider>
        );
        fireEvent.input(screen.getByTestId("fullname"), {
            target: { value: "waldofelix" },
        });
        fireEvent.input(screen.getByTestId("email"), {
            target: { value: "waldofelix2@gmail.com" },
        });
        fireEvent.input(screen.getByTestId("phonenumber"), {
            target: { value: "098123789" },
        });
        fireEvent.change(screen.getByTestId("select"), {
            target: { value: "Indonesia" },
        });
        fireEvent.input(screen.getByTestId("message"), {
            target: { value: "This is test message." },
        });

        expect(screen.getByTestId("fullname")).toHaveValue("waldofelix");
        expect(screen.getByTestId("email")).toHaveValue(
            "waldofelix2@gmail.com"
        );
        expect(screen.getByTestId("phonenumber")).toHaveValue("098123789");
        expect(screen.getByTestId("select")).toHaveValue("Indonesia");
        expect(screen.getByTestId("message")).toHaveValue(
            "This is test message."
        );
    });

    test("Fill input field with invalid value", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Contact />
                </BrowserRouter>
            </Provider>
        );

        fireEvent.input(screen.getByTestId("fullname"), {
            target: { value: "waldo10" },
        });
        fireEvent.input(screen.getByTestId("email"), {
            target: { value: "waldogmail.com" },
        });
        fireEvent.input(screen.getByTestId("phonenumber"), {
            target: { value: "124abc" },
        });
        const errFullName =
            "Name can only contain lowercase and uppercase characters!";
        const errEmail = "Please enter a valid email address!";
        const errPhoneNumber =
            "Please enter a valid phone number (can only contain numbers)";
        expect(screen.getByText(errFullName)).toBeInTheDocument();
        expect(screen.getByText(errEmail)).toBeInTheDocument();
        expect(screen.getByText(errPhoneNumber)).toBeInTheDocument();
    });

    test("Click the submit button and get redirected", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Contact />
                </BrowserRouter>
            </Provider>
        );
        fireEvent.click(screen.getByTestId("submit"));

        const errFullName = "Name can't be empty";
        const errEmail = "Email can't be empty";
        const errPhoneNumber = "Phone Number can't be empty";
        expect(screen.getByText(errFullName)).toBeInTheDocument();
        expect(screen.getByText(errEmail)).toBeInTheDocument();
        expect(screen.getByText(errPhoneNumber)).toBeInTheDocument();
    });
});
