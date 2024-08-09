import React, { useState } from "react";
import minus from "../images/minus.svg";
import plus from "../images/pluuuus.svg";

type SlotProps = {
  name: string;
};

function Slot(props: SlotProps) {
  const [count, setCount] = useState<number>(1);
  const handleMinus = () => {
    if (count >= 0) setCount(count - 1);
  };
  const handlePlus = () => {
    if (count >= 0) setCount(count + 1);
  };

  return (
    <div className="flex flex-col bg-customSlate rounded-lg w-36 py-2 items-center gap-2 font-poppins">
      <h2 className="w-32 text-center"> {props.name}</h2>
      <div className="w-32 flex gap-2 items-center justify-evenly">
        <div
          onClick={handleMinus}
          className="bg-customWhite flex justify-center items-center rounded h-7 p-2 w-7 cursor-pointer"
        >
          <img src={minus} alt="" className="" />
        </div>
        <h1>{count}</h1>
        <div
          onClick={handlePlus}
          className="bg-customWhite flex justify-center items-center rounded h-7 p-2 w-7 cursor-pointer"
        >
          <img src={plus} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Slot;
