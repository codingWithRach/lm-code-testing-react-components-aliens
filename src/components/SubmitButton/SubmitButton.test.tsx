import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

const dummyButtonText = "Click here";

test("renders element with expected text", () => {
  render(<SubmitButton labelText={dummyButtonText} />);
  const buttonElement = screen.getByText(dummyButtonText);
  expect(buttonElement).toBeInTheDocument();
});

test("checks that button with this text is rendered once", () => {
  render(<SubmitButton labelText={dummyButtonText} />);
  const buttonElements = screen.getAllByText(dummyButtonText);
  expect(buttonElements.length).toEqual(1);
});

test("checks that element is a button", () => {
  render(<SubmitButton labelText={dummyButtonText} />);
  const buttonElement = screen
    .getAllByRole("button")
    .find((b) => b.textContent === dummyButtonText);
  expect(buttonElement).toHaveAccessibleName(dummyButtonText);
});
