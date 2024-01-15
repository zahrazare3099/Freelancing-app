import Table from "../../UI/Table";
import ProposalRow from "./ProposalRow";

export default function ProposoalTable({ proposoals }) {
  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>فریلنسر </th>
          <th>توضیحات </th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {proposoals?.map((proposoal, index) => (
            <ProposalRow
              key={proposoal._id}
              proposoal={proposoal}
              index={index}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
