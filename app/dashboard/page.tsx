"use client";

import { useEffect,useState } from "react";
import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 ResponsiveContainer
} from "recharts";

export default function Dashboard(){

 const [transactions,setTransactions] = useState([]);
 const [accounts,setAccounts] = useState([]);

 async function load(){

  const tx = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=transactions`
  );

  const acc = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=accounts`
  );

  const txData = await tx.json();
  const accData = await acc.json();

  setTransactions(txData.transactions || []);
  setAccounts(accData.accounts || []);

 }

 useEffect(()=>{

  load();

 },[]);

 const chartData = transactions.slice(0,7).map((t:any,i:number)=>({
  name:`T${i}`,
  amount:t.amount
 }));

 return(

  <div>

   <h1 className="text-3xl font-bold mb-6">
    Dashboard
   </h1>

   {/* STAT CARDS */}

   <div className="grid grid-cols-4 gap-6 mb-8">

    <div className="bg-[#111c34] p-6 rounded-xl">
     <p className="text-gray-400">
      Total Accounts
     </p>
     <h2 className="text-3xl font-bold">
      {accounts.length}
     </h2>
    </div>

    <div className="bg-[#111c34] p-6 rounded-xl">
     <p className="text-gray-400">
      Total Transactions
     </p>
     <h2 className="text-3xl font-bold">
      {transactions.length}
     </h2>
    </div>

    <div className="bg-[#111c34] p-6 rounded-xl">
     <p className="text-gray-400">
      Revenue Today
     </p>
     <h2 className="text-3xl font-bold">
      ₦0
     </h2>
    </div>

    <div className="bg-[#111c34] p-6 rounded-xl">
     <p className="text-gray-400">
      Fraud Alerts
     </p>
     <h2 className="text-3xl font-bold text-red-400">
      0
     </h2>
    </div>

   </div>

   {/* CHART */}

   <div className="bg-[#111c34] p-6 rounded-xl mb-8">

    <h2 className="mb-4 text-lg">
     Transactions Activity
    </h2>

    <ResponsiveContainer width="100%" height={250}>

     <LineChart data={chartData}>

      <XAxis dataKey="name" stroke="#aaa"/>
      <YAxis stroke="#aaa"/>

      <Tooltip/>

      <Line
       type="monotone"
       dataKey="amount"
       stroke="#ff7a00"
       strokeWidth={2}
      />

     </LineChart>

    </ResponsiveContainer>

   </div>

   {/* RECENT TRANSACTIONS */}

   <div className="bg-[#111c34] p-6 rounded-xl">

    <h2 className="mb-4 text-lg">
     Recent Transactions
    </h2>

    <table className="w-full">

     <thead className="text-gray-400 text-left">

      <tr>
       <th>Reference</th>
       <th>Amount</th>
       <th>Status</th>
       <th>Date</th>
      </tr>

     </thead>

     <tbody>

      {transactions.slice(0,6).map((t:any)=>(
       <tr key={t.id} className="border-t border-gray-800">

        <td>{t.reference}</td>
        <td>₦{t.amount}</td>
        <td>{t.status}</td>
        <td>{t.created_at}</td>

       </tr>
      ))}

     </tbody>

    </table>

   </div>

  </div>

 )

}