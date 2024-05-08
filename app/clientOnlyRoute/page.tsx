"use client";
import { serverFn } from "@/utils/server-only-utils";
import React from "react";

const page = () => {
  const result = serverFn();
  return (
    <div>
      <h1>client rendered</h1>
      <h1>{result}</h1>
    </div>
  );
};

export default page;
