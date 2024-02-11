
const SelectComponent = ({
  title,
  classes,
  onChangeProps,
  propsName,
  value,
  items,
  propsDefaultValue,
  disabled,
  required
}) => {
  return (
    <label htmlFor={propsName}>
      <span style={{ display: "block" }}>{title}:</span>
      <select required={required} name={propsName} value={value} onChange={(e) => onChangeProps(e)}>
        <option value={""}>{propsDefaultValue}</option>
        {items.map((item, index) => {
           return <option disabled={disabled} key={index} value={item}>{item}</option>
        })}
      </select>
    </label>
  );
};

export default SelectComponent;
