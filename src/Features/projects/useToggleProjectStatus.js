import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { toggleProjectStatuseApi } from "../../services/projectService";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();
  const { mutate: toggleProjectStatuse, isPending: isUpdating } = useMutation({
    mutationFn: toggleProjectStatuseApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      toast.success(data.message);
      toast("currect in toggle mood");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.mmessage);
      toast("error in toggle mood");
    },
  });
  return { toggleProjectStatuse, isUpdating };
}
