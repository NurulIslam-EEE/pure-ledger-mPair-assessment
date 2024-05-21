"use client";

import React from "react";
import DashboardSidebar from "../../../components/Dashboard/DashboardSidebar";
import { useRouter } from "next/router";

function DashboardLayout({ children }) {
  return (
    <DashboardSidebar>
      <div className="w-full">{children}</div>
    </DashboardSidebar>
  );
}

export default DashboardLayout;
