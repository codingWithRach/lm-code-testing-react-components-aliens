import Label from "./Label/Label";
import Textarea from "./Textarea";

interface TableRowProps {
  id: string;
  labelText: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TableRowTextarea: React.FC<TableRowProps> = ({
  id,
  labelText,
  value,
  onChangeHandler,
}) => {
  return (
    <>
      <tr>
        <td valign="baseline">
          <Label forID={id} labelText={labelText} />
        </td>
        <td>
          <Textarea
            id={id}
            name={id}
            value={value}
            onChangeHandler={onChangeHandler}
          />
        </td>
      </tr>
    </>
  );
};

export default TableRowTextarea;
