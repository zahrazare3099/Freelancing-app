import { useState } from "react";
import { HiHome, HiMenuAlt3, HiCollection } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function SidebarApp() {
  const [open, setOpen] = useState(true);

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
        <CustomNavLink
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
        </CustomNavLink>
      </ul>
    </div>
  );
}

function CustomNavLink({ children, to, icon, open }) {
  const navlinkClass = `items-center p-1 rounded-lg flex  ${
    open ? null : "justify-center"
  } gap-x-2 hover:bg-primary-100/50 hover:text-primary-600 text-secondary-800`;

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-primary-300/50 text-primary-700`
            : `${navlinkClass} text-secondary-600 `
        }
      >
        {icon} {children}
      </NavLink>
    </li>
  );
}
