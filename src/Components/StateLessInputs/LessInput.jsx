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

  const handleInputChange = (e) => {
    if(e.target.type == 'number') {
      if (e.target.value < 1) {
        e.target.value = 1
      }
    }

    onChangeProps(e)
  }

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
        onChange={(e) => handleInputChange(e)}
      />
    </label>
  );
};

export default LessInput;
