import React from "react";

export default function RadioInput({ label, onchang, name, checked }) {
  return (
    <div className="flex items-end gap-1">
      <input
        className="radio-input"
        type="radio"
        onChange={onchang}
        id={name}
        name="role"
        value={name}
        check={checked}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

//   checked={role == "OWNER" ? "true" : null}
