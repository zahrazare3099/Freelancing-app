import React from "react";
import ProjectTable from "../Features/freelancer/projects/ProjectTable";
import ProjectsHeader from "../Features/freelancer/projects/ProjectsHeader";

export default function SubmittedProjects() {
  return (
    <div className="text-secondary-700 flex flex-col gap-y-3">
      <ProjectsHeader />
      <ProjectTable />
    </div>
  );
}
