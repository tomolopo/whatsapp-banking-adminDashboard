"use client";

import { useEffect, useState } from "react";

export default function Accounts(){

 const [accounts,setAccounts] = useState([]);

 async function loadAccounts(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=accounts`
  );

  const data = await res.json();

  setAccounts(data.accounts || []);

 }

 useEffect(()=>{

  loadAccounts();

  const interval = setInterval(loadAccounts,5000);

  return ()=>clearInterval(interval);

 },[]);

 return(

  <div>

   <h1 className="text-2xl font-bold mb-6">
    Accounts
   </h1>

   <table className="w-full border border-gray-300">

    <thead className="bg-gray-100">

     <tr>

      <th className="p-2 border">Account Number</th>
      <th className="p-2 border">User ID</th>
      <th className="p-2 border">Balance</th>
      <th className="p-2 border">Created</th>

     </tr>

    </thead>

    <tbody>

     {accounts.map((a:any)=>(
      <tr key={a.id}>

       <td className="p-2 border">{a.account_number}</td>
       <td className="p-2 border">{a.user_id}</td>
       <td className="p-2 border">₦{a.balance}</td>
       <td className="p-2 border">{a.created_at}</td>

      </tr>
     ))}

    </tbody>

   </table>

  </div>

 )

}