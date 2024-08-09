import React from "react";

type InputProps = {
  type: "text" | "number" | "file" | "password" | "email" | "tel";
  name: string;
  value: string | number;
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
