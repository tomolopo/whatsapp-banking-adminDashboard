"use client";

import { useEffect,useState } from "react";

export default function Transactions(){

 const [tx,setTx] = useState([]);

 async function load(){

  const res = await fetch(
   "https://whatsapp-banking-api.vercel.app/api/admin/transactions"
  );

  const data = await res.json();

  setTx(data);

 }

 useEffect(()=>{

  load();

  const interval = setInterval(load,5000);

  return ()=>clearInterval(interval);

 },[]);

 return(

  <div>

   <h1 className="text-2xl mb-6">
    Transactions
   </h1>

   <table className="w-full border">

    <thead>

     <tr>

      <th>ID</th>
      <th>Type</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Date</th>

     </tr>

    </thead>

    <tbody>

     {tx.map((t:any)=>(
      <tr key={t.id}>

       <td>{t.id}</td>
       <td>{t.type}</td>
       <td>{t.amount}</td>
       <td>{t.status}</td>
       <td>{t.created_at}</td>

      </tr>
     ))}

    </tbody>

   </table>

  </div>

 )

}