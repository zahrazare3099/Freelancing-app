import { NavLink } from "react-router-dom";

export default function CustomNavLink({ children, to, icon, open }) {
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
