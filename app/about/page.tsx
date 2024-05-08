"use client";

import React from "react";

const page = () => {
  //   console.log("server side compo runs in node not in browser ");
  console.log("client side compo not runs in node and runs in browser ");
  return (
    <div>
      <h1>about page</h1>
    </div>
  );
};

export default page;
