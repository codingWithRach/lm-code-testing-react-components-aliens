import Label from "./Label";
import Select from "./Select";

interface TableRowProps {
  id: string;
  name: string;
  labelText: string;
  values: Array<string>;
  labels: Array<string>;
  onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
}

const TableRowSelect: React.FC<TableRowProps> = ({
  id,
  name,
  labelText,
  values,
  labels,
  onChangeHandler,
}) => {
  return (
    <>
      <tr>
        <td>
          <Label forID={id} labelText={labelText} />
        </td>
        <td>
          <Select
            id={id}
            name={name}
            values={values}
            labels={labels}
            onChangeHandler={onChangeHandler}
          />
        </td>
      </tr>
    </>
  );
};

export default TableRowSelect;
