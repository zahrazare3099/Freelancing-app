import Table from "../../UI/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumber from "../../utils/toPersianNumber";
import truncatrText from "../../utils/truncatrText";

export default function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  const statusStyle = [
    { label: "رد شده", className: "badge--danger" },
    { label: "در انتطار تایید", className: "badge--secondary" },
    { label: "تایید شده", className: "badge--success" },
  ];

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncatrText(proposal.description, 50)}</td>
      <td>{toLocalDateShort(proposal.deadline)}</td>
      <td>{toPersianNumber(proposal.budget)}</td>
      <td>
        {/* <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span> */}
        <span
          className={`badge  ${statusStyle.map((s) => s.label == status && s.className).find((i) => Boolean(i))}`}
        >
          {status}
        </span>
      </td>
    </Table.Row>
  );
}
