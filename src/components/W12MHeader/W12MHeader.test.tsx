import { render, screen } from "@testing-library/react";
import W12MHeader from "./W12MHeader";

test("renders header text", () => {
  render(<W12MHeader />);
  const someHeaderText = screen.getByText(
    /Each species may only submit ONE W-12-M form./i
  );
  expect(someHeaderText).toBeInTheDocument();
});

test("renders text in a list", () => {
  render(<W12MHeader />);
  const element = screen.getByRole("list");
  expect(element).toBeInTheDocument();
});
