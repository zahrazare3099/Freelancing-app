import UserAvatar from "../Features/Authentication/UserAvatar";
import useUser from "../hooks/useUser";
import HeaderMenu from "./HeaderMenu";

export default function HeaderApp() {
  const { loadingUser } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 h-14 flex justify-between gap-x-4">
      <HeaderMenu />
      <span className={`${loadingUser ? "blur-sm opacity-85" : ""}`}>
        <UserAvatar />
      </span>
    </div>
  );
}
