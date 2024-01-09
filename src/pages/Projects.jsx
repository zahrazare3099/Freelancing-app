import AddProjectForm from "../Features/projects/AddProjectForm";
import ProjectsTable from "../Features/projects/ProjectsTable";

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-3">
      {/*flex justify-between gap-x-5 */}
      <AddProjectForm />
      <ProjectsTable />
    </div>
  );
}
