import React, { useState } from "react";

const tabs = ["ACCOUNT OPTIONS", "INVEST", "TRANSACTIONS"];
const tab = ["."];
export default function Tabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-40 bg-white">
      <div className="flex items-center gap-3 ml-40 mt-10">
        {tab.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={`text-2xl font-bold ${
              i === active ? "text-clinicYellow transition-all" : "text-gray-400"
            } uppercase`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-6 ml-10  sm:text-3xl ">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={`text-sm font-bold ${
              i === active ? "text-clinicBlue" : "text-gray-400"
            } uppercase`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* indicator */}
      <div className="mt-3">
        <div className="relative h-2">
          <div className="absolute left-0 right-0 h-2 bg-transparent " />
          <div
            className="absolute h-1 rounded-full bg-clinicYellow transition-all ml-10"
            style={{
              width: "32%",
              left: `${active * 34}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
