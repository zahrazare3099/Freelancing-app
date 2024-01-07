import TextFiled from "../../UI/TextFiled";
import Pending from "../../UI/Pending";

export default function SendOtpForm({
  phoneNumber,
  phoneOnchange,
  isSendingOtp,
  onSubmit,
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
          value={phoneNumber}
          onChange={phoneOnchange}
        />
        <div>
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
