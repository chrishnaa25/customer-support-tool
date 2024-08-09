import React, { useEffect, useRef, useState } from "react";
import img from "../images/image 262.svg";
import drop from "../images/dropdownicon.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import edit from "../images/editwhite.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ExpertiseLayout from "./ExpertiseLayout";
import {
  Owner,
  showOwnerDetails,
  updateOwnerDetails,
} from "../redux/inputSlice";
import OtpVerification from "./OtpVerification";
import green from "../images/greentick.svg";

interface PersonalDetailsProps {
  save: () => void;
  editIndex?: number;
}

export default function PersonalDetails({
  save,
  editIndex,
}: PersonalDetailsProps) {
  const [image, setImage] = useState<string>(img);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showExpertise, setShowExpertise] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const owner = useSelector((state: RootState) => state.input.Owner);
  const dispatch = useDispatch();
  const [ownerDetails, setOwnerDetails] = useState<Owner>({
    name: "",
    phone: "",
    expertise: "",
    experience: "",
  });

  useEffect(() => {
    if (editIndex !== undefined && owner[editIndex]) {
      const newOwner = owner[editIndex];
      setOwnerDetails(newOwner);
      setSelectedExpertise(newOwner.expertise);
    }
  }, [editIndex, owner]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = () => {};
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImage = e.target.files[0];
      setImage(URL.createObjectURL(newImage));
    }
  };

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleInputClick = () => {
    setShowExpertise(!showExpertise);
  };

  const handleVerify = () => {
    if (ownerDetails.phone !== "") {
      setShowOtp(!showOtp);
    }
    if (showOtp === false) {
      setIsVerified(true);
    }
  };

  const handleSave = (selectedButton: string) => {
    setSelectedExpertise(selectedButton);
    setShowExpertise(false);
  };

  const handleCancel = () => {
    setShowExpertise(false);
  };

  const handlesaveInput = () => {
    if (
      ownerDetails.name !== "" &&
      ownerDetails.phone !== "" &&
      ownerDetails.experience !== "" &&
      ownerDetails.expertise !== selectedExpertise
    ) {
      if (editIndex !== undefined) {
        dispatch(
          updateOwnerDetails({
            index: editIndex,
            owner: { ...ownerDetails, expertise: selectedExpertise },
          })
        );
      } else {
        dispatch(
          showOwnerDetails({ ...ownerDetails, expertise: selectedExpertise })
        );
      }
      save();
    }
  };

  const handleOtpSave = () => {};

  return (
    <div>
      <div className="bg-customWhite mx-10 flex flex-col bg-customWhite rounded-lg mt-5 p-7 gap-7 font-poppins">
        {/* DP & DETAILS */}
        <div className=" flex flex-col gap-7">
          <div className="relative">
            <img src={image} alt="" className="h-28 w-28" />
            <div className="absolute left-12 bottom-1 flex items-center bg-customBlue shadow-lg w-max h-max pl-2 p-1 rounded">
              <Button
                type="button"
                name="Edit"
                onClick={handleImageClick}
                className="text-customWhite h-5 text-sm"
              />
              <img src={edit} alt="del" className="h-5 w-5" />
              <input
                type="file"
                name="file"
                ref={inputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
          {/* DETAILS */}
          <div className="flex flex-col gap-7">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 w-[48%]">
                <p className="text-sm text-customOtp">Service Advisor Name</p>
                <Input
                  type="text"
                  name="name"
                  value={ownerDetails.name}
                  palceholder=""
                  className="border rounded-lg h-6 w-full p-2 h-full"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1 w-[48%] h-16">
                <p className="text-sm text-customOtp">Phone Number</p>
                <div className="flex border rounded-lg items-center pr-3">
                  <Input
                    type="number"
                    name="phone"
                    value={ownerDetails.phone}
                    palceholder=""
                    className="w-full p-2 focus:outline-none no-spinner"
                    onChange={handleChange}
                  />

                  {showOtp ? (
                    <div>
                      {isVerified && (
                        <img
                          src={green}
                          alt=""
                          className="h-6 w-6 cursor-pointer"
                        />
                      )}
                      <OtpVerification />
                    </div>
                  ) : (
                    <div>
                      <Button
                        type="button"
                        name="Verify"
                        onClick={handleVerify}
                        className="text-customBlue font-bold pr-5 p-1"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className=" realtive flex flex-col gap-1 w-[48%] h-16">
                <p className="text-sm text-customOtp">Expertise</p>
                <div
                  onClick={handleInputClick}
                  className="flex border rounded-lg h-10 justify-between pr-3 items-center cursor-pointer"
                >
                  <input
                    type="text"
                    value={selectedExpertise}
                    readOnly
                    className=" h-6 w-full p-2 h-full cursor-pointer focus:outline-none"
                  />
                  <img src={drop} alt="" className="h-9 w-9" />
                </div>

                {showExpertise && (
                  <ExpertiseLayout save={handleSave} cancel={handleCancel} />
                )}
              </div>
              <div className="flex flex-col gap-1 w-[48%]">
                <p className="text-sm text-customOtp">Experience (Years)</p>
                <Input
                  type="number"
                  name="experience"
                  value={ownerDetails.experience}
                  palceholder=""
                  className="border rounded-lg h-6 w-full p-2 h-full no-spinner
                  "
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* SAVE & CANCEL BUTTONS */}
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            name="Save"
            onClick={handlesaveInput}
            className={`${
              ownerDetails.name === "" ||
              ownerDetails.phone === "" ||
              ownerDetails.expertise === selectedExpertise ||
              ownerDetails.experience === ""
                ? "bg-customOtp text-black text-sm px-2 p-1 rounded shadow cursor-not-allowed"
                : "bg-customBlue text-customWhite text-sm px-2 p-1 rounded shadow"
            }`}
          />
          <Button
            type="button"
            name="Cancel"
            onClick={handleClick}
            className="bg-customSlate text-customBlue text-sm px-2 p-1 rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
