import { useSearchParams } from "react-router-dom";

export default function Filter({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // default => All :: options.at(0).value
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  //   set with searchParams => to save All(other) query str => !not initial with value
  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex justify-between gap-x-2 items-center">
      <p className="text-sm">وضعیت</p>
      <div className="flex gap-x-1">
        {options.map((item) => {
          const isActive = item.value == currentFilter;
          return (
            <button
              key={item.value}
              disabled={isActive}
              onClick={() => handleClick(item.value)}
              className={`p-[0.2rem] w-10 text-center text-xs rounded-lg 
              ${isActive ? "bg-primary-600" : "bg-secondary-200"}
                  `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
