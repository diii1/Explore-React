import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FormPage from "./FormPage";

describe("FormPage", () => {
    test("renders App component", () => {
        render(<FormPage />);
        // screen.debug();
        expect(screen.getByText(/Formulir Buku Baru/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Judul/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Pengarang/)).toBeInTheDocument();
        expect(screen.getByText(/Submit/)).toBeInTheDocument();
    });

    test("input text for judul and pengarang", () => {
        render(<FormPage />);
        fireEvent.input(screen.getByRole("textbox", { name: /judul/i }), {
            target: { value: "Buku Hebat" },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /pengarang/i }), {
            target: { value: "Dr Hahaha" },
        });
        expect(screen.getByDisplayValue("Buku Hebat")).toBeInTheDocument();
        expect(screen.getByLabelText(/Judul/)).toHaveValue("Buku Hebat");
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Dr Hahaha");
    });

    test("input text for pengarang with number", () => {
        render(<FormPage />);
        fireEvent.input(screen.getByRole("textbox", { name: /judul/i }), {
            target: { value: "Buku Hebat" },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /pengarang/i }), {
            target: { value: "Dr H4h4" },
        });
        expect(
            screen.getByText("Nama Pengarang Harus Berupa Huruf")
        ).toBeInTheDocument();
        expect(screen.getByLabelText(/Judul/)).toHaveValue("Buku Hebat");
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Dr H4h4");
    });

    test("submit button", () => {
        render(<FormPage />);
        fireEvent.input(screen.getByRole("textbox", { name: /judul/i }), {
            target: { value: "Buku Hebat" },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /pengarang/i }), {
            target: { value: "Dr Hohoho" },
        });
        fireEvent.submit(screen.getByText("Submit"));
        expect(screen.getByLabelText(/Judul/)).toHaveValue("");
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("");
    });
});
