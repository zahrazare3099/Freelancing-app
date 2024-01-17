import React from "react";
import Logout from "../Features/Authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";

export default function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-3">
      <li>
        <Link to="dashboard">
          <HiOutlineUser className="w-5 h-5 text-primary-500" />
        </Link>
      </li>
      <li className="flex items-center">
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}
