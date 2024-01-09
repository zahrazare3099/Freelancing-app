import TextFiled from "../../UI/TextFiled";
import Pending from "../../UI/Pending";

export default function SendOtpForm({
  isSendingOtp,
  onSubmit,
  register,
  errors,
}) {
  return (
    <div className="w-full flex justify-center p-5">
      <form
        className="border p-5 w-80 rounded-lg bg-primary-100 flex flex-col gap-4"
        onSubmit={onSubmit}
      >
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
        <div className="w-full flex justify-end pt-3">
          {isSendingOtp ? (
            <div className="w-full flex justify-center">
              <Pending />
            </div>
          ) : (
            <button type="submit" className="btn btn--primary">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
