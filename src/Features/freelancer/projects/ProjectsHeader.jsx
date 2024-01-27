import Filter from "../../../UI/Filter";
import FilterDropdown from "../../../UI/FilterDropdown";
import useCategory from "../../../hooks/useCategory";

export default function ProjectsHeader() {
  const { transformedCategories } = useCategory();
  const sortOptin = [
    { label: "مرتب سازی (جدید ترین)", value: "latest" },
    { label: "مرتب سازی (قدیمی ترین)", value: "earlist" },
  ];
  const statusOption = [
    { label: "همه", value: "All" },
    { label: "باز", value: "OPEN" },
    { label: "بسته", value: "CLOSE" },
  ];
  return (
    <div className="flex items-center justify-between">
      <span>لیست پروژه ها</span>
      <span className="flex flex-col sm:flex-row gap-2">
        <Filter filterField="status" options={statusOption} />
        <FilterDropdown filterField="sortOptin" options={sortOptin} />
        <FilterDropdown
          filterField="category"
          options={[
            { label: "دسته بندی (همه)", value: "All" },
            { label: "برنامه نویسی", value: "programmer" },
            { label: "دیزاینر", value: "designer" },
            ...transformedCategories,
          ]}
        />
      </span>
    </div>
  );
}
