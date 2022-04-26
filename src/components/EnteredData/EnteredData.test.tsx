import { render, screen } from "@testing-library/react";
import EnteredData from "./EnteredData";
import { FormData } from "../../data/FormData";

const dummyData: FormData = {
  speciesName: "Hippo",
  planetName: "Earth",
  numberOfBeings: "541254",
  twoPlusTwo: "4",
  reasonForSparing: "Gorgeous creatures",
  submitted: true,
};

test("renders heading", () => {
  render(<EnteredData formData={dummyData} />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement.textContent).toEqual("Data submitted on form:");
});

test("renders entered species name", () => {
  render(<EnteredData formData={dummyData} />);
  expect(
    screen.getByText(`Species name is: ${dummyData.speciesName}`, {
      exact: false,
    })
  ).toBeTruthy();
});

test("renders entered planet name", () => {
  render(<EnteredData formData={dummyData} />);
  expect(
    screen.getByText(`Planet name is: ${dummyData.planetName}`, {
      exact: false,
    })
  ).toBeTruthy();
});

test("renders entered number of beings", () => {
  render(<EnteredData formData={dummyData} />);
  expect(
    screen.getByText(`Number of beings is: ${dummyData.numberOfBeings}`, {
      exact: false,
    })
  ).toBeTruthy();
});

test("renders two plus two", () => {
  render(<EnteredData formData={dummyData} />);
  expect(
    screen.getByText(`2 + 2 is: ${dummyData.twoPlusTwo}`, { exact: false })
  ).toBeTruthy();
});

test("renders reason for sparing", () => {
  render(<EnteredData formData={dummyData} />);
  expect(
    screen.getByText(dummyData.reasonForSparing, {
      exact: false,
    })
  ).toBeTruthy();
});
