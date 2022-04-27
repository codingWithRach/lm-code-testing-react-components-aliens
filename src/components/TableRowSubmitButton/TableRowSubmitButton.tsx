import SubmitButton from "../SubmitButton/SubmitButton";

interface TableRowProps {
  labelText: string;
}

const TableRowSubmitButton: React.FC<TableRowProps> = ({ labelText }) => {
  return (
    <>
      <tr>
        <td colSpan={2} align="center">
          <SubmitButton labelText={labelText} />
        </td>
      </tr>
    </>
  );
};

export default TableRowSubmitButton;
