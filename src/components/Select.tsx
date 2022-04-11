interface SelectProps {
  id: string;
  values: Array<string>;
  onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<SelectProps> = ({ id, values, onChangeHandler }) => {
  return (
    <>
      <select id={id} onChange={onChangeHandler}>
        {values.map((value, index) => (
          <option key={index} value={index}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
