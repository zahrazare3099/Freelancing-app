import React from "react";
import Pending from "./Pending";

export default function RHFSelection({
  label,
  name,
  register,
  options,
  errors,
  required,
  loadingCategory,
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={label}>
        {label} {required && <span className="text-error font-bold">*</span>}
      </label>
      {loadingCategory ? (
        <span className="border border-primary-400 rounded-xl bg-secondary-0 flex justify-center py-[0.20rem]">
          <Pending height="30" width="40" />
        </span>
      ) : (
        <select
          name={name}
          id={name}
          {...register(name)}
          className="textField__input bg-secondary-0 py-[0.6rem]"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="rounded-lg border border-primary-300 bg-secondary-0 hover:bg-primary-100"
            >
              {option.label}
            </option>
          ))}
        </select>
      )}

      {errors[name]?.message}
    </div>
  );
}
