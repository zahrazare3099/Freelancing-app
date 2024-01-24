import React from "react";
import ProjectsHeader from "../Features/freelancer/projects/projectsHeader";
import ProjectTable from "../Features/freelancer/projects/ProjectTable";

export default function SubmittedProjects() {
  return (
    <div className="text-secondary-700 flex flex-col gap-y-3">
      <ProjectsHeader />
      <ProjectTable />
    </div>
  );
}
