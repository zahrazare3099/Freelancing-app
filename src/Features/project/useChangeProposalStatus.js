import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import changeProposalStatusApi from "../../services/proposalService";

export default function useChangeProposalStatus() {
  const { mutate: changeProposalStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      // toast("currect in toggle mood");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.mmessage);
      // toast("error in toggle mood");
    },
  });
  return { changeProposalStatus, isUpdating };
}
