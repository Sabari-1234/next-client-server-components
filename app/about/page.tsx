import React from "react";

const page = () => {
  console.log("server side compo runs in node not in browser ");
  return (
    <div>
      <h1>about page</h1>
    </div>
  );
};

export default page;
