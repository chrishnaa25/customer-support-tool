import React, { useState } from "react";
import Button from "../components/Button";
import plus from "../images/plusicon.svg";
import Input from "../components/Input";
import searchh from "../images/searchicon.svg";

interface AddAdvisorProps {
  add: () => void;
}

export default function AddAdvisor({ add }: AddAdvisorProps) {
  const [search, setSearch] = useState("");
  const handleClick = () => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="bg-customWhite mx-10 mt-3 flex flex-col justify-between h-32 pt-6 px-6 rounded-lg font-poppins">
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
            <div
              onClick={add}
              className="cursor-pointer flex border border-customBlue rounded gap-1 px-2 items-center "
            >
              <img src={plus} alt="" className="h-6 w-6" />
              <Button
                type="button"
                name="Add Advisor"
                onClick={handleClick}
                className="h-6 text-customBlue font-medium text-sm"
              />
            </div>
            <div className="flex rounded gap-1 border border-customBorder px-2 items-center">
              <img src={searchh} alt="" className="h-6 w-6" />
              <Input
                type="text"
                name="Search"
                value={search}
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
