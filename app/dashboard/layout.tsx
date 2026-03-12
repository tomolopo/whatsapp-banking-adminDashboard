"use client";

import Link from "next/link";

export default function Layout({
 children
}:{
 children:React.ReactNode
}){

 return(

  <div className="flex h-screen">

   <div className="w-64 bg-black text-white p-6">

    <h1 className="text-xl mb-6">
     Bank Admin
    </h1>

    <nav className="space-y-3">

     <Link href="/dashboard">
      Dashboard
     </Link>

     <Link href="/dashboard/accounts">
      Accounts
     </Link>

     <Link href="/dashboard/customers">
      Customers
     </Link>

     <Link href="/dashboard/transactions">
      Transactions
     </Link>

     <Link href="/dashboard/fraud">
      Fraud Alerts
     </Link>

     <Link href="/dashboard/banks">
      Banks
     </Link>

    </nav>

   </div>

   <div className="flex-1 p-10">
    {children}
   </div>

  </div>

 )

}