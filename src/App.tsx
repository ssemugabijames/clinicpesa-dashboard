import React from "react";
import TopBar from "./components/TopBar";
import SavingsCard from "./components/SavingsCard";
import Tabs from "./components/Tabs";
import ActionsGrid from "./components/ActionsGrid";


export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--bg,#f7f7f8)]">
      <div className="max-w-md mx-auto p-4">
        <TopBar appName="clinicPesa" userName="Robert" />
        <div className="mt-4">
          <SavingsCard />
        </div>

        <div className="mt-6">
          <Tabs />
        </div>

        <div className="mt-4">
          <ActionsGrid />
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <span className="font-medium">clinicPesa</span> <span className="text-blue-600">T&amp;Cs</span> apply.
        </div>
      </div>
    </div>
  );
}
