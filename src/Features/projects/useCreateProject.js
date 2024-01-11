import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
      toast.success(message);
      toast("currect in create mood");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
      toast("error in create mood");
    },
  });
  return { isCreating, createProject };
}
