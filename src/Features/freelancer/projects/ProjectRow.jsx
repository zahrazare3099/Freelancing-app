import Modal from "../../../UI/Modal";
import Table from "../../../UI/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import toPersianNumber from "../../../utils/toPersianNumber";
import truncatrText from "../../../utils/truncatrText";
import { MdAssignmentAdd } from "react-icons/md";
import CreateProposalRequest from "../../Proposal/CreateProposalRequest";
import { useState } from "react";

export default function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);
  const projectStatus = {
    OPEN: {
      label: "باز",
      className: "badge--success",
    },
    CLOSE: {
      label: "بسته",
      className: "badge--danger",
    },
  };
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncatrText(project.title, 30)}</td>
      <td>{toPersianNumber(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[project.status].className}`}>
          {projectStatus[project.status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`ایجاد درخواست برای پروژه ${project.title}`}
        >
          <CreateProposalRequest onClose={setOpen} projectId={project._id} />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}
