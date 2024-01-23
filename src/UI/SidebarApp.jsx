import { HiMenuAlt3 } from "react-icons/hi";

export default function SidebarApp({ open, setOpen, children }) {
  return (
    <div
      className={`bg-secondary-0 text-secondary-800 p-3 flex flex-col gap-y-6 transition-all duration-700 ${
        open ? "w-48 duration-1000 delay-200 ease-in-out" : "w-16 duration-500"
      }`}
    >
      <div onClick={() => setOpen(!open)}>
        {open ? (
          <div className="flex items-center gap-x-2">
            <HiMenuAlt3 className="h-6 w-6" />
            <p>داشبورد</p>
          </div>
        ) : (
          <HiMenuAlt3 className="h-6 w-6" />
        )}
      </div>

      <ul className="flex flex-col gap-y-3 ">
        {children}
        {/* <CustomNavLink
          to="dashboard"
          open={open}
          icon={<HiHome className="h-5 w-5" />}
        >
          {open ? "خانه" : null}
        </CustomNavLink>
        <CustomNavLink
          to="projects"
          icon={<HiCollection className="h-5 w-5" />}
          open={open}
        >
          {open ? "پروژه ها" : null}
        </CustomNavLink> */}
      </ul>
    </div>
  );
}
