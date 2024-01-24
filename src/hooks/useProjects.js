import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";

export default function useProjects() {
  const { data, isLoading: loadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
  });
  const { projects } = data || [];
  return { projects, loadingProjects };
}
