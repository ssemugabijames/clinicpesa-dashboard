import React from "react";
import {
  ChevronLeft, X, EyeOff, Eye, TrendingUp, Send, // Card actions
  FileText, DollarSign, Users, CheckSquare, // Grid actions
} from 'lucide-react';

type Props = { appName?: string; userName?: string };

export default function TopBar({ appName = "clinicPesa", userName = "User" }: Props) {
  return (
    <div className=" relative pt-2 pb-20 px-4 bg-gradient-to-br from-clinicBlue to-clinicBlue text-white rounded-b-3xl shadow-lg">
    <div className="flex justify-between items-center mb-4">
      {/* Yellow/Gold icons for navigation */}
      <ChevronLeft className="w-6 h-6 text-yellow-400" />
      <h1 className="text-xl font-semibold mt-10">clinicPesa</h1>
      <X className="w-6 h-6 text-yellow-400" />
    </div>
    <p className="text-center text-sm font-light">Good Morning, {userName}</p>
  </div>
  );
}
