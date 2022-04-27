import TableRowButton from "./TableRowButton";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../Button/Button";

configure({ adapter: new Adapter() });

const dummyButtonText = "Click here";
const mockClick = jest.fn();

test("renders Button (child component)", () => {
  const wrapper = mount(
    <TableRowButton labelText={dummyButtonText} onClickHandler={mockClick} />
  );
  const component = wrapper.find(Button);
  expect(component.length).toBe(1);
});
