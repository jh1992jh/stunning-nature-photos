import React from 'react';

const FormInput = ({
  name,
  type,
  placeholder,
  label,
  showLabel,
  onInputChange,
  value
}) => {
  return (
    <div className="formInputBlock">
      {showLabel === true ? <label htmlFor={name}>{label}</label> : null}
      <br />
      <input
        className="formInput"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;
