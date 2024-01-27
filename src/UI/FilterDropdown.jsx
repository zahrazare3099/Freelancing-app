import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function FilterDropdown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(filterField) || "";

  const handleOnChange = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Select value={currentValue} onChange={handleOnChange} options={options} />
  );
}

// <select
//   value={category}
//   onChange={handleOnChange}
//   className="textField__input py-1 text-xs bg-secondary-0 text-secondary-800"
// >
//   {options.map((item) => (
//     <option value={item.value}>{item.label}</option>
//   ))}
// </select>
