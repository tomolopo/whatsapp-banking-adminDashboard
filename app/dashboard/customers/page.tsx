"use client";

import { useEffect, useState } from "react";

export default function Customers(){

 const [customers,setCustomers] = useState([]);

 async function loadCustomers(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin/customers`
  );

  const data = await res.json();

  setCustomers(data.customers || []);

 }

 useEffect(()=>{

  loadCustomers();

  const interval = setInterval(loadCustomers,5000);

  return ()=>clearInterval(interval);

 },[]);

 return(

  <div>

   <h1 className="text-2xl font-bold mb-6">
    Customers
   </h1>

   <table className="w-full border border-gray-300">

    <thead className="bg-gray-100">

     <tr>

      <th className="p-2 border">Customer ID</th>
      <th className="p-2 border">Name</th>
      <th className="p-2 border">Phone</th>
      <th className="p-2 border">Created</th>

     </tr>

    </thead>

    <tbody>

     {customers.map((c:any)=>(
      <tr key={c.id}>

       <td className="p-2 border">{c.id}</td>
       <td className="p-2 border">{c.name}</td>
       <td className="p-2 border">{c.phone}</td>
       <td className="p-2 border">{c.created_at}</td>

      </tr>
     ))}

    </tbody>

   </table>

  </div>

 )

}