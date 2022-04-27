import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface TableRowProps {
  errorMessage: string;
}

const TableRowErrorMessage: React.FC<TableRowProps> = ({ errorMessage }) => {
  return (
    <>
      <tr className="errorText">
        <td />
        <td>
          <ErrorMessage message={errorMessage} />
        </td>
      </tr>
    </>
  );
};

export default TableRowErrorMessage;
