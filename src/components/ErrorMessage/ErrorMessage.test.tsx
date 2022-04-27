import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Label from "../Label/Label";
import ErrorMessage from "./ErrorMessage";

configure({ adapter: new Adapter() });

const dummyMessage = "Dummy error message";

test("renders Label (child component)", () => {
  const wrapper = shallow(<ErrorMessage message={dummyMessage} />);
  const component = wrapper.find(Label);
  expect(component.length).toBe(1);
});
