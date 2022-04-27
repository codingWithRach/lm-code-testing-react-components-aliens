import TableRowTextarea from "./TableRowTextarea";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Label from "../Label/Label";
import TextArea from "../Textarea";

configure({ adapter: new Adapter() });

const dummyId = "link label and select";
const dummyLabelText = "dummy label";
const dummyValue = "dummy value";
const mockChange = jest.fn();

test("renders Label (child component)", () => {
  const wrapper = mount(
    <TableRowTextarea
      id={dummyId}
      labelText={dummyLabelText}
      value={dummyValue}
      onChangeHandler={mockChange}
    />
  );
  const component = wrapper.find(Label);
  expect(component.length).toBe(1);
});

test("renders Textarea (child component)", () => {
  const wrapper = mount(
    <TableRowTextarea
      id={dummyId}
      labelText={dummyLabelText}
      value={dummyValue}
      onChangeHandler={mockChange}
    />
  );
  const component = wrapper.find(TextArea);
  expect(component.length).toBe(1);
});
