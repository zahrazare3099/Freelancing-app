import React from "react";
import Empty from "../../UI/Empty";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";
import { useParams } from "react-router-dom";

export default function ProjectHeader({ projects }) {
  const { id } = useParams();
  const MoveBack = useMoveBack();
  if (projects.length == 0) return <Empty label="درخواستی" />;
  return (
    <div className="flex items-center gap-x-2 mb-3">
      <button className="flex items-center" onClick={MoveBack}>
        <HiArrowRight className="text-secondary-500 w-5 h-5" />
      </button>
      <h1 className="flex text-secondary-700">
        درخواست های پروژه &nbsp;
        <span className="font-bold underline underline-offset-4">
          {projects.find((item) => item._id == id).title}
        </span>
      </h1>
    </div>
  );
}
