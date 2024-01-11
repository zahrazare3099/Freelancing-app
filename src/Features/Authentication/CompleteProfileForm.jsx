import TextFiled from "../../UI/TextFiled";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Pending from "../../UI/Pending";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../UI/RadioInputGroup";

export default function CompleteProfileForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { mutateAsync, isPending: isSendingOtp } = useMutation({
    mutationFn: completeProfile,
  });

  // چک شود که وقتی اینپوت ها خالی هستند نشه ساب زد که ارور نده
  const completeProfileFormHandler = async (data = "") => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      // push to panel, based on role , Activiate , status
      if (user.isActive !== 2) {
        navigate("/");
        toast("پروفایل شما در انتطار تایید است.", { icon: "🕵️‍♀️" });
        return;
      }
      if (user.role == "OWNER") return navigate("/owner");
      if (user.role == "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-80 flex flex-col justify-center p-5 rounded-lg bg-primary-100">
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(completeProfileFormHandler)}
      >
        <h2 className="font-bold text-center">تکمیل اطلاعات</h2>
        <TextFiled
          name="username"
          label="نام و نام خانوادگی"
          register={register}
          validationSchema={{
            require: "نام و نام خانوادگی ضروری است",
            minLength: {
              value: 8,
              message: "نام و نام خانوادگی خود را بصورت کامل وارد کنید",
            },
          }}
          errors={errors}
          required
          // value={name}
          // onChange={(e) => setName(e.target.value)}
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
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
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

        {isSendingOtp ? (
          <div className="w-full flex justify-center">
            <Pending />
          </div>
        ) : (
          <button type="submit" className="btn btn--primary">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
