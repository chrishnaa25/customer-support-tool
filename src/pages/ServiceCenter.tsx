import React from "react";
import Button from "../components/Button";
import back from "../images/backicon.svg";

export default function ServiceCenter() {
  const handleClick = () => {};
  return (
    <div>
      <div className=" mx-48 my-10 border flex flex-col justify-between w-[70%] h-32 pt-6 px-6 rounded-lg font-poppins">
        <div className="flex gap-5 items-center">
          <p className="font-semibold text-3xl leading-[48px] ">
            A1 Car Service Center
          </p>
          <Button
            type="button"
            name="Verified"
            onClick={handleClick}
            className="border h-6 w-20 rounded border-customGreen text-customGreen text-sm"
          />
        </div>
        <div className="flex justify-between">
          {/* EDIT ADVISOR AND BACK BUTTON */}
          <div className="flex w-[20%] h-12 justify-center gap-2 items-center bg-customSlate rounded-t-lg">
            <img src={back} alt="" className="h-7 w-7" />
            <Button
              type="button"
              name="Edit Service Advisor"
              onClick={handleClick}
              className="h-7 font-medium text-medium"
            />
          </div>
          {/* ADD AND DELETE ADVISOR BUTTONS */}
          <div className="flex gap-6 text-sm items-center">
            <Button
              type="button"
              name="Add as Booking Manager"
              onClick={handleClick}
              className="h-7 border border-customBlue text-customBlue rounded px-2 font-medium"
            />
            <Button
              type="button"
              name="Delete Advisor"
              onClick={handleClick}
              className="h-7 bg-customRed text-customWhite rounded px-2 font-medium shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
