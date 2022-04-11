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
        <option value={values[0]}>{labels[0]}</option>
        <option value={values[1]}>{labels[1]}</option>
      </select>
    </>
  );
};

export default Select;
