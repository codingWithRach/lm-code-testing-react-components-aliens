import { render, screen } from "@testing-library/react";
import EnteredData from "./EnteredData";

test("renders heading", () => {
  render(<EnteredData />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement.textContent).toEqual("Data submitted on form:");
});
