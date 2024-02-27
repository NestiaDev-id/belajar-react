import { useState } from "react";
import React from "react";
import InputForm from "./components/elements/form/index";

import Button from "./components/elements/Button/index";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      {/* <Log inPage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
