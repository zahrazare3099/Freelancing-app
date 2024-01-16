import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Pending from "../../UI/Pending";

export default function Logout() {
  const { logout, isPending } = useLogout();
  return isPending ? (
    <Pending />
  ) : (
    <HiArrowRightOnRectangle
      onClick={logout}
      className="w-5 h-5 text-primary-500 hover:text-error"
    />
  );
}
