interface SelectProps {
  id: string;
  name: string;
  values: Array<string>;
  labels: Array<string>;
  onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<SelectProps> = ({
  id,
  name,
  values,
  labels,
  onChangeHandler,
}) => {
  return (
    <>
      <select
        name={name}
        id={id}
        onChange={onChangeHandler}
        key={`${name}_${values[0]}`}
      >
        {values.map((value, index) => (
          <option key={value} value={value}>
            {labels[index]}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
