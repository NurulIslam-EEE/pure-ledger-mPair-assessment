"use client";
import React from "react";
import styes from "./login.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useRouter } from "next/navigation";

function Navigation() {
  const router = useRouter();
  return (
    <div className={styes.login_container}>
      <Image src="/logo.png" width={72} height={30} alt="" />

      <Button className={styes.login} onClick={() => router.push("/")}>
        Login
      </Button>
    </div>
  );
}

export default Navigation;
