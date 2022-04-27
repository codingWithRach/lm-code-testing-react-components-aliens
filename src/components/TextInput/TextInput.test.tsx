import { render, screen } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TextInput from "./TextInput";

configure({ adapter: new Adapter() });

const dummyId = "linkToLabel";
const dummyValue = "dummy value";
const mockChange = jest.fn();

test("renders input element", () => {
  render(
    <TextInput id={dummyId} value={dummyValue} onChangeHandler={mockChange} />
  );
  const element = screen.getByRole("textbox");
  expect(element).toBeInTheDocument();
});

test("checks that input is only rendered once", () => {
  render(
    <TextInput id={dummyId} value={dummyValue} onChangeHandler={mockChange} />
  );
  const elements = screen.getAllByRole("textbox");
  expect(elements.length).toEqual(1);
});

test("checks that function is called when text area is changed", () => {
  const event = {
    target: { value: "hello world" },
  } as React.ChangeEvent<HTMLTextAreaElement>;
  const element = shallow(
    <TextInput id={dummyId} value={dummyValue} onChangeHandler={mockChange} />
  );
  element.find("input").simulate("change", event);
  expect(mockChange.mock.calls.length).toEqual(1);
  expect(mockChange.mock.calls[0][0].target.value).toBe("hello world");
});
