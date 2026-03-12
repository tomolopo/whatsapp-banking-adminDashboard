"use client";

import { useEffect, useState } from "react";

export default function Transactions(){

 const [transactions,setTransactions] = useState([]);

 async function loadTransactions(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin/transactions`
  );

  const data = await res.json();

  setTransactions(data.transactions || []);

 }

 useEffect(()=>{

  loadTransactions();

  const interval = setInterval(loadTransactions,5000);

  return ()=>clearInterval(interval);

 },[]);

 return(

  <div>

   <h1 className="text-2xl font-bold mb-6">
    Transactions
   </h1>

   <table className="w-full border border-gray-300">

    <thead className="bg-gray-100">

     <tr>

      <th className="p-2 border">ID</th>
      <th className="p-2 border">Type</th>
      <th className="p-2 border">Amount</th>
      <th className="p-2 border">Status</th>
      <th className="p-2 border">Date</th>

     </tr>

    </thead>

    <tbody>

     {transactions.map((t:any)=>(

      <tr key={t.id}>

       <td className="p-2 border">{t.id}</td>
       <td className="p-2 border">{t.type}</td>
       <td className="p-2 border">₦{t.amount}</td>
       <td className="p-2 border">{t.status}</td>
       <td className="p-2 border">{t.created_at}</td>

      </tr>

     ))}

    </tbody>

   </table>

  </div>

 )

}