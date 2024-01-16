import Table from "../../UI/Table";
import truncatrText from "../../utils/truncatrText";
import Modal from "../../UI/Modal";
import { useState } from "react";
import ChangeProposalStatus from "./ChangeProposalStatus";

export default function ProposalRow({ proposoal, index }) {
  const [open, setOpen] = useState(false);
  const statusStyle = [
    { label: "رد شده", className: "badge--danger" },
    { label: "در انتطار تایید", className: "badge--secondary" },
    { label: "تایید شده", className: "badge--success" },
  ];
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposoal.user.name}</td>
      <td>{truncatrText(proposoal.description, 50)}</td>
      <td>{proposoal.duration}</td>
      <td>{proposoal.price}</td>
      <td>
        <span className={`badge ${statusStyle[proposoal.status].className}`}>
          {statusStyle[proposoal.status].label}
        </span>
      </td>
      <td>
        <button className="" onClick={() => setOpen(true)}>
          تغییر وضعیت درخواست
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposoalId={proposoal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}
