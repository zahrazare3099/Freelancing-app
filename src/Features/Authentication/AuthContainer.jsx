import React, { useState } from "react";
import CheckOtpForm from "./CheckOtpForm";
import SendOtpForm from "./SendOtpForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";

export default function AuthContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  // handle send otp form
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setPhoneNumber("");
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            isSendingOtp={isSendingOtp}
            onSubmit={sendOtpHandler}
            phoneNumber={phoneNumber}
            phoneOnchange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            phoneNumber={phoneNumber}
            onBack={() => setStep(1)}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <>{renderStep()}</>;
}
