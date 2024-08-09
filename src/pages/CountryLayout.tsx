import React, { useState } from "react";
import cross from "../images/crossicon.svg";
import tick from "../images/tickicon.svg";
import Button from "../components/Button";

interface CountryProps {
  save: (selectedButton: string) => void;
  cancel: () => void;
}

export default function CountryLayout({ save, cancel }: CountryProps) {
  const [isClicked, setIsClicked] = useState<string | null>(null);

  const handleClicked =
    (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsClicked(id);
    };

  const handleSave = () => {
    if (isClicked) {
      save(isClicked);
    }
  };

  const Buttons = ["German", "Indian", "Japanese"];

  const ButtonComponent = Buttons.map((button) => (
    <div
      key={button}
      className="flex justify-between w-full bg-customSlate pr-4 rounded-lg h-12 font-medium"
    >
      <Button
        type="button"
        onClick={handleClicked(button)}
        name={button}
        className="w-full text-left text-medium pl-4"
      />
      <img
        src={tick}
        alt=""
        className={`${isClicked === button ? "" : "hidden"}`}
      />
    </div>
  ));
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className=" bg-customWhite w-full mx-60 h-max rounded-lg font-poppins p-6">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">Country</p>
          <img
            onClick={cancel}
            src={cross}
            alt=""
            className="rounded-full p-2 bg-customSlate h-8 w-8 cursor-pointer"
          />
        </div>
        <div className="border my-5"></div>
        <div className="flex flex-col gap-4 mb-40">{ButtonComponent}</div>
        <div className="border my-5"></div>
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            name="Save"
            onClick={handleSave}
            className="bg-customBlue text-customWhite text-sm px-2 p-1 rounded shadow"
          />
          <Button
            type="button"
            name="Cancel"
            onClick={cancel}
            className="bg-customSlate text-customBlue text-sm px-2 p-1 rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
