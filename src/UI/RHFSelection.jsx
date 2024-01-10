import React from "react";

export default function RHFSelection({
  label,
  name,
  register,
  options,
  errors,
  required,
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={label}>
        {label} {required && <span className="text-error font-bold">*</span>}
      </label>
      <select
        name={name}
        id={name}
        {...register(name)}
        className="textField__input bg-secondary-0"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="rounded-lg border border-primary-300 hover:bg-primary-100"
          >
            {option.label}
          </option>
        ))}
      </select>
      {errors[name]?.message}
    </div>
  );
}
