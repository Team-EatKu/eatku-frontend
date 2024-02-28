import React from "react";
import { Header } from "@organism/index.tsx";

const Index = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Index;
