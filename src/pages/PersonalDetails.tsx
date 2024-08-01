import React, { useRef, useState } from "react";
import img from "../images/image 262.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import edit from "../images/editwhite.svg";

export default function PersonalDetails() {
  const [image, setImage] = useState<string>(img);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = () => {};
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

  return (
    <div>
      <div className="mx-48 my-10 border  flex flex-col bg-customWhite rounded-lg w-[70%] p-7 gap-7 font-poppins">
        {/* DP & DETAILS */}
        <div className=" flex flex-col gap-7">
          <div className="relative">
            <img src={image} alt="" className="h-60 w-60" />
            <div className="absolute left-44 bottom-2 flex items-center bg-customBlue shadow-lg w-max h-max pl-2 p-1 rounded">
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
                  value=""
                  palceholder=""
                  className="border rounded-lg h-6 w-full p-2 h-full"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1 w-[48%] h-16">
                <p className="text-sm text-customOtp">Phone Number</p>
                <Input
                  type="text"
                  name="phone"
                  value=""
                  palceholder=""
                  className="border rounded-lg h-6 w-full p-2 h-full"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 w-[48%] h-16">
                <p className="text-sm text-customOtp">Expertise</p>
                <Input
                  type="text"
                  name="expertise"
                  value=""
                  palceholder=""
                  className="border rounded-lg h-6 w-full p-2 h-full"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1 w-[48%]">
                <p className="text-sm text-customOtp">Experience (Years)</p>
                <Input
                  type="text"
                  name="experience"
                  value=""
                  palceholder=""
                  className="border rounded-lg h-6 w-full p-2 h-full"
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
            onClick={handleClick}
            className="bg-customBlue text-customWhite text-sm px-2 p-1 rounded shadow"
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
