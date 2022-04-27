import TableRowInput from "./TableRowInput";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";

configure({ adapter: new Adapter() });

const dummyId = "link label and input";
const dummyLabelText = "dummy label";
const dummyValue = "dummy value";
const mockChange = jest.fn();

test("renders Label (child component)", () => {
  const wrapper = shallow(
    <TableRowInput
      id={dummyId}
      labelText={dummyLabelText}
      value={dummyValue}
      onChangeHandler={mockChange}
    />
  );
  const component = wrapper.find(Label);
  expect(component.length).toBe(1);
});

test("renders TextInput (child component)", () => {
  const wrapper = shallow(
    <TableRowInput
      id={dummyId}
      labelText={dummyLabelText}
      value={dummyValue}
      onChangeHandler={mockChange}
    />
  );
  const component = wrapper.find(TextInput);
  expect(component.length).toBe(1);
});
