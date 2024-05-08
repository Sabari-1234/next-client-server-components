import React from "react";

const Second = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>second</div>;
};

export default Second;
