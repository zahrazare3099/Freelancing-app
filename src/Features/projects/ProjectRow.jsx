import { HiEye, HiOutlineTrash } from "react-icons/hi";
import Table from "../../UI/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumber from "../../utils/toPersianNumber";
import truncatrText from "../../utils/truncatrText";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../UI/Modal";
import { useState } from "react";
import ConfirmDelete from "../../UI/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import toast from "react-hot-toast";
import ProjectForm from "../../UI/projectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

export default function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncatrText(project.title, 30)}</td>
      <td>{project.categoty.title}</td>
      <td>{toPersianNumber(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "--"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-2">
          <>
            <Modal
              open={isEditOpen}
              title={`ویرایش ${project.title}`}
              onClose={() => {
                setIsEditOpen(false);
              }}
            >
              <ProjectForm
                projectToEdit={project}
                setIsOpen={() => {
                  setIsEditOpen(false);
                }}
              />
            </Modal>
            <button>
              <TbPencilMinus
                className="w-5 h-5 text-primary-800"
                onClick={() => setIsEditOpen(true)}
              />
            </button>
          </>
          <>
            <button>
              <HiOutlineTrash
                className="w-5 h-5 text-error"
                onClick={() => setIsDeleteOpen(true)}
              />
            </button>
            <Modal
              open={isDeleteOpen}
              title={`حذف ${project.title}`}
              onClose={() => {
                setIsDeleteOpen(false);
              }}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => {
                  setIsDeleteOpen(false);
                }}
                disable={false}
                onConfirm={() => {
                  toast("در حال حاضر حذف پروژه امکان پذیر نمی باشد", {
                    icon: "⛔",
                  });
                  // removeProject(project._id, {
                  //   onSuccess: () => setIsDeleteOpen(false),
                  // });
                }}
              />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center">
          <HiEye className="h-4 w-4 text-primary-600" />
        </Link>
      </td>
    </Table.Row>
  );
}
