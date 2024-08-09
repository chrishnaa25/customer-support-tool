import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import km from "../images/kmsicon.svg";
import Slot from "../components/Slot";
import ButtonNew from "../components/ButtonNew";

interface Price {
  below: string;
  above: string;
}

function BookingSlots() {
  const [day, setDay] = useState<string | null>("SUN");
  const [range, setRange] = useState<string | null>("01 Km");
  const [price, setPrice] = useState<Price>({
    below: "Rs. " + "",
    above: "Rs. " + "",
  });

  const handleDay = (e: React.MouseEvent<HTMLButtonElement>) => {
    const day = e.currentTarget.getAttribute("data-name");
    console.log(day);
    setDay(day);
  };

  const handleRange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const range = e.currentTarget.getAttribute("data-name");
    setRange(range);
  };

  const handleClick = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const DayButtons = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];

  const DaysButtonsComponent = DayButtons.map((days) => (
    <ButtonNew
      type="button"
      data-name={days}
      name={days}
      onClick={handleDay}
      className={`${
        day === days
          ? "bg-customBlue text-customWhite text-xs font-semibold px-3 py-1 rounded-lg shadow"
          : "bg-customSlate text-customBlue text-xs font-semibold px-3 py-1 rounded-lg shadow"
      }`}
    />
  ));

  const SlotButtons = [
    "07 AM - 09 AM",
    "09 AM - 11 AM",
    "11 AM - 01 PM",
    "01 PM - 03 PM",
    "03 PM - 05 PM",
    "05 PM - 07 PM",
    "07 PM - 09 PM",
  ];

  const SlotButtonsComponent = SlotButtons.map((slot) => <Slot name={slot} />);

  return (
    <div>
      <div className="flex flex-col bg-customWhite mx-10 bg-customWhite rounded-lg mt-5 p-5 gap-4 font-poppins">
        <div className="flex flex-col gap-3">
          {/* SERVICE RANGE */}
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-600 text-sm font-medium ">
              Service Range
            </h2>
            <div className="flex gap-4 text-sm">
              <ButtonNew
                data-name="01 Km"
                type="button"
                name="01 Km"
                onClick={handleRange}
                className={`${
                  range === "01 Km"
                    ? "bg-customBlue text-customWhite text-sm font-bold px-4 py-1 rounded-lg shadow"
                    : "bg-customSlate text-customBlue text-sm font-bold px-4 py-1 rounded-lg shadow"
                }`}
              />
              <ButtonNew
                data-name="02 Km"
                type="button"
                name="02 Km"
                onClick={handleRange}
                className={`${
                  range === "02 Km"
                    ? "bg-customBlue text-customWhite text-sm font-bold px-4 py-1 rounded-lg shadow"
                    : "bg-customSlate text-customBlue text-sm font-bold px-4 py-1 rounded-lg shadow"
                }`}
              />
              <ButtonNew
                data-name="03 Km"
                type="button"
                name="03 Km"
                onClick={handleRange}
                className={`${
                  range === "03 Km"
                    ? "bg-customBlue text-customWhite text-sm font-bold px-4 py-1 rounded-lg shadow"
                    : "bg-customSlate text-customBlue text-sm font-bold px-4 py-1 rounded-lg shadow"
                }`}
              />
              <ButtonNew
                data-name="04 Km"
                type="button"
                name="04 Km"
                onClick={handleRange}
                className={`${
                  range === "04 Km"
                    ? "bg-customBlue text-customWhite text-sm font-bold px-4 py-1 rounded-lg shadow"
                    : "bg-customSlate text-customBlue text-sm font-bold px-4 py-1 rounded-lg shadow"
                }`}
              />
              <ButtonNew
                data-name="05 Km"
                type="button"
                name="05 Km"
                onClick={handleRange}
                className={`${
                  range === "05 Km"
                    ? "bg-customBlue text-customWhite text-sm font-bold px-4 py-1 rounded-lg shadow"
                    : "bg-customSlate text-customBlue text-sm font-bold px-4 py-1 rounded-lg shadow"
                }`}
              />
            </div>
          </div>
          {/* DISTANCE FEE */}
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-600 text-sm font-medium">Distance Fee</h2>
            <div className="flex bg-customSlate w-max rounded-lg gap-3 text-sm">
              <div className="flex flex-col  gap-2 p-2 rounded ">
                <div className="flex gap-2 items-center">
                  <h1>Below</h1>
                  <div className="flex bg-white px-2 py-1 rounded gap-1">
                    <h1>02 km</h1>
                    <img src={km} alt="" />
                  </div>
                </div>
                <Input
                  type="text"
                  className="h-10 pl-2 w-32 rounded-lg border border-customOtp"
                  onChange={handleChange}
                  value={price.below}
                  name="below"
                  palceholder=""
                />
              </div>
              <div className="flex flex-col gap-2 p-2 rounded ">
                <div className="flex gap-2 items-center">
                  <h1>Above</h1>
                  <div className="flex bg-white px-2 py-1 rounded gap-1">
                    <h1>02 km</h1>
                    <img src="" alt="" />
                  </div>
                </div>
                <Input
                  type="text"
                  className="h-10 pl-2 w-32 rounded-lg border border-customOtp"
                  onChange={handleChange}
                  value={price.above}
                  name="above"
                  palceholder=""
                />
              </div>
            </div>
          </div>
          {/* DAYS OFF */}
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-600 text-sm font-medium">Days Off</h2>
            <div className="flex gap-3 text-sm">{DaysButtonsComponent}</div>
          </div>
          {/* SCHEDULED BOOKINGS PER SLOT */}
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-600 text-sm font-medium">
              Scheduled Bookings Per Slot
            </h2>
            <div className="flex gap-3 text-sm">{SlotButtonsComponent}</div>
          </div>
        </div>
        {/* SAVE & CANCEL */}
        <div className="flex justify-end gap-3 mr-7">
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

export default BookingSlots;
