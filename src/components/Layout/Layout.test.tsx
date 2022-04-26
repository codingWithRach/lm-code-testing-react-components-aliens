import { fireEvent, render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EnteredData from "../EnteredData/EnteredData";
import W12MForm from "../W12MForm";

configure({ adapter: new Adapter() });

test("renders heading", () => {
  render(<Layout />);
  const headingElement = screen.getByRole("heading", { level: 1 });
  expect(headingElement.textContent).toContain("W-12-M");
});

test("renders form (child component)", () => {
  const wrapper = mount(<Layout />);
  const formComponent = wrapper.find(W12MForm);
  expect(formComponent.length).toBe(1);
});

test("does not render entered data if form has not been submitted", () => {
  const wrapper = mount(<Layout />);
  const dataComponent = wrapper.find(EnteredData);
  expect(dataComponent.length).toBe(0);
});

test("renders entered data if form has been submitted", () => {
  render(<Layout />);
  const buttonComponent = screen.getByRole("button");
  fireEvent.click(buttonComponent);
  const dataElement = screen.getByText("Data submitted on form:");
  expect(dataElement).toBeInTheDocument();
});
