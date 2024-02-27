import React from "react";
import InputForm from "../elements/form";
import Button from "../elements/Button";

export default function FormRegister() {
  return (
    <form action="">
      <InputForm
        title="Username"
        type="text"
        placeholder="Insert your username"
        name="username"
      />
      <InputForm
        title="email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        title="password"
        type="password"
        placeholder="****"
        name="password"
      />
      <InputForm
        title="Confirm Password"
        type="password"
        placeholder="****"
        name="confirmPassword"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Register
      </Button>
    </form>
  );
}
