import React from "react";
import { Header } from "@organism/index.tsx";

const index = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default index;
