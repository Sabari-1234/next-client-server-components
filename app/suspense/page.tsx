import First from "@/components/First";
import Second from "@/components/Second";
import Third from "@/components/Third";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <First />
      <Suspense fallback={<p>loading</p>}>
        <Second />
      </Suspense>
      <Suspense fallback={<p>loading</p>}>
        <Third />
      </Suspense>
    </div>
  );
};

export default page;
