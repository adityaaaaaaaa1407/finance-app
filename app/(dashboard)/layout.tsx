import Header from "@/components/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
    <Header/>
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default DashboardLayout;
