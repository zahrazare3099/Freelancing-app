import { Outlet } from "react-router-dom";
import HeaderApp from "./HeaderApp";

export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex ">
      {/* <SidebarApp /> */}
      {children}
      <div className="w-screen order-2 flex flex-col">
        <HeaderApp />
        <div className="bg-secondary-50 max-w-screen-xl h-screen">
          <div className="m-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
