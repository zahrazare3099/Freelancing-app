import DashboardHeader from "../../UI/DashboardHeader";
import useProposals from "../Proposal/useProposals";
import Stats from "./Stats";

export default function DashboardLayout() {
  const { proposals, loadingProposals } = useProposals();
  return (
    <div className="text-secondary-800 flex flex-col gap-y-3 ">
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}
