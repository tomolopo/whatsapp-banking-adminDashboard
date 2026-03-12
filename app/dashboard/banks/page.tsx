"use client";

import { useEffect, useState } from "react";

export default function Banks(){

 const [banks,setBanks] = useState([]);

 async function loadBanks(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=banks`
  );

  const data = await res.json();

  setBanks(data.banks || []);

 }

 useEffect(()=>{

  loadBanks();

 },[]);

 return(

  <div>

   <h1 className="text-2xl font-bold mb-6">
    Supported Banks
   </h1>

   <table className="w-full border border-gray-300">

    <thead className="bg-gray-100">

     <tr>

      <th className="p-2 border">Bank Code</th>
      <th className="p-2 border">Bank Name</th>

     </tr>

    </thead>

    <tbody>

     {banks.map((b:any)=>(
      <tr key={b.code}>

       <td className="p-2 border">{b.code}</td>
       <td className="p-2 border">{b.name}</td>

      </tr>
     ))}

    </tbody>

   </table>

  </div>

 )

}