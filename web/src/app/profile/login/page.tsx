"use client";
import React, { ReactElement } from "react";
import Background from "./components/background"
import LoginForm from "./components/loginForm"

export default function Login(): ReactElement {
  return (
    <>
      <Background />
      <LoginForm />
    </>
  );
}
