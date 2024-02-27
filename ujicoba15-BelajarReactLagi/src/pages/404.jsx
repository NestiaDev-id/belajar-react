import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">
        Sorry, laman yang anda cari tidak ditemukan
      </p>
      <p className="my-5 text-lg">{error.statusText || error.message}</p>
    </div>
  );
}
