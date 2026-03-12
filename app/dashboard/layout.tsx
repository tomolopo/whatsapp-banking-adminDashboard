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

   <div className="w-64 bg-[#081020] border-r border-gray-800">

    <div className="p-6 text-xl font-bold text-orange-500">
     Bank Admin
    </div>

    <nav className="space-y-2 px-4">

     <Link href="/dashboard" className="block p-3 rounded hover:bg-gray-800">
      Dashboard
     </Link>

     <Link href="/dashboard/accounts" className="block p-3 rounded hover:bg-gray-800">
      Accounts
     </Link>

     <Link href="/dashboard/customers" className="block p-3 rounded hover:bg-gray-800">
      Customers
     </Link>

     <Link href="/dashboard/transactions" className="block p-3 rounded hover:bg-gray-800">
      Transactions
     </Link>

     <Link href="/dashboard/fraud" className="block p-3 rounded hover:bg-gray-800">
      Fraud Alerts
     </Link>

     <Link href="/dashboard/banks" className="block p-3 rounded hover:bg-gray-800">
      Banks
     </Link>

    </nav>

   </div>

   {/* MAIN CONTENT */}

   <div className="flex-1 p-8">

    {children}

   </div>

  </div>

 )

}