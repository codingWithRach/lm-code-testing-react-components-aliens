import { render, screen } from "@testing-library/react";
import TextArea from "./Textarea";

const dummyId = "linkToLabel";
const dummyName = "dummy name";
const dummyValue = "dummy value";
const mockChange = jest.fn();

test("renders text area", () => {
  render(
    <TextArea
      id={dummyId}
      name={dummyName}
      value={dummyValue}
      onChangeHandler={mockChange}
    />
  );
  const element = screen.getByRole("textbox");
  expect(element).toBeInTheDocument();
});

test("checks that textarea is only rendered once", () => {
  render(
    <TextArea
      id={dummyId}
      name={dummyName}
      value={dummyValue}
      onChangeHandler={mockChange}
    />
  );
  const elements = screen.getAllByRole("textbox");
  expect(elements.length).toEqual(1);
});
