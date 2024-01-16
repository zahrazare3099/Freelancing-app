import { useQuery } from "@tanstack/react-query";
import getCategoryApi from "../services/categoriesService";

export default function useCategory() {
  const { data = [], isLoading: loadingCategory } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  //  {_id,title,enTitle,...}
  const { categories: rawCategories = [] } = data;

  // {value,label}
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { loadingCategory, categories, transformedCategories };
}
