import React from "react";

type ButtonProps = {
  type: "button";
  name: string;
  className: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      name={props.name}
      onClick={props.onClick}
      className={props.className}
    >
      {props.name}
    </button>
  );
}
