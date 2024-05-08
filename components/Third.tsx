import React from "react";

const Third = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>third</div>;
};

export default Third;
