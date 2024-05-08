"use client";

import { useTheme } from "@/components/ThemeProvider";
import React from "react";

const page = () => {
  const theme = useTheme();
  return <div>{theme.color.call()}</div>;
};

export default page;
