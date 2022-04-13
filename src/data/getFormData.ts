import { FormData } from "../data/FormData";

export function getDefaultFormData(): FormData {
  return {
    speciesName: "",
    planetName: "",
    numberOfBeings: "",
    twoPlusTwo: "Not 4",
    reasonForSparing: "",
    submitted: false,
  };
}
