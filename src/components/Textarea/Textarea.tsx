interface TextAreaProps {
  id: string;
  name: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  value,
  onChangeHandler,
}) => {
  return (
    <>
      <textarea
        id={id}
        name={name}
        value={value}
        rows={4}
        cols={50}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default TextArea;
