"use client";
import { Component } from "@/components/ui/radial-social-menu";

export default function Navbar() {
  return (
    <div
      className="fixed top-8 left-8 z-50"
      style={{
        width: "340px",
        height: "340px",
      }}
    >
      <Component />
      <div
        className="absolute w-full h-full -z-10"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=\\'4\\' height=\\'4\\' viewBox=\\'0 0 6 6\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'6\\' cy=\\'6\\' r=\\'1\\' fill=\\'%23aaa\\' fill-opacity=\\'0.25\\' /%3E%3C/svg%3E')",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
