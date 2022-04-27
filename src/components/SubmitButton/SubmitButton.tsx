interface SubmitButtonProps {
  labelText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ labelText }) => (
  <>
    <button type="submit">{labelText}</button>
  </>
);

export default SubmitButton;
