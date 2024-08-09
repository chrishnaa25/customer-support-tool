import React from "react";
import Button from "../components/Button";

function BookingPref() {
  const handleClick = () => {};
  return (
    <div>
      <div className="bg-customWhite mx-10 mt-3 flex flex-col justify-between h-28 pt-3 px-6 rounded-lg font-poppins">
        <div className="flex gap-5 items-center justify-between pr-8">
          <h2 className="font-semibold text-3xl leading-[48px]">
            A1 Car Service Center
          </h2>
          <Button
            type="button"
            name="Mark Service Center Verified"
            onClick={handleClick}
            className="text-xs p-1 rounded bg-customSlate text-customOtp"
          />
        </div>
        <div className="">
          <Button
            type="button"
            name="Booking Preferences"
            onClick={handleClick}
            className="h-9 text-medium px-6 bg-customSlate rounded-t-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default BookingPref;
