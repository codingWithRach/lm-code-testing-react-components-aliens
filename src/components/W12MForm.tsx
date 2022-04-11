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
  const [whatIsTwoPlusTwo, setWhatIsTwoPlusTwo] = useState<string>("");
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
    setWhatIsTwoPlusTwo("");
    setReasonForSparing("");
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <table>
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
          name={whatIsTwoPlusTwo}
          labelText="What is 2 + 2?"
          values={["not4", "4"]}
          labels={["Not 4", "4"]}
          onChangeHandler={(event) => setWhatIsTwoPlusTwo(event.target.value)}
        />
        <TableRowTextArea
          id="reasonForSparing"
          labelText="Reason for sparing"
          value={reasonForSparing}
          onChangeHandler={(event) => setReasonForSparing(event.target.value)}
        />
        <TableRowButton labelText="Submit" onClickHandler={saveApplication} />
      </table>
    </section>
  );
};

// <SpeciesName speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />

export default W12MForm;
