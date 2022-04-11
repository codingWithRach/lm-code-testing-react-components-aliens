import React, { useState } from "react";
import W12MHeader from "./W12MHeader";

import TableRowInput from "./TableRowInput";
import TableRowSelect from "./TableRowSelect";
import TableRowTextArea from "./TableRowTextarea";
import TableRowButton from "./TableRowButton";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("");
  const [planetName, setPlanetName] = useState<string>("");
  const [numberOfBeings, setNumberOfBeings] = useState<string>("");
  const twoPlusTwoOptions = ["Not 4", "4"];
  const [whatIsTwoPlusTwo, setWhatIsTwoPlusTwo] = useState<string>(
    twoPlusTwoOptions[0]
  );
  const [reasonForSparing, setReasonForSparing] = useState<string>("");

  const saveApplication = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(`Species name is ${speciesName}`);
    console.log(`Planet name is ${planetName}`);
    console.log(`Number of beings is ${numberOfBeings}`);
    console.log(`2 + 2 is ${whatIsTwoPlusTwo}`);
    console.log(`Reason for sparing is ${reasonForSparing}`);
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
