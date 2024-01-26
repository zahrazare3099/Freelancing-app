import { useForm } from "react-hook-form";
import TextFiled from "../../UI/TextFiled";
import useCreateProposalRequest from "./useCreateProposalRequest";
import Pending from "../../UI/Pending";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export default function CreateProposalRequest({ onClose, proposoalID }) {
  const { id: projectId } = useParams();
  // declare form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // handle input validation
  const RegisterOption = {
    description: {
      required: "فیلد توضیحات ضروری می باشد",
      maxLength: {
        value: 30,
        message: "تعداد کاراکتر بیش از حد مجاز می باشد",
      },
    },
    deadline: {
      required: "ددلاین ضروری می باشد",
    },
    price: {
      required: "قیمت ضروری می باشد",
      pattern: {
        value: /^[0-9]+$/,
        message: "تنها مفدار عددی قابل قبول است",
      },
    },
  };
  // createProposalReq API
  const { createProposalReq, isCreatingProposal = false } =
    useCreateProposalRequest();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    //   creat proposal request too see owner
    //   becarful ==> for each project T freelancer have to send one proposal
    createProposalReq(
      { ...data, projectId, proposoalID },
      {
        onSuccess: () => {
          onClose(false);
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      },
    );
  };

  return (
    <div>
      <form
        className="flex flex-col gap-y-3 justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextFiled
          name="description"
          label="توضیحات"
          register={register}
          validationSchema={RegisterOption.description}
          required
          errors={errors}
        />
        <TextFiled
          name="price"
          label="قیمت"
          register={register}
          validationSchema={RegisterOption.price}
          required
          errors={errors}
        />
        <TextFiled
          name="deadline"
          label="ددلاین"
          register={register}
          validationSchema={RegisterOption.deadline}
          required
          errors={errors}
        />
        <div className="flex items-center justify-between gap-x-5 py-2">
          {isCreatingProposal ? (
            <span className="btn py-0 flex flex-1 justify-center">
              <Pending />
            </span>
          ) : (
            <button className="btn btn--primary flex-1 py-1">تایید</button>
          )}

          <button
            className="btn btn--outline flex-1"
            onClick={() => onClose(false)}
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}
