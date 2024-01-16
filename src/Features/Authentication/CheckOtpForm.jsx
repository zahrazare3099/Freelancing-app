import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";
import Pending from "../../UI/Pending";

export default function CheckOtpForm({
  phoneNumber,
  onBack,
  onResendOtp,
  otpResponse,
}) {
  // OTP input value
  const [otp, setOtp] = useState("");
  // timmer
  const [time, setTime] = useState("");
  let timeLeft = 30;
  let stepTime;
  useEffect(() => {
    const intervalId = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      stepTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(intervalId);
        setTime(null);
      }
      setTime(stepTime);
    }, 2000);
  }, [timeLeft]);

  // handle check otp form
  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  // handle navigate
  const navigate = useNavigate();
  // handle verified otp code
  const handleCheckOtpForm = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      // push to panel, based on role , Activiate , status
      if (!user.isActive) return navigate("/complete-profile");
      if (user.isActive !== 2) {
        navigate("/");
        toast("پروفایل شما در انتطار تایید است.", { icon: "🕵️‍♀️" });
        return;
      }
      // user.isActive == 1
      if (user.role == "OWNER") return navigate("/owner");
      if (user.role == "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="w-80 flex flex-col justify-center p-5 rounded-lg bg-primary-100">
      <button
        className="btn btn--secondary px-0 flex items-center justify-center gap-1 text-xs w-20"
        onClick={onBack}
      >
        <HiArrowRight /> بازگشت
      </button>
      <form className=" p-5 flex flex-col gap-4" onSubmit={handleCheckOtpForm}>
        <label htmlFor="verfied-code" className="text-secondary-700 font-bold">
          کد تایید را وارد نمایید
        </label>
        <span className="text-sm font-thin flex flex-row-reverse">
          {time ? (
            <span className="flex flex-row-reverse">({time}) باقی مانده</span>
          ) : (
            <button
              className="btn btn--warning font-normal px-2 text-xs"
              onClick={onResendOtp}
            >
              ارسال مجدد کد تایید
            </button>
          )}
        </span>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse justify-evenly text-black"
          inputStyle={{
            width: "1.7rem",
            borderRadius: "0.4rem",
            border: "1px solid rgb(var(--color-primary-400))",
            // ":hover": {
            //   outline: "1px inset #ff0000",
            // },
          }}
        />
        {isSendingOtp ? (
          <div className="w-full flex justify-center">
            <Pending />
          </div>
        ) : (
          <button type="submit" className="btn btn--primary">
            تایید
          </button>
        )}

        <div
          className="font-medium text-xs px-2 text-primary-800 cursor-pointer"
          onClick={onBack}
        >
          <p>{otpResponse?.message}</p>
          <p className="text-xs">
            کد تایید برای شماره موبایل {phoneNumber ? phoneNumber : "--"} ارسال
            گردید.
            <span className="inline px-1 underline underline-offset-4 font-bold">
              ویرایش
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
// handle timmer
// useEffect(() => {
//   const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
//   return () => {
//     if (timer) clearInterval(timer);
//   };
// }, [time]);
