import { cookies } from "next/headers";
import React from "react";

const page = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  return (
    <div>
      time:
      {new Date().toLocaleTimeString()}
    </div>
  );
};

export default page;
