import React from "react";

export default function ConfirmDelete({
  onConfirm,
  disable,
  onClose,
  resourceName,
}) {
  return (
    <div>
      <h2 className="font-bold">آیا از حذف {resourceName} مطمئن هستید؟</h2>
      <div className="flex justify-evenly items-center gap-x-16 pt-5">
        <button className="btn btn--primary flex-1 py-1" onClick={onClose}>
          لغو
        </button>
        <button
          className="btn btn--danger flex-1 py-1"
          disabled={disable}
          onClick={onConfirm}
        >
          تایید
        </button>
      </div>
    </div>
  );
}
