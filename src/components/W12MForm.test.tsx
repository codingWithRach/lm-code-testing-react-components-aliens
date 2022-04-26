import { render } from "@testing-library/react";
import { FormData } from "../data/FormData";
import W12MForm from "./W12MForm";

test("renders form element", () => {
  const dummyData: FormData = {
    speciesName: "Hippo",
    planetName: "Earth",
    numberOfBeings: "564654",
    twoPlusTwo: "4",
    reasonForSparing: "Gorgeous creatures",
    submitted: false,
  };
  const mockFunction = jest.fn();

  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
  const { container } = render(
    <W12MForm formData={dummyData} handleFormData={mockFunction} />
  );

  // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
  // for example, the firstChild of our container should be our form element
  expect(container.firstChild).toHaveClass("w12MForm");
});
