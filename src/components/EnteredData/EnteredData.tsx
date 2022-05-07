import { useFormData } from "../../ContextProviders/FormDataContext";

const EnteredData: React.FC = () => {
  const formData = useFormData();
  return (
    <>
      <h2>Data submitted on form:</h2>
      <div>
        <div>Species name is: {formData.speciesName}</div>
        <div>Planet name is: {formData.planetName}</div>
        <div>Number of beings is: {formData.numberOfBeings}</div>
        <div>2 + 2 is: {formData.twoPlusTwo}</div>
        <div>Reason for sparing is: {formData.reasonForSparing}</div>
      </div>
    </>
  );
};

export default EnteredData;
