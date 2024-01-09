export default function RadioInput({
  label,
  name,
  register,
  required,
  validationSchema,
  watch,
  value,
}) {
  return (
    <div className="flex items-end gap-1">
      <input
        className="radio-input"
        type="radio"
        name={name}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) == value}
      />
      <label htmlFor={label}>
        {label} {required && <span className="text-error font-bold">*</span>}
      </label>
    </div>
  );
}
