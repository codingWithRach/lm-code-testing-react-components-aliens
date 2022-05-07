import { FormData } from "./data/FormData";
import { IErrorMessageContext } from "./ContextProviders/ErrorMessageContext";

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

const validSpeciesName = (species: string): string =>
  validField(species, 3, 23, /^[a-zA-Z]*$/, "Species Name", "letters");

const validPlanetName = (planet: string): string =>
  validField(
    planet,
    2,
    49,
    /^[a-zA-Z0-9]*$/,
    "Planet Name",
    "letters and numbers"
  );

const validField = (
  fieldValue: string,
  minLength: number,
  maxLength: number,
  regex: RegExp,
  fieldName: string,
  contentMessage: string
): string => {
  return (
    validLength(fieldValue, minLength, maxLength, fieldName) ||
    validContent(
      fieldValue,
      regex,
      `${fieldName} can only contain ${contentMessage}`
    )
  );
};

const validNumberOfBeings = (numberOfBeings: string): string => {
  return validContent(
    numberOfBeings,
    /^[0-9]{10,}$/,
    "Number of Beings must be a number no less than 1,000,000,000"
  );
};

const validTwoPlusTwo = (whatIsTwoPlusTwo: string): string => {
  return validContent(whatIsTwoPlusTwo, /^4$/, "2 + 2 must equal 4");
};

const validReasonForSparing = (reasonForSparing: string): string => {
  return validLength(reasonForSparing, 17, 153, "Reason for sparing");
};

const validLength = (
  fieldValue: string,
  minLength: number,
  maxLength: number,
  fieldName: string
): string => {
  let errorMessage = "";
  if (fieldValue.length < minLength || fieldValue.length > maxLength) {
    errorMessage = `${fieldName} must be between ${minLength} and ${maxLength} characters`;
  }
  return errorMessage;
};

const validContent = (
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
