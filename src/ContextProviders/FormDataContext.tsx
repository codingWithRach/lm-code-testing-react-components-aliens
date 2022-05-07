import React, { useContext, useState } from "react";
import { FormData, getDefaultFormData } from "../data/FormData";

const defaultFormData = getDefaultFormData();
const FormDataContext = React.createContext<FormData>(defaultFormData);
const defaultFunction = (formData: FormData) => {};
const FormDataUpdateContext =
  React.createContext<(formData: FormData) => void>(defaultFunction);

export function useFormData(): FormData {
  return useContext(FormDataContext);
}

export function useFormDataUpdate(): typeof defaultFunction {
  return useContext(FormDataUpdateContext);
}

type Props = {
  children?: React.ReactNode;
};
const FormDataProvider: React.FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  function updateFormData(newFormData: FormData) {
    setFormData(newFormData);
  }

  return (
    <FormDataContext.Provider value={formData}>
      <FormDataUpdateContext.Provider value={updateFormData}>
        {children}
      </FormDataUpdateContext.Provider>
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;
