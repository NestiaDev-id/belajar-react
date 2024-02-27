import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import FormRegister from "../components/fragments/FormRegister";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
}
