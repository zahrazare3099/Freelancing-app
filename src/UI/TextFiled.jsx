import React from "react";

export default function TextFiled({
  label,
  name,
  register,
  required,
  errors,
  validationSchema,
  type = "text",
}) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="block px-1">
        {label}
        {required && <span className="text-error font-bold">*</span>}
      </label>
      <input
        name={name}
        id={name}
        {...register(name, validationSchema)}
        autoComplete="off"
        className={`textField__input ${
          errors && errors[name] && "border border-red-500"
        }`}
        type={type}
      />
      {errors && errors[name] && (
        <span className="text-xs text-error">{errors[name]?.message}</span>
      )}
    </div>
  );
}
