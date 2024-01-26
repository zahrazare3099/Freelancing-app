import Empty from "../../UI/Empty";
import Pending from "../../UI/Pending";
import Table from "../../UI/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

export default function ProposalTable() {
  const {
    proposals = [
      {
        _id: 1,
        description: "test-description-one",
        budget: "1200000",
        deadline: "2024-01-24T18:03:08.556Z",
        status: "رد شده",
      },
      {
        _id: 2,
        description: "test-description-two",
        budget: "1254000",
        deadline: "2024-02-04T18:03:08.556Z",
        status: "در انتطار تایید",
      },
      {
        _id: 3,
        description: "test-description-three",
        budget: "750000",
        deadline: "2024-03-24T18:03:08.556Z",
        status: "تایید شده",
      },
      {
        _id: 4,
        description: "test-description-four",
        budget: "2150000",
        deadline: "2024-04-24T18:03:08.556Z",
        status: "تایید شده",
      },
    ],
    loadingProposals = false,
  } = useProposals();
  if (loadingProposals) return <Pending />;
  if (proposals.length == 0) return <Empty label="درخواست" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals?.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
