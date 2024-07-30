import React from "react";

const Select = ({ title, name, onchange, value, options }) => {
  // console.log(options);
  return (
    <div className="teacher-subject">
      <label htmlFor={name}>{title}</label>
      <select onChange={onchange} value={value} id={name} name={name}>
        <option value="none">Choose the teacher</option>
        {options
          .filter(
            (option) => name.toLowerCase() === option.Subject.toLowerCase()
          )
          .map((option) => (
            <option
              key={option.TeacherId}
              value={option.TeacherId}
              className="option"
            >
              {option.Name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
