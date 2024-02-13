const SelectComponent = ({
  title,
  classes,
  onChangeProps,
  propsName,
  value,
  items,
  propsDefaultValue,
  disabled,
  required,
  data,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={propsName}>
        <span style={{ display: "block", fontWeight: 600 }}>{title}:</span>
        <select
          required={required}
          name={propsName}
          value={value}
          onChange={(e) => onChangeProps(e)}
        >
          <option value={""}>{propsDefaultValue}</option>
          {items.map((item, index) => {
            return (
              <option
                disabled={disabled}
                data-item={item.team || item}
                key={index}
                value={item.fullName || item}
              >
                {item.fullName || item}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default SelectComponent;
