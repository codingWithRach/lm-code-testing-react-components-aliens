import Label from "../Label/Label";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <>
    <Label forID="errorMessage" labelText={message} />
  </>
);

export default ErrorMessage;
