import { render, screen } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import TableRowErrorMessage from "./TableRowErrorMessage";

configure({ adapter: new Adapter() });

const dummyMessage = "Dummy error message";

test("renders ErrorMessage (child component)", () => {
  const wrapper = shallow(<TableRowErrorMessage errorMessage={dummyMessage} />);
  const component = wrapper.find(ErrorMessage);
  expect(component.length).toBe(1);
});

test("uses errorText class", () => {
  const wrapper = shallow(<TableRowErrorMessage errorMessage={dummyMessage} />);
  const component = wrapper.find("tr");
  expect(component.hasClass("errorText")).toBe(true);
});
