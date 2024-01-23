import Pending from "../../UI/Pending";
import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

export default function DashboardLayout() {
  const {
    projects = [
      {
        _id: "1",
        title: "پروژه اول",
        categoty: { title: "برنامه نویسی" },
        budget: "1000000",
        deadline: "2023-11-07T17:12:21.697Z",
        tags: ["فرانت اند", "برنامه نویسی", "ss"],
        freelancer: { name: "نام تستی" },
        status: "باز",
        proposals: [
          {
            _id: 1,
            user: { name: "t1" },
            description: "des1",
            duration: "1402/2/25",
            price: "100000",
            status: 1,
          },
          {
            _id: 2,
            user: { name: "t2" },
            description: "des2",
            duration: "1402/2/25",
            price: "100000",
            status: 2,
          },
          {
            _id: 3,
            user: { name: "t3" },
            description: "des3",
            duration: "1402/2/25",
            price: "100000",
            status: 0,
          },
        ],
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
        proposals: [
          {
            _id: 1,
            user: { name: "t1" },
            description: "des1",
            duration: "1402/2/25",
            price: "100000",
            status: 1,
          },
          {
            _id: 2,
            user: { name: "t2" },
            description: "des2",
            duration: "1402/2/25",
            price: "100000",
            status: 2,
          },
          {
            _id: 3,
            user: { name: "t3" },
            description: "des3",
            duration: "1402/2/25",
            price: "100000",
            status: 0,
          },
        ],
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
        proposals: [
          {
            _id: 1,
            user: { name: "t1" },
            description: "des1",
            duration: "1402/2/25",
            price: "100000",
            status: 1,
          },
          {
            _id: 2,
            user: { name: "t2" },
            description: "des2",
            duration: "1402/2/25",
            price: "100000",
            status: 2,
          },
          {
            _id: 3,
            user: { name: "t3" },
            description: "des3",
            duration: "1402/2/25",
            price: "100000",
            status: 0,
          },
        ],
      },
    ],
    isLoading = false,
  } = useOwnerProjects();
  if (isLoading) return <Pending />;
  return (
    <div className="text-secondary-800 flex flex-col gap-y-3 ">
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}
