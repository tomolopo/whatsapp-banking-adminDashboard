"use client";

import Link from "next/link";

export default function Layout({
 children
}:{
 children:React.ReactNode
}){

 return(

  <div className="flex h-screen">

   {/* Sidebar */}

   <div className="w-64 bg-black text-white p-6">

    <h1 className="text-xl mb-8 font-bold">
     Bank Admin
    </h1>

    <nav className="flex flex-col space-y-4">

     <Link href="/dashboard" className="hover:text-gray-300">
      Dashboard
     </Link>

     <Link href="/dashboard/accounts" className="hover:text-gray-300">
      Accounts
     </Link>

     <Link href="/dashboard/customers" className="hover:text-gray-300">
      Customers
     </Link>

     <Link href="/dashboard/transactions" className="hover:text-gray-300">
      Transactions
     </Link>

     <Link href="/dashboard/fraud" className="hover:text-gray-300">
      Fraud Alerts
     </Link>

     <Link href="/dashboard/banks" className="hover:text-gray-300">
      Banks
     </Link>

    </nav>

   </div>

   {/* Main Content */}

   <div className="flex-1 p-10 bg-gray-50">
    {children}
   </div>

  </div>

 )

}