import { render, screen } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TextArea from "./Textarea";

configure({ adapter: new Adapter() });

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

test("checks that function is called when text area is changed", () => {
  const event = {
    target: { value: "hello world" },
  } as React.ChangeEvent<HTMLTextAreaElement>;
  const element = shallow(
    <TextArea
      id={dummyId}
      name={dummyName}
      value={dummyValue}
      onChangeHandler={mockChange}
    />
  );
  element.find("textarea").simulate("change", event);
  expect(mockChange.mock.calls.length).toEqual(1);
  expect(mockChange.mock.calls[0][0].target.value).toBe("hello world");
});
