import Pending from "../../UI/Pending";
import Toggle from "../../UI/Toggle";
import useToggleProjectStatus from "./useToggleProjectStatus";

export default function ToggleProjectStatus({ project }) {
  const { status, _id: id } = project;
  const { toggleProjectStatuse, isUpdating } = useToggleProjectStatus();
  const toggleHandler = () => {
    const ToggleStatus = status == "باز" ? "بسته" : "باز";
    toggleProjectStatuse({ id, ToggleStatus });
  };
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Pending height={20} width={50} />
      ) : (
        <Toggle
          label={status == "باز" ? "باز" : "بسته"}
          enabled={status == "باز" ? true : false}
          toggleHandler={toggleHandler}
        />
      )}
    </div>
  );
}
