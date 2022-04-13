import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

test("check for button text to render properly", () => {
  render(<App />);
  const buttonText = screen.getByText(`New quote!`);
  expect(buttonText).toBeInTheDocument();
});

test("checks for button class to render properly", () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("checks if the button is enabled", () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toBeEnabled();
});

test("checks if the twitter link exist", () => {
  render(<App />);
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
});

test("checks if the twitter has correct attribute", () => {
  render(<App />);
  const link = screen.getByRole("link");
  expect(link).toHaveAttribute(
    "href",
    expect.stringMatching(/https:\/\/twitter.com\/intent\/tweet\?.+/)
  );
});

test("check if quote is still there after button click", () => {
  render(<App />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const paragraph = screen.getByText(/“.*”/);
  expect(paragraph).toBeInTheDocument();
});
