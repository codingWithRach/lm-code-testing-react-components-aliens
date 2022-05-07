import W12MForm from "../W12MForm/W12MForm";
import EnteredData from "../EnteredData/EnteredData";
import { useFormData } from "../../ContextProviders/FormDataContext";

const FormLayout = () => {
  const formData = useFormData();
  return (
    <>
      <h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
      <W12MForm />
      {formData.submitted && <EnteredData />}
    </>
  );
};

export default FormLayout;
