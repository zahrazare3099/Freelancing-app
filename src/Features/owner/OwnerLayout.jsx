import { useState } from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../UI/AppLayout";
import CustomNavLink from "../../UI/CustomNavLink";
import SidebarApp from "../../UI/SidebarApp";

export default function OwnerLayout() {
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
      </SidebarApp>
    </AppLayout>
  );
}
