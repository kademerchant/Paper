"use client";
import React, { ReactElement } from "react";
import RegisterForm from "./components/registerForm";
import Background from "./components/background"


export default function Register(): ReactElement {
  return (
    <>
      <Background />
      <RegisterForm />
    </>
  );
}
