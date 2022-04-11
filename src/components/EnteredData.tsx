import { FormData } from "../data/FormData";

interface EnteredDataProps {
  formData: FormData;
}

const EnteredData: React.FC<EnteredDataProps> = ({ formData }) => (
  <>
    <h2>Data submitted on form:</h2>
    <p>{`Species name is: ${formData.speciesName}`}</p>
    <p>{`Planet name is: ${formData.planetName}`}</p>
    <p>{`Number of beings is: ${formData.numberOfBeings}`}</p>
    <p>{`2 + 2 is: ${formData.twoPlusTwo}`}</p>
    <p>{`Reason for sparing is: ${formData.reasonForSparing}`}</p>
  </>
);

export default EnteredData;
