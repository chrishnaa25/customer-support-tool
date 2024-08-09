import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function OtpVerification() {
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
    {
      if (otp === "123456") {
        setShowOtp(false);
      }
    }
  };

  const handleClick = () => {};

  return (
    <div>
      {showOtp ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[319px] h-[211px] p-[24px] gap-[12px] rounded-[12px] bg-custom-white flex flex-col items-center font-poppins">
            {/* ENTER OTP TEXT */}
            <div className="flex flex-col gap-[8px] w-[208px] h-[69px]">
              <p className="text-[17px] leading-[20px] font-[500] text-center">
                OTP Verification
              </p>
              <div className="w-[208px] h-[41px] flex flex-col gap-[4px] text-center">
                <p className="text-[14px] leading-[20px] font-[400] text-customOtp">
                  Enter verification code sent to
                </p>
                <p className="text-[14px] leading-[20px] font-[400] ">
                  +91 9866957717
                </p>
              </div>
            </div>
            {/* OTP INPUT FIELD */}
            <div className="flex flex-col w-[271px] h-[82px] gap-[24px] ">
              <Input
                type="number"
                name="otp"
                value={otp}
                palceholder="Enter Code"
                onChange={handleChange}
                className="no-spinner border-2 w-full h-[41px] gap-[12px] rounded-[8px] p-[12px] text-2xl leading-[17px] text-center"
              />
              <div className="flex items-center justify-center gap-2">
                <p className="text-[14px] leading-[17px] text-center font-[400] ">
                  Didn't recieve code?
                </p>
                <Button
                  type="button"
                  name="Resend"
                  onClick={handleClick}
                  className="text-[14px] leading-[17px] text-center font-[500] text-customBlue underline"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
