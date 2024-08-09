import React, { useEffect, useState } from "react";
import del from "../images/deleteicon.svg";
import editt from "../images/editicon.svg";
import Button from "../components/Button";
import img from "../images/image 262.svg";
import axios from "axios";
import DeletePopup from "./DeletePopup";

interface DetailsProps {
  edit: (index: number) => void;
  dell: () => void;
}

interface Technician {
  name: string;
  phoneNumber: string;
  specialization: string;
  experience: number;
  profileImage: string;
  admin: boolean;
  technicianId: number;
}

export default function Details({ edit, dell }: DetailsProps) {
  const [showDelete, setShowDelete] = useState(false);
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const handleClick = () => {};

  const handleDelete = () => {
    console.log(selectedId);
    if (selectedId !== null) {
      const newTechnicians = technicians.filter(
        (tech) => tech.technicianId !== selectedId
      );
      setTechnicians(newTechnicians);
      setShowDelete(false);
      dell();
    }
  };

  const handleCancel = () => {
    setShowDelete(false);
  };

  const handleEdit = (technicianId: number) => {
    setSelectedId(technicianId);
    edit(technicianId);
  };

  const handleDelPopup = (technicianId: number) => {
    setSelectedId(technicianId);
    setShowDelete(true);
  };

  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const response = await axios.get(
          "https://gateway-dev.thevehicle.app/service-centers/189/technicians",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTE3OTk3Njg1ODg2IiwiUk9MRSI6IntcInVzZXJJZFwiOlwiNDE2XCIsXCJ1c2VyUm9sZVwiOlwiVVNFUl9TRVJWSUNFX0NFTlRFUl9PV05FUlwiLFwic2VydmljZUNlbnRlcklkXCI6XCIxODlcIixcInRlY2huaWNpYW5JZFwiOlwiNDA2XCIsXCJvbkJvYXJkaW5nQ29tcGxldGVGbGFnXCI6ZmFsc2UsXCJ2ZXJpY2F0aW9uU3RhdHVzXCI6XCJVTkRFUl9SRVZJRVdcIixcImFwcGxpY2F0aW9uSWRcIjpcIjIwOFwiLFwiYm9va2luZ01hbmFnZXJcIjp0cnVlfSIsIlVTRVJJRCI6IjQxNiIsIlpNQVRFUl9JTlRFUk5BTF9TRVNTSU9OIjoiQlR5VTdObG9ZZnVZRWk5d1BDQjd3WGEzdVNnWENtT2FYdXAyT0wvL1VLV1hVdHRaU29qT0I1U3hsektQSXZjc2czUldnMjFBU2FoS2xSeWpuSzJnejRnNmNIUGZ1TzVPVk40MktUdEdVK0k9IiwiaWF0IjoxNzE4MDkyMzgyLCJleHAiOjE3NDk2NDk5ODF9.JWYTpnknp9ipnHyRkkul84NELiU85p6BqeHOUyLijAdVRByoaKVDusx37EgV_LfhfbTN20WkEKlBuoTYx92ShA ",
            },
          }
        );
        setTechnicians(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchTechnicians();
  }, []);

  return (
    <div>
      {technicians.map((technician) => (
        <div
          key={technician.technicianId}
          className="mt-5 mx-10 font-poppins h-[142px] bg-customWhite rounded-lg gap-[8px] px-[28px] py-[24px]"
        >
          <div className="flex items-center gap-2">
            {/* IMAGE & DETAILS */}
            <div className="h-[94px] w-[762px] flex gap-[16px]">
              <div className="h-[94px] w-[88px] ">
                <img
                  src={technician.profileImage || img}
                  alt={technician.name}
                  className="w-[88px] h-[94px] rounded-lg"
                />
              </div>
              <div className="w-[658px] h-[94px] gap-[16px] flex flex-col">
                <div className="flex flex-wrap h-[29px] gap-[16px]">
                  <p className="h-[29px] text-[24px]">{technician.name}</p>
                  <Button
                    type="button"
                    name="Booking Manager"
                    onClick={handleClick}
                    className={`${
                      technician.admin === true
                        ? "px-2 text-xs bg-customSlate text-customOtp rounded text-customBlue"
                        : "px-2 text-xs rounded border border-customBlue text-customBlue"
                    }`}
                  />
                </div>
                <div className="w-[658px] h-[49px] flex gap-[16px]">
                  <div className="flex flex-col w-[197px] h-[49px] border-r-2 gap-[8px]">
                    <p className="text-slate-500 w-[119px] h-[19px] text-[16px]">
                      Phone Number
                    </p>
                    <p className=" h-[22px] text-[18px]">
                      {technician.phoneNumber}{" "}
                    </p>
                  </div>
                  <div className="flex flex-col w-[210px] h-[49px] border-r-2 gap-[8px]">
                    <p className="text-slate-500 w-[71px] h-[19px] text-[16px]">
                      Expertise
                    </p>
                    <p className="h-[22px] text-[18px]">
                      {technician.specialization}{" "}
                    </p>
                  </div>
                  <div className="flex flex-col w-[197px] h-[49px] gap-[8px] border-r-2">
                    <p className="h-[19px] text-slate-500 text-[16px]">
                      Experience
                    </p>
                    <p className="h-[22px] w-[66px] text-[18px]">
                      {technician.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* DELETE & EDIT */}
            <div className="gap-[16px] w-full flex justify-center items-center ">
              <div
                onClick={() => handleDelPopup(technician.technicianId)}
                className="cursor-pointer flex w-[107px] h-[40px] bg-customSlate items-center py-[10px] px-[14px] gap-[4px]"
              >
                <Button
                  type="button"
                  name="Delete"
                  onClick={() => handleDelPopup(technician.technicianId)}
                  className="text-[17px] w-[55px] h-[20px] font-[500] text-customRed leading-[20px]"
                />
                <img
                  src={del}
                  alt="del"
                  className="w-[20px] h-[20px] border-[1.5px]"
                />
              </div>
              <div
                onClick={() => edit(technician.technicianId)}
                className="cursor-pointer flex w-[107px] h-[40px] bg-customSlate items-center  py-[10px] px-[14px] gap-[4px]"
              >
                <Button
                  type="button"
                  name="Edit"
                  onClick={() => handleEdit(technician.technicianId)}
                  className="text-[17px] w-[55px] h-[20px] font-[500] leading-[20px] text-customBlue"
                />
                <img
                  src={editt}
                  alt="del"
                  className="w-[20px] h-[20px] border-[1.5px]"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      {showDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <DeletePopup cancel={handleCancel} ondelete={handleDelete} />
        </div>
      )}
    </div>
  );
}
