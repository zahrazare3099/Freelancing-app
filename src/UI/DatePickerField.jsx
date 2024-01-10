import React from "react";
import persian from "react-date-object/calendars/persian";
import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";

export default function DatePickerField({ label, data, setDate }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="datePicker" className="px-2">
        {label}
      </label>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={data}
        onChange={(data) => setDate(data)}
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
      />
    </div>
  );
}
