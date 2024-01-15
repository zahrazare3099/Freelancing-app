import { useForm } from "react-hook-form";
import RHFSelection from "../../UI/RHFSelection";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Pending from "../../UI/Pending";

const option = [
  { label: "رد شده", value: "0" },
  { label: "در انتظار تایید", value: "1" },
  { label: "تایید شده", value: "2" },
];
export default function ChangeProposalStatus({ onClose, proposoalId }) {
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    changeProposalStatus(
      { id: proposoalId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
          onClose();
        },
      }
    );
  };
  return (
    <div>
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        <RHFSelection
          name="status"
          label="تغییر وضعیت"
          register={register}
          options={option}
          required
          errors={errors}
        />
        <div className="py-2 w-full flex justify-center">
          {isUpdating ? (
            <Pending />
          ) : (
            <button className="btn btn--primary flex-1">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}
