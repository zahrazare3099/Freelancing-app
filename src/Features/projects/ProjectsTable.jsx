import Empty from "../../UI/Empty";
import Pending from "../../UI/Pending";
import Table from "../../UI/Table";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";
const projects = [
  {
    _id: "1",
    title: "پروژه اول",
    categoty: { title: "برنامه نویسی" },
    budget: "1000000",
    deadline: "2023-11-07T17:12:21.697Z",
    tags: ["فرانت اند", "برنامه نویسی", "ss"],
    freelancer: { name: "نام تستی" },
    status: "باز",
  },
  {
    _id: "2",
    title: "پیاده سازی بک اند",
    categoty: { title: "برنامه نویسی" },
    budget: "350000",
    deadline: "2024-01-07T13:10:21.697Z",
    tags: ["برنامه نویسی", "بک اند", "توسعه وب"],
    freelancer: { name: "--" },
    status: "بسته",
  },
  {
    _id: "3",
    title: "طراحی رابط کاربری",
    categoty: { title: "طراحی" },
    budget: "3500000",
    deadline: "2023-12-08T22:10:22.697Z",
    tags: ["رابط کاربری", "ui", "ux", "ui/ux"],
    freelancer: { name: "--" },
    status: "باز",
  },
];
export default function ProjectsTable() {
  // const { isLoading, projects } = useOwnerProjects();
  // if (isLoading) return <Pending />;
  if (projects.length == 0) return <Empty label="پروژه" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects?.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
