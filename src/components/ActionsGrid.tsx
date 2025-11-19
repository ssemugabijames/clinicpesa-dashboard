import React from "react";
import { FileText, HandCoins, Users, CheckCircle } from "lucide-react";

type Action = {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const actions: Action[] = [
  { title: "Pay Medical Bill", Icon: FileText },
  { title: "Get Loan", Icon: HandCoins },
  { title: "Join MaMas", Icon: Users },
  { title: "My Approvals", Icon: CheckCircle },
];

export default function ActionsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((a) => (
        <div
          key={a.title}
          className="bg-white rounded-2xl card-shadow p-6 flex flex-col items-center"
        >
          <a.Icon className="w-8 h-8 text-clinicBlue mb-1" />
          <p className="text-sm font-medium text-gray-700 text-center">
            {a.title}
          </p>
        </div>
      ))}
    </div>
  );
}

