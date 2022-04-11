import Label from "./Label";
import TextInput from "./TextInput";

interface TableRowProps {
  id: string;
  labelText: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const TableRowInput: React.FC<TableRowProps> = ({
  id,
  labelText,
  value,
  onChangeHandler,
}) => {
  return (
    <>
      <tr>
        <td>
          <Label forID={id} labelText={labelText} />
        </td>
        <td>
          <TextInput id={id} value={value} onChangeHandler={onChangeHandler} />
        </td>
      </tr>
    </>
  );
};

export default TableRowInput;
