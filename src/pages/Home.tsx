import React, { useState } from "react";
import img from "../pages/images/logo.svg";
// import Input from "../components/Input";
// import { AppDispatch, RootState } from "../redux/store";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   clearDetailsBank,
//   clearDetailsOwner,
//   showDetailsBank,
//   showDetailsOwner,
// } from "../redux/inputSlice";
import Button from ""
// import AddAdvisor from "./pagesssss/AddAdvisor"
// import Details from "./pagesssss/Details";

export default function Home() {
  // const OwnerDetails = useSelector((state: RootState) => state.input.Owner);
  // const BankDetails = useSelector((state: RootState) => state.input.Bank);
  // const inputRef = useRef<HTMLInputElement>(null);
  const [nav, setNav] = useState<string | null>("Service Center");
  const [sideNav, setSideNav] = useState<string | null>("Service Advisors");
  // const [mainNav, setMainNav] = useState<string | null>("Owner");
  // const [ownerDetails, setOwnerDetails] = useState(OwnerDetails);
  // const [bankDetails, setBankDetails] = useState(BankDetails);
  // const [image, setImage] = useState<string>("https://picsum.photos/200");

  // const dispatch: AppDispatch = useDispatch();

  // const handleImageClick = () => {
  //   if (inputRef.current) {
  //     inputRef.current.click();
  //   }
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const newImage = e.target.files[0];
  //     setImage(URL.createObjectURL(newImage));
  //   }
  // };

  const navButtons = ["Service Center", "Bookings", "Service Advisor", "Users"];

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

  // const mainNavButtons = ["Service Center", "Owner", "Bank Account"];

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

  // const handleMainNav = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const data = e.currentTarget.getAttribute("data-name");
  //   console.log(data);
  //   setMainNav(data);
  // };

  // const handleOwner = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setOwnerDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleBank = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setBankDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   console.log(bankDetails);
  // };

  // const handleSaveBank = () => {
  //   dispatch(showDetailsBank(bankDetails));
  // };

  // const handleSaveOwner = () => {
  //   dispatch(showDetailsOwner(ownerDetails));
  // };

  // const handleCancelOwner = () => {
  //   dispatch(clearDetailsOwner());
  //   setOwnerDetails(<{
  //     name: "",
  //     phone: "",
  //     expertise: "",
  //     experience: "",
  //   }>);
  // };

  // const handleCancelBank = () => {
  //   dispatch(clearDetailsBank());
  //   setBankDetails({
  //     accnum: "",
  //     bank: "",
  //     ifsc: "",
  //     accholdername: "",
  //     pan: "",
  //     gst: "",
  //   });
  // };

  const navButtonComponent = navButtons.map((button, key) => (
    <Button
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
    <Button
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

  // const mainNavButtonComponent = mainNavButtons.map((button, key) => (
  //   <Button
  //     key={button}
  //     type="button"
  //     name={button}
  //     data-name={button}
  //     onClick={handleMainNav}
  //     className={`${
  //       mainNav === button
  //         ? "w-72 text-base text-blue-800 bg-customSlate p-1 rounded-t-lg"
  //         : "w-72 text-base p-1 hover:bg-customSlate hover:text-blue-800 rounded-t-lg"
  //     }`}
  //   />
  // ));

  return (
    <div className="h-screen w-screen bg-customSlate flex flex-col font-poppins">
      {/* LOGO */}
      <div className="bg-blue-900 h-16 pl-5">
        <img src={img} alt="im" className="h-full" />
      </div>
      {/* NAVBAR */}
      <div className="h-16 pl-5 bg-white shadow-lg">{navButtonComponent}</div>
      {/* SIDENAV & MAIN CONTENT */}
      <div className="h-[100%] flex">
        {/* SIDENAV */}
        <div className="w-72 h-[93%] mt-3 bg-white">
          <p className="text-base ml-10 mt-2 w-max">ID:23451</p>
          <div className="flex flex-col mt-3">{sideNavButtonComponent}</div>
        </div>
        {/* MAIN CONTENT */}
        {nav === "Service Center" && sideNav === "Service Advisors" && (
          <div className="basis-5/6">
            // <AddAdvisor />
          </div>
        )}
        {/* {nav === "Bookings" && sideNav === "Details" && (
          <div className="basis-5/6">
            <div className="h-[85%] m-5">
              <div className="w-full h-24 bg-white rounded-lg pl-5 pt-3">
                <div className="font-semibold text-3xl">
                  A1 Car Service Center
                </div>
                <div className="flex justify-evenly mb-0 mt-4">
                  {mainNavButtonComponent}
                </div>
              </div>
              <div className="w-full h-[23rem] mt-4 bg-white rounded-lg pl-5 pt-3">
                {mainNav === "Owner" && (
                  <div>
                    <div onClick={handleImageClick} className="h-max w-max">
                      <input
                        type="file"
                        ref={inputRef}
                        className="h-32 w-32 hidden"
                        onChange={handleFileChange}
                      />
                      <img
                        src={image}
                        alt="im"
                        className="w-28 h-28 rounded-lg"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between w-[100%]">
                        <div className="basis-1/2">
                          <p className="text-base">Owner Name</p>
                          <Input
                            type="text"
                            name="name"
                            value={ownerDetails.name}
                            placeholder="Enter name"
                            onChange={handleOwner}
                            className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                          />
                        </div>
                        <div className="basis-1/2">
                          <p className="text-base">Phone Number</p>
                          <Input
                            type="text"
                            name="phone"
                            value={ownerDetails.phone}
                            placeholder="Enter phone"
                            onChange={handleOwner}
                            className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between w-[100%] mt-6">
                        <div className="basis-1/2">
                          <p className="text-base">Expertise</p>
                          <Input
                            type="text"
                            name="expertise"
                            value={ownerDetails.expertise}
                            placeholder="Enter expertise"
                            onChange={handleOwner}
                            className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                          />
                        </div>
                        <div className="basis-1/2">
                          <p className="text-base">Experience (Years)</p>
                          <Input
                            type="text"
                            name="experience"
                            value={ownerDetails.experience}
                            placeholder="Enter experience"
                            onChange={handleOwner}
                            className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 ml-[86%] w-max mt-3">
                      <Button
                        type="button"
                        name="Save"
                        onClick={handleSaveOwner}
                        data-name="Save"
                        className="text-sm bg-slate-400 text-blue-800 w-max p-1 px-3 rounded"
                      />
                      <Button
                        type="button"
                        name="Cancel"
                        onClick={handleCancelOwner}
                        data-name="Cancel"
                        className="text-sm bg-customSlate text-blue-800 w-max p-1 px-3 rounded"
                      />
                    </div>
                  </div>
                )}
                {mainNav === "Bank Account" && (
                  <div>
                    <div className="mt-3">
                      <div className="flex justify-between w-[100%]">
                        <div className="basis-1/2">
                          <p className="text-base">Account Number</p>
                          <Input
                            type="text"
                            name="accnum"
                            value={bankDetails.accnum}
                            placeholder="Enter account number"
                            onChange={handleBank}
                            className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                          />
                        </div>
                        <div className="basis-1/2">
                          <p className="text-base">IFSC Code</p>
                          <Input
                            type="text"
                            name="ifsc"
                            value={bankDetails.ifsc}
                            placeholder="Enter IFSC code"
                            onChange={handleBank}
                            className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between w-[100%] mt-6">
                        <div className="basis-1/2">
                          <p className="text-base">Account Holder Name</p>
                          <Input
                            type="text"
                            name="accholdername"
                            value={bankDetails.accholdername}
                            placeholder="Enter name"
                            onChange={handleBank}
                            className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                          />
                        </div>
                        <div className="basis-1/2">
                          <p className="text-base">Bank Name</p>
                          <Input
                            type="text"
                            name="bank"
                            value={bankDetails.bank}
                            placeholder="Enter bank name"
                            onChange={handleBank}
                            className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button
                        type="button"
                        name="Edit Bank Details"
                        className="text-base text-blue-800 font-semibold text-right w-[96%] mt-2"
                        onClick={() => console.log("edit details")}
                        data-name="Edit"
                      />
                    </div>
                    <div className="flex justify-between w-[100%] mt-6">
                      <div className="basis-1/2">
                        <p className="text-base">PAN</p>
                        <Input
                          type="text"
                          name="pan"
                          value={bankDetails.pan}
                          placeholder="Enter PAN"
                          onChange={handleBank}
                          className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                        />
                      </div>
                      <div className="basis-1/2">
                        <p className="text-base">GST Number</p>
                        <Input
                          type="text"
                          name="gst"
                          value={bankDetails.gst}
                          placeholder="Enter GST"
                          onChange={handleBank}
                          className="text-base pl-3 h-10 w-[95%] border border-black rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 ml-[86%] w-max mt-3">
                      <Button
                        type="button"
                        name="Save"
                        onClick={handleSaveBank}
                        data-name="Save"
                        className="text-sm bg-slate-400 text-blue-800 w-max p-1 px-3 rounded"
                      />
                      <Button
                        type="button"
                        name="Cancel"
                        onClick={handleCancelBank}
                        data-name="Cancel"
                        className="text-sm bg-customSlate text-blue-800 w-max p-1 px-3 rounded"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
