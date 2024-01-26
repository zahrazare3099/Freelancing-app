import React from "react";
import ProposalTable from "../Features/Proposal/ProposalTable";

export default function Proposals() {
  return (
    <div className="text-secondary-700 flex flex-col gap-y-3">
      <h1 className="font-bold">درخواست های ایجاد شده شما</h1>
      <ProposalTable />
    </div>
  );
}
