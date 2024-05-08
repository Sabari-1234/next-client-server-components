import React from "react";

const page = () => {
  return (
    <div>
      time:
      {new Date().toLocaleTimeString()}
    </div>
  );
};

export default page;
