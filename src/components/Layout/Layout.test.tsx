import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Layout from "./Layout";
import FormLayout from "../FormLayout/FormLayout";

configure({ adapter: new Adapter() });

test("renders form (child component)", () => {
  const wrapper = mount(<Layout />);
  const formComponent = wrapper.find(FormLayout);
  expect(formComponent.length).toBe(1);
});
