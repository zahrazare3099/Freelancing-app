import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalsReqApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useCreateProposalRequest() {
  const queryClient = useQueryClient();
  const { isPending: isCreatingProposal, mutate: createProposalReq } =
    useMutation({
      mutationFn: createProposalsReqApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["proposals"] });
      },
      onError: (err) => {
        toast.error("Create Proposal Request Error");
      },
    });

  return { isCreatingProposal, createProposalReq };
}
