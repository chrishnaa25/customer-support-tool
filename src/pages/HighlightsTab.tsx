import React, { useState } from "react";
import Button from "../components/Button";
import edit from "../images/editicon.svg";
import CountryLayout from "./CountryLayout";

export default function HighlightsTab() {
  const [showCountry, setShowCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountry = () => {
    setShowCountry(!showCountry);
  };

  const handleSave = (selectedButton: string) => {
    setSelectedCountry(selectedButton);
    setShowCountry(false);
  };

  const handleCancel = () => {
    setShowCountry(false);
  };

  return (
    <div>
      <div className="flex flex-col bg-customWhite mx-10 bg-customWhite rounded-lg mt-5 p-5 gap-4 font-poppins">
        {/* BREAND AND COUNTRY */}
        <div className="flex gap-7">
          <div className="flex flex-col bg-customSlate rounded-lg p-3 h-max w-[48%]">
            <h2 className="font-semibold text-lg">Brand</h2>
            <div className="flex justify-between">
              <h2 className="text-lg">Honda</h2>
              <div className="flex items-center gap-1 cursor-pointer">
                <button className="text-customBlue">Edit</button>
                <img src={edit} alt="" className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-customSlate rounded-lg p-3 h-max w-[48%]">
            <h2 className="font-semibold text-lg">Country</h2>
            <div className="flex justify-between">
              <h2 className="text-lg">{selectedCountry}</h2>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={handleCountry}
              >
                <button className="text-customBlue">Edit</button>
                <img src={edit} alt="" className="h-5 w-5" />
              </div>
            </div>
            {showCountry && (
              <CountryLayout save={handleSave} cancel={handleCancel} />
            )}
          </div>
        </div>
        {/* SERVICE & FUEL */}
        <div className="flex gap-7">
          <div className="flex flex-col bg-customSlate rounded-lg p-3 h-max w-[48%]">
            <h2 className="font-semibold text-lg">Service</h2>
            <div className="flex justify-between">
              <h2 className="text-lg">Foam Wash</h2>
              <div className="flex items-center gap-1 cursor-pointer">
                <button className="text-customBlue">Edit</button>
                <img src={edit} alt="" className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-customSlate rounded-lg p-3 h-max w-[48%]">
            <h2 className="font-semibold text-lg">Fuel</h2>
            <div className="flex justify-between">
              <h2 className="text-lg">Petrol</h2>
              <div className="flex items-center gap-1 cursor-pointer">
                <button className="text-customBlue">Edit</button>
                <img src={edit} alt="" className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        {/* TRANSMISSION */}
        <div className="flex">
          <div className="flex flex-col bg-customSlate rounded-lg p-3 h-max w-[48%]">
            <h2 className="font-semibold text-lg">Transmission</h2>
            <div className="flex justify-between">
              <h2 className="text-lg">Automatic</h2>
              <div className="flex items-center gap-1 cursor-pointer">
                <button className="text-customBlue">Edit</button>
                <img src={edit} alt="" className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
