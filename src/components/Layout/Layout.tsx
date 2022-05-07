import { useState } from "react";
import W12MForm from "../W12MForm/W12MForm";
import { FormData, getDefaultFormData } from "../../data/FormData";
import EnteredData from "../EnteredData/EnteredData";
import ErrorMessageProvider from "../../ContextProviders/ErrorMessageContext";

const Layout = () => {
  const defaultFormData: FormData = getDefaultFormData();
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  return (
    <>
      <h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
      <ErrorMessageProvider>
        <W12MForm formData={formData} handleFormData={setFormData} />
      </ErrorMessageProvider>
      {formData.submitted && <EnteredData formData={formData} />}
    </>
  );
};

export default Layout;
