import React, { useState } from "react";
import TextFiled from "../../UI/TextFiled";
import RadioInput from "../../UI/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Pending from "../../UI/Pending";
import { useNavigate } from "react-router-dom";

export default function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { mutateAsync, isPending: isSendingOtp } = useMutation({
    mutationFn: completeProfile,
  });
  const completeProfileFormHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
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
      console.log(error?.response?.data?.message);
    }
  };
  return (
    <div className="w-80 flex flex-col justify-center p-5 rounded-lg bg-primary-100">
      <form
        className="flex flex-col gap-3"
        onSubmit={completeProfileFormHandler}
      >
        <h2 className="font-bold text-center">تکمیل اطلاعات</h2>
        <TextFiled
          name="username"
          label="نام و نام خانوادگی"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextFiled
          name="email"
          label="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-evenly items-center my-2">
          <RadioInput
            name="OWNER"
            label="کارفرما"
            value="OWNER"
            onchang={(e) => setRole(e.target.value)}
            checked={role == "OWNER" ? "true" : null}
          />
          <RadioInput
            name="FREELANCER"
            label="فریلنسر"
            value="FREELANCER"
            onchang={(e) => setRole(e.target.value)}
            checked={role == "FREELANCER" ? "true" : null}
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
