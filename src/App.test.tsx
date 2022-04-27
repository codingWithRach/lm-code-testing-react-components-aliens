import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Layout from "./components/Layout/Layout";

configure({ adapter: new Adapter() });

test("renders Layout component", () => {
  const wrapper = mount(<App />);
  const component = wrapper.find(Layout);
  expect(component.length).toBe(1);
});
