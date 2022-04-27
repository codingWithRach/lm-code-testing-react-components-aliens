import React, { useState } from "react";
import W12MHeader from "./W12MHeader";

import TableRowInput from "./TableRowInput/TableRowInput";
import TableRowSelect from "./TableRowSelect";
import TableRowTextArea from "./TableRowTextarea";
import TableRowButton from "./TableRowButton/TableRowButton";
import { FormData } from "../data/FormData";

interface FormProps {
  formData: FormData;
  handleFormData: Function;
}

const W12MForm: React.FC<FormProps> = ({ formData, handleFormData }) => {
  const twoPlusTwoOptions = ["Not 4", "4"];
  const [speciesName, setSpeciesName] = useState<string>(formData.speciesName);
  const [planetName, setPlanetName] = useState<string>(formData.planetName);
  const [numberOfBeings, setNumberOfBeings] = useState<string>(
    formData.numberOfBeings
  );
  const [whatIsTwoPlusTwo, setWhatIsTwoPlusTwo] = useState<string>(
    formData.twoPlusTwo
  );
  const [reasonForSparing, setReasonForSparing] = useState<string>(
    formData.reasonForSparing
  );

  const saveApplication = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newFormData: FormData = {
      speciesName: speciesName,
      planetName: planetName,
      numberOfBeings: numberOfBeings,
      twoPlusTwo: whatIsTwoPlusTwo,
      reasonForSparing: reasonForSparing,
      submitted: true,
    };
    handleFormData(newFormData);
    setSpeciesName("");
    setPlanetName("");
    setNumberOfBeings("");
    setReasonForSparing("");
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <table>
        <tbody>
          <TableRowInput
            id="speciesName"
            labelText="Species Name"
            value={speciesName}
            onChangeHandler={(event) => setSpeciesName(event.target.value)}
          />
          <TableRowInput
            id="planetName"
            labelText="Planet Name"
            value={planetName}
            onChangeHandler={(event) => setPlanetName(event.target.value)}
          />
          <TableRowInput
            id="numberOfBeings"
            labelText="Number of beings"
            value={numberOfBeings}
            onChangeHandler={(event) => setNumberOfBeings(event.target.value)}
          />
          <TableRowSelect
            id="twoPlusTwo"
            labelText="What is 2 + 2?"
            values={twoPlusTwoOptions}
            onChangeHandler={(event) =>
              setWhatIsTwoPlusTwo(
                twoPlusTwoOptions[parseInt(event.target.value)]
              )
            }
          />
          <TableRowTextArea
            id="reasonForSparing"
            labelText="Reason for sparing"
            value={reasonForSparing}
            onChangeHandler={(event) => setReasonForSparing(event.target.value)}
          />
          <TableRowButton labelText="Submit" onClickHandler={saveApplication} />
        </tbody>
      </table>
    </section>
  );
};

export default W12MForm;
