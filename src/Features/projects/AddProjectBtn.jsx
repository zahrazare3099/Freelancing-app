import Modal from "../../UI/Modal";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import ProjectForm from "../../UI/ProjectForm";

export default function AddProjectBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-end w-full pb-3">
      <button
        className="btn btn--primary flex items-center gap-x-2 text-sm"
        onClick={() => setIsOpen(true)}
      >
        <HiPlus className="h-5 w-5 " />
        اضافه کردن پروژه جدید
      </button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title=" اضافه کردن پروژه"
      >
        <ProjectForm setIsOpen={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}
