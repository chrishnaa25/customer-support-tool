import React, { useState } from "react";
import Button from "../components/Button";
import backk from "../images/backicon.svg";
import { useDispatch } from "react-redux";
import { deleteOwnerDetails } from "../redux/inputSlice";
import DeletePopup from "./DeletePopup";

interface ServiceCenterProps {
  back: () => void;
}

export default function ServiceCenter({ back }: ServiceCenterProps) {
  const [showDelete, setShowDelte] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {};

  const handleDeletePopup = () => {
    setShowDelte(true);
  };

  const handleDelete = () => {
    setShowDelte(false);
    back();
  };
  const handleCancel = () => {
    setShowDelte(false);
  };

  return (
    <div>
      {showDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <DeletePopup cancel={handleCancel} ondelete={handleDelete} />
        </div>
      )}
      <div className=" bg-customWhite mt-3 mx-10 flex flex-col justify-between h-32 pt-6 px-6 rounded-lg font-poppins">
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
          <div
            onClick={back}
            className="cursor-pointer flex w-[20%] h-12 justify-center gap-2 items-center bg-customSlate rounded-t-lg"
          >
            <img src={backk} alt="" className="h-7 w-7" />
            <Button
              type="button"
              name="Edit Service Advisor"
              className="h-7 font-medium text-medium"
              onClick={handleClick}
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
              onClick={handleDeletePopup}
              className="h-7 bg-customRed text-customWhite rounded px-2 font-medium shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
