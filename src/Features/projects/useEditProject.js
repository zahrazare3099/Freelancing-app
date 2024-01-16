import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();
  const { mutate: editProject, isPending: isEditing } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.mmessage);
    },
  });
  return { editProject, isEditing };
}
