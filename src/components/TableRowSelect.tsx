import Label from "./Label/Label";
import Select from "./Select/Select";

interface TableRowProps {
  id: string;
  labelText: string;
  values: Array<string>;
  onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
}

const TableRowSelect: React.FC<TableRowProps> = ({
  id,
  labelText,
  values,
  onChangeHandler,
}) => {
  return (
    <>
      <tr>
        <td>
          <Label forID={id} labelText={labelText} />
        </td>
        <td>
          <Select id={id} values={values} onChangeHandler={onChangeHandler} />
        </td>
      </tr>
    </>
  );
};

export default TableRowSelect;
