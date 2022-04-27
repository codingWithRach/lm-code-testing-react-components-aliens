import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TableRowButton from "./TableRowButton";

const dummyButtonText = "Click here";
const mockClick = jest.fn();

test("renders element with expected text", () => {
  render(
    <TableRowButton labelText={dummyButtonText} onClickHandler={mockClick} />
  );
  const buttonElement = screen.getByText(dummyButtonText);
  expect(buttonElement).toBeInTheDocument();
});

test("checks that button with this text is rendered once", () => {
  render(
    <TableRowButton labelText={dummyButtonText} onClickHandler={mockClick} />
  );
  const buttonElements = screen.getAllByText(dummyButtonText);
  expect(buttonElements.length).toEqual(1);
});

test("checks that element is a button", () => {
  render(
    <TableRowButton labelText={dummyButtonText} onClickHandler={mockClick} />
  );
  const buttonElement = screen
    .getAllByRole("button")
    .find((b) => b.textContent === dummyButtonText);
  expect(buttonElement).toHaveAccessibleName(dummyButtonText);
});

test("checks that function is called when button is clicked", () => {
  render(
    <TableRowButton labelText={dummyButtonText} onClickHandler={mockClick} />
  );
  const buttonElement = screen
    .getAllByRole("button")
    .find((b) => b.textContent === dummyButtonText);
  if (buttonElement) {
    userEvent.click(buttonElement);
  }
  expect(mockClick.mock.calls.length).toEqual(1);
});