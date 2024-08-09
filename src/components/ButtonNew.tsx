import React from "react";

type ButtonProps = {
  type: "button";
  name: string;
  className: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  "data-name": string;
};

export default function ButtonNew(props: ButtonProps) {
  return (
    <button
      type={props.type}
      name={props.name}
      onClick={props.onClick}
      data-name={props["data-name"]}
      className={props.className}
    >
      {props.name}
    </button>
  );
}
