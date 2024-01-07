import { Outlet } from "react-router-dom";
import HeaderApp from "./HeaderApp";
import SidebarApp from "./SidebarApp";

export default function AppLayout() {
  return (
    <div className="h-screen flex ">
      <SidebarApp />
      <div className="w-screen order-2 flex flex-col">
        <HeaderApp />
        <div className="bg-secondary-25 max-w-screen-xl h-screen">
          <div className="m-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
