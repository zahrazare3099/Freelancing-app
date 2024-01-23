import React, { useState } from "react";
import AppLayout from "../../UI/AppLayout";
import SidebarApp from "../../UI/SidebarApp";
import CustomNavLink from "../../UI/CustomNavLink";
import { HiCollection, HiHome } from "react-icons/hi";

export default function FreelancerLayout() {
  const [open, setOpen] = useState(true);
  return (
    <AppLayout>
      {/* OwnerLayout contains: sidebar items */}
      <SidebarApp setOpen={setOpen} open={open}>
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
        <CustomNavLink
          to="proposals"
          icon={<HiCollection className="h-5 w-5" />}
          open={open}
        >
          {open ? "درخواست ها" : null}
        </CustomNavLink>
      </SidebarApp>
    </AppLayout>
  );
}
