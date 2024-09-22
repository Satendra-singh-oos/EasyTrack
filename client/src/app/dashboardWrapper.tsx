import Navbar from "@/components/Navabar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* sidebar */}
      <Sidebar />
      <main
        className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64`}
      >
        {/* Navbar exist */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
