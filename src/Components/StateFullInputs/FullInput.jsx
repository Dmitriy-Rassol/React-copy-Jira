import { useState } from "react";

const FullInput = ({
  title,
  localType,
  placeholder,
  propsName,
  value,
  required,
  minLength,
  onChangeProps,
  disabled,
}) => {
  const handleTextareaChange = (e) => {
    const text = e.target.value;
    if (text.length >= minLength) {
      onChangeProps(e);
    }
  };

  

  const handleDateChange = (e) => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    const formattedDate = `${year}-${month}-${day}`;
    if (formattedDate > e.target.value) {
      return (e.target.value = formattedDate);
    }
    onChangeProps(e);
  };
  switch (localType) {
    case "datetime-local":
      return (
        <div className="input-container">
          <label htmlFor={propsName}>
            <span style={{ display: "block" }}>{title}:</span>
            <input 
              type="datetime-local"
              name={propsName}
              value={value}
              placeholder={placeholder}
              required={required}
              onChange={handleDateChange}
            />
          </label>
        </div>
      );
    case "date":
      return (
        <div className="input-container">
          <label htmlFor={propsName}>
            <span style={{ display: "block" }}>{title}:</span>
            <input
              type="date"
              name={propsName}
              value={value}
              placeholder={placeholder}
              required={required}
              onChange={handleDateChange}
              disabled={disabled}
            />
          </label>
        </div>
      );
    case "password":
      return (
        <div className="input-container">
          <label htmlFor={propsName}>
          <span style={{ display: "block" }}>{title}:</span>
          <input
            name={propsName}
            type="password"
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={(e) => onChangeProps(e)}
          />
        </label>
        </div>
      );
    case "textarea":
      return (
        <div className="input-container">
          <label htmlFor={propsName}>
          <span style={{ display: "block" }}>{title}:</span>
          <textarea
            minLength={40}
            name={propsName}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={(e) => handleTextareaChange(e)}
          ></textarea>
        </label>
        </div>
      );
  }
};

export default FullInput;
