import React from "react";
import { render, screen } from "@testing-library/react";
import News from "./News";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

describe("News", () => {
  test("Render news page title", () => {
    render(
      <BrowserRouter>
        <News />
      </BrowserRouter>
    );
    expect(screen.getByText("News Today")).toBeInTheDocument();
  });

  test("Fetch data from API and display them", async () => {
    const articles = [
      {
        title: "Testing title 1",
        author: "TestAuthor1",
        image:
          "https://s.yimg.com/os/creatr-images/2020-03/42420680-5fa4-11ea-adfb-caae360e1fab",
      },
      {
        title: "Testing title 2",
        author: "TestAuthor2",
        image:
          "https://s.yimg.com/os/creatr-images/2020-03/42420680-5fa4-11ea-adfb-caae360e1fab",
      },
    ];
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { articles: articles } })
    );
    render(
      <BrowserRouter>
        <News />
      </BrowserRouter>
    );
    const news = await screen.findAllByTestId("new");
    expect(news).toHaveLength(2);
  });

  test("Fetch data from API and failed", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    render(
      <BrowserRouter>
        <News />
      </BrowserRouter>
    );
    const errMessage = await screen.findByText(/something went wrong.../i);
    expect(errMessage).toBeInTheDocument();
  });
});
