"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ChevronLeft from "../../assets/img/chevron_left.png";
import "./style.scss";
function BackBtn() {
  const router = useRouter();
  return (
    <button
      className="backBtn"
      onClick={() => {
        router.push("/");
      }}
    >
      <img src={ChevronLeft.src} />
      Back
    </button>
  );
}

export default BackBtn;
