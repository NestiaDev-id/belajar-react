import React from "react";
import Label from "./label";
import Input from "./input";

export default function InputForm(props) {
  const { title, name, type, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
