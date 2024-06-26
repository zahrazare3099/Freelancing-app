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
  const [validTime, setValidTime] = useState(true);
  // expiresIn: 90000;
  let timeLeft = 180;
  let stepTime;
  // handle timmer
  useEffect(() => {
    const intervalId = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      stepTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      timeLeft--;
      if (timeLeft < 0) {
        setTime(null);
        setValidTime(false);
        clearInterval(intervalId);
      }
      setTime(stepTime);
    }, 1000);
  }, [timeLeft, onResendOtp]);

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
      const {
        data: { message, user },
      } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      // cheeeeeck
      console.log("check role>>>>", user);
      // push to panel, based on role , Activiate , status
      // isActive: false ,isVerifiedPhoneNumber: true ,role: "USER" ,status: 1
      if (user.isActive === false) {
        return navigate("/complete-profile");
      }
      if (user.isActive === true) {
        if (user.role == "OWNER") return navigate("/owner/dashboard");
        if (user.role == "FREELANCER") return navigate("/freelancer/dashboard");
        if (user.role == "ADMIN") return navigate("/");
      } else if (user.status !== 2) {
        // status 0 or 1 (reject or pending)
        navigate("/");
        toast("پروفایل شما در انتطار تایید است.", { icon: "🕵️‍♀️" });
        return;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
          <div className="w-full pb-3">
            <button
              className="flex items-center gap-1 text-xs w-20"
              onClick={onBack}
            >
              <HiArrowRight className="text-red-600 w-3 h-3" /> بازگشت
            </button>
          </div>
          <h1 className="font-bold py-2 px-3 w-full">
            کد تایید را وارد نمایید
          </h1>
          <div className="text-xs px-3 w-full">
            <p>{otpResponse?.data?.message}</p>
            <span
              onClick={onBack}
              className="inline px-1 underline underline-offset-4 text-primary-800"
            >
              ویرایش
            </span>
          </div>
        </div>
        {/*form */}
        <form
          className="w-full flex flex-col gap-y-4 pt-2"
          onSubmit={handleCheckOtpForm}
        >
          <span className="text-sm px-3 font-thin flex flex-row-reverse">
            {validTime ? (
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
          <div className="w-full flex justify-center pt-2 pb-4">
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

// in state initial time=90
// useEffect(() => {
//   const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
//   return () => {
//     if (timer) clearInterval(timer);
//   };
// }, [time]);
