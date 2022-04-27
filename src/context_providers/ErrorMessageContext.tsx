import React, { useContext, useState } from "react";

export interface IErrorMessageContext {
  speciesError: string;
  planetError: string;
  beingsError: string;
  twoPlusTwoError: string;
  reasonError: string;
}

const defaultError = {
  speciesError: "",
  planetError: "",
  beingsError: "",
  twoPlusTwoError: "",
  reasonError: "",
};

const ErrorMessageContext =
  React.createContext<IErrorMessageContext>(defaultError);

const defaultFunction = (errorMessages: IErrorMessageContext) => {};
const ErrorMessageUpdateContext =
  React.createContext<(errorMessages: IErrorMessageContext) => void>(
    defaultFunction
  );

export function useErrorMessage(): IErrorMessageContext {
  return useContext(ErrorMessageContext);
}

export function useErrorMessageUpdate(): typeof defaultFunction {
  return useContext(ErrorMessageUpdateContext);
}

const ErrorMessageProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [errorMessages, setErrorMessages] =
    useState<IErrorMessageContext>(defaultError);

  function updateErrorMessages(message: IErrorMessageContext) {
    setErrorMessages({
      speciesError: message.speciesError,
      planetError: message.planetError,
      beingsError: message.beingsError,
      twoPlusTwoError: message.twoPlusTwoError,
      reasonError: message.reasonError,
    });
  }

  return (
    <ErrorMessageContext.Provider value={errorMessages}>
      <ErrorMessageUpdateContext.Provider value={updateErrorMessages}>
        {children}
      </ErrorMessageUpdateContext.Provider>
    </ErrorMessageContext.Provider>
  );
};

export default ErrorMessageProvider;
