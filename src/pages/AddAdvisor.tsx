import React from "react";
import Button from "../components/Button";
import plus from "../images/plusicon.svg";
import Input from "../components/Input";
import search from "../images/searchicon.svg";

export default function AddAdvisor() {
  const handleClick = () => {};
  const handleChange = () => {};
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
          <div className="flex w-40 justify-center gap-2 items-center bg-customSlate rounded-t-lg">
            <Button
              type="button"
              name="Service Advisors"
              onClick={handleClick}
              className="h-10 font-medium text-medium"
            />
          </div>
          {/* ADD AND DELETE ADVISOR BUTTONS */}
          <div className="flex gap-6 h-8 text-sm justify-center ">
            <div className="flex border border-customBlue rounded gap-1 px-2 items-center ">
              <img src={plus} alt="" className="h-6 w-6" />
              <Button
                type="button"
                name="Add Advisor"
                onClick={handleClick}
                className="h-6 text-customBlue font-medium text-sm"
              />
            </div>
            <div className="flex rounded gap-1 border border-customBorder px-2 items-center">
              <img src={search} alt="" className="h-6 w-6" />
              <Input
                type="text"
                name="Search"
                value=""
                palceholder="Service Advisors"
                className="h-6 focus:outline-none"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
