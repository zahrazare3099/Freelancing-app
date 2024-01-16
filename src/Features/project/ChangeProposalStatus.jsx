import { useForm } from "react-hook-form";
import RHFSelection from "../../UI/RHFSelection";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Pending from "../../UI/Pending";

export default function ChangeProposalStatus({ onClose, proposoalId }) {
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();
  // declare form exp=> defaultValues ? useCategory
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handle submit
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
        <div className="w-1/2">
          <RHFSelection
            name="status"
            label="تغییر وضعیت"
            register={register}
            options={[
              { label: "رد شده", value: "0" },
              { label: "در انتظار تایید", value: "1" },
              { label: "تایید شده", value: "2" },
            ]}
            required
            errors={errors}
          />
        </div>
        {isUpdating ? (
          <Pending />
        ) : (
          <div className="py-2 w-full flex justify-between gap-x-3">
            <button className="btn btn--primary flex-1">تایید</button>
            <button className="btn btn--secondary flex-1" onClick={onClose}>
              انصراف
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
