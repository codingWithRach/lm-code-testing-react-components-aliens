import { render, screen } from "@testing-library/react";
import Label from "./Label";

const dummyId = "linkToInput";
const dummyLabelText = "Hello world";

test("renders label with expected text", () => {
  render(<Label forID={dummyId} labelText={dummyLabelText} />);
  const labelElement = screen.getByText(dummyLabelText);
  expect(labelElement).toBeInTheDocument();
});

test("checks that label is only rendered once", () => {
  render(<Label forID={dummyId} labelText={dummyLabelText} />);
  const labelElements = screen.getAllByText(dummyLabelText);
  expect(labelElements.length).toEqual(1);
});
