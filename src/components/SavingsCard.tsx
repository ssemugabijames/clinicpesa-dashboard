import React, { useState } from "react";
import { HandCoins } from "lucide-react";
import { EyeIcon as EyeOutline, BanknotesIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import {
  ChevronLeft, X, EyeOff, Eye, TrendingUp, Send, // Card actions
  FileText, DollarSign, Users, CheckSquare,  // Grid actions
} from 'lucide-react'
export default function SavingsCard() {
  const [visible, setVisible] = useState(true);
   const [showBalance, setShowBalance] = useState(true);
  const balance = "50,000"; 

  return (
    
    // Card is positioned to overlap the top bar
    <div className="absolute top-[150px] left-7 right-6 bg-white p-6 rounded-[2rem] sm:rounded-xl shadow-2xl z-10 mx-auto max-w-full sm:max-w-sm">


      <div className="flex justify-start items-center mb-2 absolute top-0 left-0 bg-gray-500">
        {/* Savings label matches the image */}
        <span className="text-xs font-bold text-clinicBlue bg-gray-100 px-3 py-1  ">
          Savings
        </span>
      </div>

      <div className="text-left ">
        <h2 className="text-sm font-bold flex justify-center text-clinicBlue"><span>Balance</span></h2>
        <div className="flex justify-between items-center mt-1 ml-20  pb-0">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-clinicBlue text-center md:text-left pb-1 ">
            UGX {showBalance ? balance : "******"}
          </p>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={showBalance ? "Hide balance" : "Show balance"}
          >
            {showBalance ? <EyeOff className="w-6 h-6 text-clinicBlue" /> : <Eye className="w-6 h-6 text-clinicBlue" />}
          </button>
        </div>
      </div>

      {/* Details section */}
      <div className="flex justify-between text-xs text-gray-500 mb-2 border-b border-gray-100 pb-1">
        <p>Frequency: <span className="font-semibold text-clinicBlue">Monthly</span></p>
        <p>AutoSave amount: <span className="font-semibold text-clinicBlue">UGX 1,000</span></p>
      </div>

      {/* Action buttons matching the image layout */}
      <div className="flex justify-around divide-x divide-gray-200">
        <button className="flex flex-col items-center flex-1 text-blue-600 hover:text-blue-700 transition-colors py-1">
          <HandCoins  className="w-6 h-6 mb-0 text-clinicBlue" /> {/* Deposit icon */}
          <span className="text-sm font-medium text-clinicBlue">Deposit</span>
        </button>
        <button className="flex flex-col items-center flex-1 text-blue-600 hover:text-blue-700 transition-colors py-1">
          <Send className="w-6 h-6 mb-0 text-clinicBlue" /> {/* Share Medical icon */}
          <span className="text-sm font-medium text-clinicBlue">Share Medical</span>
        </button>
      </div>
    </div>
  );
}
