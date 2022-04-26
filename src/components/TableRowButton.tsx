import Button from "./Button/Button";

interface TableRowProps {
  labelText: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const TableRowButton: React.FC<TableRowProps> = ({
  labelText,
  onClickHandler,
}) => {
  return (
    <>
      <tr>
        <td colSpan={2} align="center">
          <Button labelText={labelText} onClickHandler={onClickHandler} />
        </td>
      </tr>
    </>
  );
};

export default TableRowButton;
