import React from "react";
import Table from "../../../UI/Table";
import useProjects from "../../../hooks/useProjects";
import Pending from "../../../UI/Pending";
import Empty from "../../../UI/Empty";
import ProjectRow from "./ProjectRow";

export default function ProjectTable() {
  const {
    projects = [
      {
        _id: 1,
        title: "test-project-one",
        budget: "1200000",
        deadline: "2024-01-24T18:03:08.556Z",
        status: "OPEN",
      },
      {
        _id: 2,
        title: "test-project-two",
        budget: "1254000",
        deadline: "2024-02-04T18:03:08.556Z",
        status: "OPEN",
      },
      {
        _id: 3,
        title: "test-project-three",
        budget: "750000",
        deadline: "2024-03-24T18:03:08.556Z",
        status: "OPEN",
      },
      {
        _id: 4,
        title: "test-project-four",
        budget: "2150000",
        deadline: "2024-04-24T18:03:08.556Z",
        status: "OPEN",
      },
    ],
    loadingProjects = false,
  } = useProjects();

  if (loadingProjects) return <Pending />;
  if (projects.length == 0) return <Empty label="پروژه" />;
  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects?.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
