import React from "react";
import RadioInput from "./RadioInput";

export default function RadioInputGroup({
  register,
  errors,
  required,
  watch,
  config,
}) {
  const { name, validationSchema = {}, options } = config;
  return (
    <div className="w-full flex flex-col gap-y-2">
      <span className="flex gap-x-5">
        {options.map((option) => (
          <RadioInput
            key={option.value}
            name={name}
            label={option.label}
            value={option.value}
            register={register}
            validationSchema={validationSchema}
            required={required}
            watch={watch}
            errors={errors}
          />
        ))}
      </span>
      {watch(name) == null && (
        <span className="text-xs text-error p-1">
          {/* {watch(errors[name])?.message} */}
          {/* {validationSchema} */}
          انتخاب نقش ضروری است
        </span>
      )}
    </div>
  );
}
