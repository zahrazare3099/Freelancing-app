import React from "react";
import useOwnerProjects from "./useOwnerProjects";
import Pending from "../../UI/Pending";
import Empty from "../../UI/Empty";
import truncatrText from "../../utils/truncatrText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumber from "../../utils/toPersianNumber";

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

export default function ProjectsTableV1() {
  //   const { isLoading, projects } = useOwnerProjects();
  //   if (isLoading) return <Pending />;
  if (projects.length == 0) return <Empty label="پروژه" />;
  return (
    <div className="bg-secondary-0 overflow-x-auto rounded-md">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project, index) => (
            <tr key={project._id} className="cursor-pointer">
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
                {project.status == "باز" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
