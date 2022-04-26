import { render, screen } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Select from "./Select";

configure({ adapter: new Adapter() });

const dummyId = "linkToLabel";
const dummyValues = ["Value One", "Value Two"];
const mockClick = jest.fn();

test("renders the select options with expected text", () => {
  render(
    <Select id={dummyId} values={dummyValues} onChangeHandler={mockClick} />
  );
  dummyValues.forEach((value) => {
    const optionElement = screen
      .getAllByRole("option")
      .find((o) => o.textContent === value);
    expect(optionElement).toHaveAccessibleName(value);
  });
});

test("checks that function is called when select option is changed", () => {
  const event = {
    target: { value: dummyValues[0] },
  } as React.ChangeEvent<HTMLSelectElement>;
  const selectElement = shallow(
    <Select id={dummyId} values={dummyValues} onChangeHandler={mockClick} />
  );
  selectElement.find("select").simulate("change", event);
  expect(mockClick.mock.calls.length).toEqual(1);
  expect(mockClick.mock.calls[0][0].target.value).toBe(dummyValues[0]);
});
