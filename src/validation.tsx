import { FormData } from "./data/FormData";
import { IErrorMessageContext } from "./context_providers/ErrorMessageContext";

export const validForm = (
  formData: FormData,
  updateErrorMessages: (errorMessages: IErrorMessageContext) => void
): boolean => {
  const errorMessages: IErrorMessageContext = {
    speciesError: validSpeciesName(formData.speciesName),
    planetError: "",
    beingsError: "",
    twoPlusTwoError: "",
    reasonError: "",
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
  let errorMessage = "";
  const regex = /^[a-zA-Z]{3,23}$/;
  if (regex.test(species) === false) {
    errorMessage =
      "Species Name must be between 3 and 23 characters, and can only contain letters";
  }
  return errorMessage;
};
