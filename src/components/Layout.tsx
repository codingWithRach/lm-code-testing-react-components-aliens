import { useState } from "react";
import W12MForm from "./W12MForm";
import { FormData, getDefaultFormData } from "../data/FormData";
import EnteredData from "./EnteredData";

const Layout = () => {
  const defaultFormData: FormData = getDefaultFormData();
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  return (
    <>
      <h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
      <W12MForm formData={formData} handleFormData={setFormData} />
      {formData.submitted && <EnteredData formData={formData} />}
    </>
  );
};

export default Layout;
