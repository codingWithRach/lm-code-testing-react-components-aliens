import { FormData } from "./data/FormData";
import { IErrorMessageContext } from "./context_providers/ErrorMessageContext";

export const validForm = (
  formData: FormData,
  updateErrorMessages: (errorMessages: IErrorMessageContext) => void
): boolean => {
  const errorMessages: IErrorMessageContext = {
    speciesError: validSpeciesName(formData.speciesName),
    planetError: validPlanetName(formData.planetName),
    beingsError: validNumberOfBeings(formData.numberOfBeings),
    twoPlusTwoError: validTwoPlusTwo(formData.twoPlusTwo),
    reasonError: validReasonForSparing(formData.reasonForSparing),
  };
  updateErrorMessages(errorMessages);
  return allFieldsValid(errorMessages);
};

const allFieldsValid = (errorMessages: IErrorMessageContext): boolean => {
  return (
    Object.values(errorMessages).filter((message) => message.length > 0)
      .length === 0
  );
};

const validSpeciesName = (species: string): string => {
  return validField(
    species,
    /^[a-zA-Z]{3,23}$/,
    "Species Name must be between 3 and 23 characters, and can only contain letters"
  );
};

const validPlanetName = (planet: string): string => {
  return validField(
    planet,
    /^[a-zA-Z0-9]{2,49}$/,
    "Planet Name must be between 2 and 49 characters, and can only contain letters and numbers"
  );
};

const validNumberOfBeings = (numberOfBeings: string): string => {
  return validField(
    numberOfBeings,
    /^[0-9]{10,}$/,
    "Number of Beings must be a number no less than 1,000,000,000"
  );
};

const validTwoPlusTwo = (whatIsTwoPlusTwo: string): string => {
  return validField(whatIsTwoPlusTwo, /^4$/, "2 + 2 must equal 4");
};

const validReasonForSparing = (reasonForSparing: string): string => {
  return validField(
    reasonForSparing,
    /^.{17,153}$/,
    "Reason for Sparing must be between 17 and 153 characters"
  );
};

const validField = (
  fieldValue: string,
  regex: RegExp,
  message: string
): string => {
  let errorMessage = "";
  if (regex.test(fieldValue) === false) {
    errorMessage = message;
  }
  return errorMessage;
};
