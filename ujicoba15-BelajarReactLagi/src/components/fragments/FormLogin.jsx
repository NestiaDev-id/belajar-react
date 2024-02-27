import React, { useState } from "react";
import InputForm from "../elements/form";
import Button from "../elements/Button";
import { login } from "../services/AuthService";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        title="Username"
        type="text"
        placeholder="Enter your Username"
        name="username"
      />
      <InputForm
        title="password"
        type="password"
        placeholder="****"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
}
