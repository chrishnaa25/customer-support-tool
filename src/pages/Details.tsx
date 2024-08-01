import React from "react";
import del from "../images/deleteicon.svg";
import edit from "../images/editicon.svg";
import Button from "../components/Button";
import img from "../images/image 262.svg";

export default function Details() {
  const handleClick = () => {};

  return (
    <div className="mx-48 my-10 border font-poppins w-[1056px] h-[142px] bg-customWhite rounded-lg gap-[8px] px-[28px] py-[24px]">
      <div className="flex items-center gap-2">
        {/* IMAGE & DETAILS */}
        <div className="h-[94px] w-[762px] flex gap-[16px]">
          <div className="h-[94px] w-[88px] ">
            <img src={img} alt="img" className="w-[88px] h-[94px] rounded-lg" />
          </div>
          <div className="w-[658px] h-[94px] gap-[16px] flex flex-col">
            <div className="flex w-[321px] h-[29px] gap-[16px]">
              <p className="h-[29px] w-[172px] text-[24px]">Rakesh Kumar</p>
              <Button
                type="button"
                name="Booking Manager"
                onClick={handleClick}
                className="h-[28px] w-[133px] text-[13px] bg-slate-200 text-slate-600"
              />
            </div>
            <div className="w-[658px] h-[49px] flex gap-[16px]">
              <div className="flex flex-col w-[197px] h-[49px] border-r-2 gap-[8px]">
                <p className="text-slate-500 w-[119px] h-[19px] text-[16px]">
                  Phone Number
                </p>
                <p className="w-[154px] h-[22px] text-[18px]">+91 9866957717</p>
              </div>
              <div className="flex flex-col w-[197px] h-[49px] border-r-2 gap-[8px]">
                <p className="text-slate-500 w-[71px] h-[19px] text-[16px]">
                  Expertise
                </p>
                <p className="h-[22px] w-[61px] text-[18px]">Engine</p>
              </div>
              <div className="flex flex-col w-[197px] h-[49px] gap-[8px] border-r-2">
                <p className="h-[19px] w-[87px] text-slate-500 text-[16px]">
                  Experience
                </p>
                <p className="h-[22px] w-[66px] text-[18px]">2 Years</p>
              </div>
            </div>
          </div>
        </div>
        {/* DELETE & EDIT */}
        <div className="w-[230px] h-[40px] gap-[16px] flex ">
          <div className="flex w-[107px] h-[40px] bg-customSlate items-center py-[10px] px-[14px] gap-[4px]">
            <Button
              type="button"
              name="Delete"
              onClick={handleClick}
              className="text-[17px] w-[55px] h-[20px] font-[500] text-customRed leading-[20px]"
            />
            <img
              src={del}
              alt="del"
              className="w-[20px] h-[20px] border-[1.5px]"
            />
          </div>
          <div className="flex w-[107px] h-[40px] bg-customSlate items-center  py-[10px] px-[14px] gap-[4px]">
            <Button
              type="button"
              name="Edit"
              onClick={handleClick}
              className="text-[17px] w-[55px] h-[20px] font-[500] leading-[20px] text-customBlue"
            />
            <img
              src={edit}
              alt="del"
              className="w-[20px] h-[20px] border-[1.5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
