import TableRowSelect from "./TableRowSelect";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Label from "../Label/Label";
import Select from "../Select/Select";

configure({ adapter: new Adapter() });

const dummyId = "link label and select";
const dummyLabelText = "dummy label";
const dummyValues = ["Value One", "Value Two"];
const mockChange = jest.fn();

test("renders Label (child component)", () => {
  const wrapper = shallow(
    <TableRowSelect
      id={dummyId}
      labelText={dummyLabelText}
      values={dummyValues}
      onChangeHandler={mockChange}
    />
  );
  const component = wrapper.find(Label);
  expect(component.length).toBe(1);
});

test("renders Select (child component)", () => {
  const wrapper = shallow(
    <TableRowSelect
      id={dummyId}
      labelText={dummyLabelText}
      values={dummyValues}
      onChangeHandler={mockChange}
    />
  );
  const component = wrapper.find(Select);
  expect(component.length).toBe(1);
});
