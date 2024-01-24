import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";

export default function useProposals() {
  const { data, isLoading: loadingProposals } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApi,
  });
  const { proposals } = data || [];
  return { proposals, loadingProposals };
}
