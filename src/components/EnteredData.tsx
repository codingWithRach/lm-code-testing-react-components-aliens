import { FormData } from "../data/FormData";

interface EnteredDataProps {
  formData: FormData;
}

const EnteredData: React.FC<EnteredDataProps> = ({ formData }) => (
  <>
    <h2>Data submitted on form:</h2>
    <p>
      {`Species name is: ${formData.speciesName}`}
      <br />
      {`Planet name is: ${formData.planetName}`}
      <br />
      {`Number of beings is: ${formData.numberOfBeings}`}
      <br />
      {`2 + 2 is: ${formData.twoPlusTwo}`}
      <br />
      {`Reason for sparing is: ${formData.reasonForSparing}`}
    </p>
  </>
);

export default EnteredData;
