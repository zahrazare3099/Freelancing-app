import Table from "../../../UI/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import toPersianNumber from "../../../utils/toPersianNumber";
import truncatrText from "../../../utils/truncatrText";
import { MdAssignmentAdd } from "react-icons/md";

export default function ProjectRow({ project, index }) {
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
        <button>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}
