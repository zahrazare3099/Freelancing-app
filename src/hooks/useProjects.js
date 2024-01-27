import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const { search } = useLocation();
  const latestUpdateURL = queryString.parse(search);

  const { data, isLoading: loadingProjects } = useQuery({
    // pass latestUpdateURL to secend argument :: sensitive to chenge URL base that key
    queryKey: ["projects", latestUpdateURL],
    // pass search str to Fnc :: for new Fetching
    queryFn: () => getProjectsApi(search),
  });
  const { projects } = data || [];
  return { projects, loadingProjects };
}
