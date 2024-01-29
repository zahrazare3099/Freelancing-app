import TextFiled from "../../UI/TextFiled";
import Pending from "../../UI/Pending";
import useMoveBack from "../../hooks/useMoveBack";
import { HiArrowRight } from "react-icons/hi";

export default function SendOtpForm({
  isSendingOtp,
  onSubmit,
  register,
  errors,
}) {
  return (
    <div className="w-full h-screen bg-primary-200 flex flex-col items-center">
      <div className="bg-slate-100/10 shadow-lg ring-1 ring-black/5 rounded-b-3xl px-4 pb-3 flex flex-col items-center">
        <div className="topLOGIN w-80 flex flex-col items-center">
          <img
            src="public\vite.svg"
            alt="viteLOGO"
            className="-translate-y-3 w-48 flex"
          />
          <div className="w-full pb-3">
            <button
              className="flex items-center gap-1 text-xs w-20"
              onClick={useMoveBack()}
            >
              <HiArrowRight className="text-red-600 w-3 h-3" /> بازگشت
            </button>
          </div>
          <h1 className="font-bold px-3 pb-3 text-start w-full">
            ورود | ثبت نام
          </h1>
          <span className="text-sm px-3 w-full">
            <p>سلام!</p>
            <p>لطفا شماره موبایل خود را وارد نمایید.</p>
          </span>
        </div>
        {/* form login */}
        <form className="p-3 w-80 flex flex-col gap-4" onSubmit={onSubmit}>
          <TextFiled
            name="phoneNumber"
            label="شماره موبایل"
            register={register}
            validationSchema={{
              require: "ضروری است",
              pattern: {
                value: /^[0-9]+$/,
                message: "تنها مقدار عددی قابل قبول است",
              },
              maxLength: {
                value: 11,
                message: "تعداد رقم های شماره وارد شده غیر قابل قبول می باشد",
              },
            }}
            required
            errors={errors}
          />
          <div className="w-full flex justify-end">
            {isSendingOtp ? (
              <div className="w-full flex justify-center">
                <Pending />
              </div>
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                ارسال کد تایید
              </button>
            )}
          </div>
          <p className="text-xs text-secondary-200">
            ورود شما به معنای پذیرش شرایط گیت جاب و قوانین حریم‌ خصوصی است
          </p>
        </form>
      </div>
    </div>
  );
}
// bg-slate-400/20
// isolate aspect-video bg-transparent
// isolate aspect-video bg-white/20
