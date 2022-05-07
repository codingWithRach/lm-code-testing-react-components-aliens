export interface FormData {
  speciesName: string;
  planetName: string;
  numberOfBeings: string;
  twoPlusTwo: string;
  reasonForSparing: string;
  submitted: boolean;
  [index: string]: any;
}

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
