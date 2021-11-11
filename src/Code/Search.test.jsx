import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

jest.mock("axios");

describe("Search", () => {
  test("fetch stories from an mock API and display it", async () => {
    const stories = [
      { objectID: 1, title: "object 1" },
      { objectID: 2, title: "object 2" },
      { objectID: 2, title: "object 3" },
      { objectID: 2, title: "object 4" },
    ];
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<Search />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(4);
  });

  test("fetch stories from an mock API and fail to get the data the display error", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<Search />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const errorMsg = await screen.findByText("Ada yang error ...");
    expect(errorMsg).toBeInTheDocument();
  });

  test("fetch stories from an mock API and get 0 length array", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: [] } })
    );

    render(<Search />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    expect(screen.queryByText("Ada yang error ...")).not.toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
