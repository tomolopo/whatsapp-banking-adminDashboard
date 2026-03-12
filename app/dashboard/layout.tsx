"use client";

import Link from "next/link";

export default function DashboardLayout({
 children
}:{
 children:React.ReactNode
}){

 return(

  <div className="flex min-h-screen bg-[#0b1424] text-white">

   {/* SIDEBAR */}

   <div className="w-64 bg-[#070f1e] border-r border-[#1b2a45] flex flex-col">

    <div className="px-6 py-6 border-b border-[#1b2a45]">

     <h1 className="text-orange-500 text-xl font-bold">
      Bank Admin
     </h1>

     <p className="text-xs text-gray-400">
      Management System
     </p>

    </div>

    <nav className="flex-1 px-4 py-6 space-y-2">

     <Link
      href="/dashboard"
      className="block px-4 py-3 rounded-lg hover:bg-[#14213b] text-gray-300"
     >
      Dashboard
     </Link>

     <Link
      href="/dashboard/accounts"
      className="block px-4 py-3 rounded-lg hover:bg-[#14213b] text-gray-300"
     >
      Accounts
     </Link>

     <Link
      href="/dashboard/customers"
      className="block px-4 py-3 rounded-lg hover:bg-[#14213b] text-gray-300"
     >
      Customers
     </Link>

     <Link
      href="/dashboard/transactions"
      className="block px-4 py-3 rounded-lg hover:bg-[#14213b] text-gray-300"
     >
      Transactions
     </Link>

     <Link
      href="/dashboard/fraud"
      className="block px-4 py-3 rounded-lg hover:bg-[#14213b] text-gray-300"
     >
      Fraud Alerts
     </Link>

     <Link
      href="/dashboard/banks"
      className="block px-4 py-3 rounded-lg hover:bg-[#14213b] text-gray-300"
     >
      Banks
     </Link>

    </nav>

   </div>

   {/* MAIN CONTENT */}

   <div className="flex-1 p-10">

    {children}

   </div>

  </div>

 )

}