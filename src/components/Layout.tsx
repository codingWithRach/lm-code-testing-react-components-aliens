import { useState } from "react";
import W12MForm from "./W12MForm";
import { FormData } from "../data/FormData";
import EnteredData from "./EnteredData";

const Layout = () => {
  const defaultFormData: FormData = {
    speciesName: "",
    planetName: "",
    numberOfBeings: "",
    twoPlusTwo: "Not 4",
    reasonForSparing: "",
    submitted: false,
  };
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
