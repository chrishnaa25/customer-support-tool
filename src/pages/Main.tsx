import React, { useEffect, useState } from "react";
import img from "../images/logo.svg";
import Button from "../components/Button";
import AddAdvisor from "./AddAdvisor";
import ButtonNew from "../components/ButtonNew";
import ServiceCenter from "./ServiceCenter";
import PersonalDetails from "./PersonalDetails";
import Details from "./Details";
import { useDispatch, useSelector } from "react-redux";
import { clearOwnerDetails, showOwnerDetails } from "../redux/inputSlice";
import { RootState } from "../redux/store";
import axios from "axios";
import BookingPref from "./BookingPref";
import BookingSlots from "./BookingSlots";
import Highlights from "./Highlights";
import HighlightsTab from "./HighlightsTab";

interface dets {
  name: string;
  phone: string;
  expertise: string;
  experience: string;
}

export default function Main() {
  const [nav, setNav] = useState<string | null>("Service Center");
  const [sideNav, setSideNav] = useState<string | null>("Booking Preferences");
  const navButtons = ["Service Center", "Bookings", "Service Advisor", "Users"];
  const [show, setShow] = useState(true);
  const [editIndex, setEditIndex] = useState<number | undefined>(undefined);
  const owner = useSelector((state: RootState) => state.input.Owner);
  const dispatch = useDispatch();

  const sideNavButtons = [
    "Documents",
    "Details",
    "Bookings",
    "Service Advisors",
    "Images",
    "Instant Services",
    "Scheduled Services",
    "Booking Preferences",
    "Highlights",
  ];

  const handleNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = e.currentTarget.getAttribute("data-name");
    console.log(data);
    setNav(data);
  };

  const handleSideNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = e.currentTarget.getAttribute("data-name");
    console.log(data);
    setSideNav(data);
  };

  const navButtonComponent = navButtons.map((button, key) => (
    <ButtonNew
      key={button}
      type="button"
      name={button}
      data-name={button}
      onClick={handleNav}
      className={`${
        nav === button
          ? "text-3xl text-blue-800 ml-8 mt-3 pb-2 border-b-4 border-amber-800"
          : "text-3xl ml-8 mt-4 hover:text-blue-800"
      }`}
    />
  ));

  const sideNavButtonComponent = sideNavButtons.map((button, key) => (
    <ButtonNew
      key={button}
      type="button"
      name={button}
      data-name={button}
      onClick={handleSideNav}
      className={`${
        sideNav === button
          ? "text-base w-full rounded-lg text-left p-2 ml-9 mt-3 bg-customSlate"
          : "text-base w-full text-left rounded-lg p-2 ml-9 mt-3 hover:bg-customSlate"
      }`}
    />
  ));

  const handleAdd = () => {
    setShow(false);
  };

  const handleBack = () => {
    setShow(true);
  };

  const handleSave = () => {
    setShow(true);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    dispatch(showOwnerDetails(owner));
    setShow(false);
  };

  const handleDelete = () => {};

  return (
    <div className="min-h-screen pb-7 bg-customSlate flex flex-col font-poppins">
      {/* LOGO */}
      <div className="bg-blue-900 h-16 pl-5">
        <img src={img} alt="im" className="h-full" />
      </div>
      {/* NAVBAR */}
      <div className="h-16 pl-5 bg-white shadow-lg">{navButtonComponent}</div>
      {/* SIDENAV & MAIN CONTENT */}
      <div className="h-[100%] flex">
        {/* SIDENAV */}
        <div className="w-72 h-max pb-7 mt-3 bg-white">
          <p className="text-base ml-10 mt-2 w-max">ID:23451</p>
          <div className="flex flex-col mt-3">{sideNavButtonComponent}</div>
        </div>
        {/* MAIN CONTENT */}
        {nav === "Service Center" && sideNav === "Highlights" && (
          <div className="basis-5/6">
            <div>
              <Highlights />
              <HighlightsTab />
            </div>
          </div>
        )}
        {nav === "Service Center" && sideNav === "Booking Preferences" && (
          <div className="basis-5/6">
            <div>
              <BookingPref />
            </div>
            <BookingSlots />
          </div>
        )}
        {nav === "Service Center" && sideNav === "Service Advisors" && (
          <div className="basis-5/6">
            {show ? (
              <div>
                <AddAdvisor add={handleAdd} />
                <Details edit={handleEdit} dell={handleDelete} />
              </div>
            ) : (
              <div>
                <ServiceCenter back={handleBack} />
                <PersonalDetails save={handleSave} editIndex={editIndex} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
