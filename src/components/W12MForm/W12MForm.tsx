import React, { useState } from "react";
import W12MHeader from "../W12MHeader/W12MHeader";
import TableRowInput from "../TableRowInput/TableRowInput";
import TableRowSelect from "../TableRowSelect/TableRowSelect";
import TableRowTextArea from "../TableRowTextArea/TableRowTextarea";
import TableRowSubmitButton from "../TableRowSubmitButton/TableRowSubmitButton";
import { FormData } from "../../data/FormData";
import {
  useErrorMessage,
  useErrorMessageUpdate,
  IErrorMessageContext,
} from "../../ContextProviders/ErrorMessageContext";
import TableRowErrorMessage from "../TableRowErrorMessage/TableRowErrorMessage";
import { validForm } from "../../validation";
import {
  useFormData,
  useFormDataUpdate,
} from "../../ContextProviders/FormDataContext";

const W12MForm: React.FC = () => {
  const formData = useFormData();
  const updateFormData = useFormDataUpdate();
  const twoPlusTwoOptions = ["Not 4", "4"];
  const [whatIsTwoPlusTwo, setWhatIsTwoPlusTwo] = useState<string>(
    formData.twoPlusTwo
  );
  const errorMessages: IErrorMessageContext = useErrorMessage();
  const updateErrorMessages = useErrorMessageUpdate();

  const saveApplication = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFormData: FormData = {
      ...formData,
      twoPlusTwo: whatIsTwoPlusTwo,
      submitted: true,
    };
    if (validForm(newFormData, updateErrorMessages)) {
      updateFormData(newFormData);
    }
  };

  const updateField = (fieldName: string, newValue: string) => {
    let newFormData: FormData = { ...formData };
    newFormData[fieldName] = newValue;
    updateFormData(newFormData);
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={saveApplication}>
        <table>
          <tbody>
            <TableRowInput
              id="speciesName"
              labelText="Species Name"
              value={formData.speciesName}
              onChangeHandler={(event) =>
                updateField("speciesName", event.target.value)
              }
            />
            {errorMessages.speciesError.length > 0 && (
              <TableRowErrorMessage errorMessage={errorMessages.speciesError} />
            )}
            <TableRowInput
              id="planetName"
              labelText="Planet Name"
              value={formData.planetName}
              onChangeHandler={(event) =>
                updateField("planetName", event.target.value)
              }
            />
            {errorMessages.planetError.length > 0 && (
              <TableRowErrorMessage errorMessage={errorMessages.planetError} />
            )}
            <TableRowInput
              id="numberOfBeings"
              labelText="Number of beings"
              value={formData.numberOfBeings}
              onChangeHandler={(event) =>
                updateField("numberOfBeings", event.target.value)
              }
            />
            {errorMessages.beingsError.length > 0 && (
              <TableRowErrorMessage errorMessage={errorMessages.beingsError} />
            )}
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
            {errorMessages.twoPlusTwoError.length > 0 && (
              <TableRowErrorMessage
                errorMessage={errorMessages.twoPlusTwoError}
              />
            )}
            <TableRowTextArea
              id="reasonForSparing"
              labelText="Reason for sparing"
              value={formData.reasonForSparing}
              onChangeHandler={(event) =>
                updateField("reasonForSparing", event.target.value)
              }
            />
            {errorMessages.reasonError.length > 0 && (
              <TableRowErrorMessage errorMessage={errorMessages.reasonError} />
            )}
            <TableRowSubmitButton labelText="Submit" />
          </tbody>
        </table>
      </form>
    </section>
  );
};

export default W12MForm;
