import TableRowButton from "./TableRowButton";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../Button/Button";

configure({ adapter: new Adapter() });

const dummyButtonText = "Click here";
const mockClick = jest.fn();

test("renders Button (child component)", () => {
  const wrapper = shallow(
    <TableRowButton labelText={dummyButtonText} onClickHandler={mockClick} />
  );
  const component = wrapper.find(Button);
  expect(component.length).toBe(1);
});
