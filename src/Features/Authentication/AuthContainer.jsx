import React, { useState } from "react";
import CheckOtpForm from "./CheckOtpForm";
import SendOtpForm from "./SendOtpForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";

export default function AuthContainer() {
  const [step, setStep] = useState(1);
  // handle send otp form
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  // declare form
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: { phoneNumber: "" },
    mode: "onChange",
  });
  //handle send phone number
  const sendOtpHandler = async (data) => {
    try {
      const response = await mutateAsync(data);
      toast.success(response?.data?.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const onError = (err) => toast.error(err);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            register={register}
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler, onError)}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={handleSubmit(sendOtpHandler, onError)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <>{renderStep()}</>;
}
