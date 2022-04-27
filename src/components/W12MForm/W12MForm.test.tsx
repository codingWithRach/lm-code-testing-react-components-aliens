import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { FormData } from "../../data/FormData";
import TableRowSubmitButton from "../TableRowSubmitButton/TableRowSubmitButton";
import TableRowInput from "../TableRowInput/TableRowInput";
import TableRowSelect from "../TableRowSelect/TableRowSelect";
import TableRowTextarea from "../TableRowTextArea/TableRowTextarea";
import W12MHeader from "../W12MHeader/W12MHeader";
import W12MForm from "./W12MForm";
import SubmitButton from "../SubmitButton/SubmitButton";

configure({ adapter: new Adapter() });

const dummyData: FormData = {
  speciesName: "Hippo",
  planetName: "Earth",
  numberOfBeings: "564654",
  twoPlusTwo: "4",
  reasonForSparing: "Gorgeous creatures",
  submitted: false,
};
const mockFunction = jest.fn();

test("renders form element", () => {
  const { container } = render(
    <W12MForm formData={dummyData} handleFormData={mockFunction} />
  );
  expect(container.firstChild).toHaveClass("w12MForm");
});

test("renders W12MHeader (child component)", () => {
  const wrapper = mount(
    <W12MForm formData={dummyData} handleFormData={mockFunction} />
  );
  const component = wrapper.find(W12MHeader);
  expect(component.length).toBe(1);
});

test("renders 3 instances of TableRowInput (child component)", () => {
  const wrapper = mount(
    <W12MForm formData={dummyData} handleFormData={mockFunction} />
  );
  const component = wrapper.find(TableRowInput);
  expect(component.length).toBe(3);
});

test("renders 1 instance of TableRowSelect (child component)", () => {
  const wrapper = mount(
    <W12MForm formData={dummyData} handleFormData={mockFunction} />
  );
  const component = wrapper.find(TableRowSelect);
  expect(component.length).toBe(1);
});

test("renders 1 instance of TableRowTextArea (child component)", () => {
  const wrapper = mount(
    <W12MForm formData={dummyData} handleFormData={mockFunction} />
  );
  const component = wrapper.find(TableRowTextarea);
  expect(component.length).toBe(1);
});

test("renders 1 instance of TableRowSubmitButton (child component)", () => {
  const wrapper = mount(
    <W12MForm formData={dummyData} handleFormData={mockFunction} />
  );
  const component = wrapper.find(TableRowSubmitButton);
  expect(component.length).toBe(1);
});

test("renders components in a table", () => {
  render(<W12MForm formData={dummyData} handleFormData={mockFunction} />);
  const element = screen.getByRole("table");
  expect(element).toBeInTheDocument();
});

// test("calls function when form submitted", () => {
//   const submitFunction = jest.fn();
//   const fakeEvent = { preventDefault: () => {} };
//   const component = shallow(
//     <W12MForm formData={dummyData} handleFormData={mockFunction} />
//   );
//   component.find("form").simulate("submit", fakeEvent);
//   expect(submitFunction).toHaveBeenCalled();
// });

test("when the species name is valid, doesn't render error message", async () => {
  render(<W12MForm formData={dummyData} handleFormData={mockFunction} />);
  const element = screen.getByLabelText("Species Name");
  await userEvent.type(element, "valid");
  const buttonComponent = screen.getByRole("button");
  fireEvent.click(buttonComponent);
  const errorElement = screen.queryByText(/Species Name must be/i, {
    exact: false,
  });
  expect(errorElement).not.toBeInTheDocument();
});

// test("when the species name is invalid, renders error message", async () => {
//   render(<W12MForm formData={dummyData} handleFormData={mockFunction} />);
//   const element = screen.getByLabelText("Species Name");
//   fireEvent.change(element, { target: { value: "i n v a l i d" } });
//   const buttonComponent = screen.getByRole("button");
//   fireEvent.click(buttonComponent);
//   const errorElement = screen.getByText(/Species Name must be/i, {
//     exact: false,
//   });
//   expect(errorElement).toBeInTheDocument();
// });

// test("when the species name is invalid, renders error message", async () => {
//   render(<W12MForm formData={dummyData} handleFormData={mockFunction} />);
//   const element = screen.getByLabelText("Species Name");
//   await userEvent.type(element, "i n v a l i d");
//   const buttonComponent = screen.getByRole("button");
//   fireEvent.click(buttonComponent);
//   const errorElement = screen.queryByText(/Species Name must be/i, {
//     exact: false,
//   });
//   expect(errorElement).toBeInTheDocument();
// });
