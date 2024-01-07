import React from "react";

export default function TextFiled({ label, name, value, onChange }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block px-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        id={name}
        onChange={onChange}
        autoComplete="off"
        className="textField__input"
      />
    </div>
  );
}
