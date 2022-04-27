import TableRowSubmitButton from "./TableRowSubmitButton";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SubmitButton from "../SubmitButton/SubmitButton";

configure({ adapter: new Adapter() });

const dummyButtonText = "Click here";

test("renders Submit Button (child component)", () => {
  const wrapper = shallow(<TableRowSubmitButton labelText={dummyButtonText} />);
  const component = wrapper.find(SubmitButton);
  expect(component.length).toBe(1);
});
