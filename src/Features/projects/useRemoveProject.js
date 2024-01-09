import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { removeProject, isDeleting };
}

// DELETE
// http://localhost:5000/api/project/2 [HTTP/1.1 401 Unauthorized 18ms]

// http://localhost:5000/api/refresh-token [HTTP/1.1 404 Not Found 3ms]
