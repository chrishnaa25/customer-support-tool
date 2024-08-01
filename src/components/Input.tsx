import React from "react";

type InputProps = {
  type: "text" | "file";
  name: string;
  value: string;
  palceholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

export default function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.palceholder}
      onChange={props.onChange}
      className={props.className}
    />
  );
}
