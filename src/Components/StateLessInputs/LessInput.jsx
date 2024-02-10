const LessInput = ({
  type,
  title,
  placeholder,
  classes,
  onChangeProps,
  propsName,
  value,
  required,
}) => {
  return (
    <label htmlFor={propsName}>
      <span style={{ display: "block" }}>{title}:</span>
      <input
        required={required}
        type={type}
        name={propsName}
        placeholder={placeholder}
        className={classes}
        value={value}
        onChange={(e) => onChangeProps(e)}
      />
    </label>
  );
};

export default LessInput;
