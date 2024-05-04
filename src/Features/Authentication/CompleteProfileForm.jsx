import TextFiled from "../../UI/TextFiled";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Pending from "../../UI/Pending";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../UI/RadioInputGroup";

export default function CompleteProfileForm() {
  // declare Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // declare navigate
  const navigate = useNavigate();
  // import own func
  const { mutateAsync, isPending: isSendingOtp } = useMutation({
    mutationFn: completeProfile,
  });

  // چک شود که وقتی اینپوت ها خالی هستند نشه ساب زد که ارور نده
  const completeProfileFormHandler = async (data = "") => {
    try {
      const {
        data: { message, user },
      } = await mutateAsync(data);
      console.log("omad 0");
      toast.success(message);
      // push to panel, based on role , Activiate , status
      if (!user.isActive) navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتطار تایید است.", { icon: "🕵️‍♀️" });
        return;
      }
      if (user.status === 2 && user.isActive) {
        console.log("omad");
        if (user.role == "OWNER") return navigate("/owner/dashboard");
        if (user.role == "ADMIN") return navigate("/");
        if (user.role == "FREELANCER") return navigate("/freelancer/dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log("err", error?.response);
    }
  };

  return (
    <div className="w-full min-h-full bg-primary-200 flex flex-col items-center">
      <div className="bg-slate-100/10 shadow-lg ring-1 ring-black/5 rounded-b-3xl px-4 pb-3 flex flex-col items-center">
        <div className="topLOGIN w-80 flex flex-col items-center">
          <img
            src="/vite.svg"
            alt="viteLOGO"
            className="-translate-y-3 w-48 flex"
          />
          <h2 className="font-bold text-xl pb-4">تکمیل اطلاعات</h2>
        </div>

        <form
          className="w-full flex flex-col gap-y-3 px-3"
          onSubmit={handleSubmit(completeProfileFormHandler)}
        >
          <TextFiled
            name="name"
            label="نام و نام خانوادگی"
            register={register}
            validationSchema={{
              require: "نام و نام خانوادگی ضروری است",
              pattern: {
                value: "/[آ-ی]/",
                message: "لطفا اطلاعات خود را به فارسی وارد کنید",
              },
            }}
            errors={errors}
            required
          />
          <TextFiled
            name="email"
            label="ایمیل"
            register={register}
            validationSchema={{
              require: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
            required
          />
          <div className="flex justify-evenly items-center my-2">
            <RadioInputGroup
              register={register}
              errors={errors}
              required
              watch={watch}
              config={{
                name: "role",
                validationSchema: { require: "انتخاب نقش ضروری است" },
                options: [
                  { value: "OWNER", label: "کارفرما" },
                  { value: "FREELANCER", label: "فریلنسر" },
                ],
              }}
            />
          </div>

          <div className="w-full flex justify-center pb-4">
            {isSendingOtp ? (
              <div className="w-full flex justify-center">
                <Pending />
              </div>
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
