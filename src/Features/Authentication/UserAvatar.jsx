import useUser from "../../hooks/useUser";

export default function UserAvatar() {
  const { user } = useUser();
  return (
    <div className="flex gap-x-2">
      <div>
        <img
          src="../user.jpg"
          alt="pic-user"
          className="h-7 w-7 rounded-full object-cover object-center"
        />
      </div>
      <div className="text-primary-800">{user?.name}</div>
    </div>
  );
}
