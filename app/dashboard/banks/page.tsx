"use client";

import { useEffect,useState } from "react";

export default function Banks(){

 const [banks,setBanks] = useState<any[]>([]);

 async function loadBanks(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=banks`
  );

  const data = await res.json();

  setBanks(data.banks);

 }

 useEffect(()=>{
  loadBanks();
 },[]);

 return(

  <div>

   <h1 className="text-3xl font-semibold mb-6">
    Supported Banks
   </h1>

   <div className="bg-[#111c34] rounded-xl border border-[#1b2a45]">

    <table className="w-full text-left">

     <thead className="text-gray-400 text-sm border-b border-[#1b2a45]">

      <tr>

       <th className="px-6 py-4">
        Code
       </th>

       <th className="px-6 py-4">
        Bank Name
       </th>

      </tr>

     </thead>

     <tbody>

      {banks.map((b:any)=>(

       <tr
        key={b.code}
        className="border-b border-[#1b2a45] hover:bg-[#14213b]"
       >

        <td className="px-6 py-4 font-medium text-white">
         {b.code}
        </td>

        <td className="px-6 py-4 text-gray-300">
         {b.name}
        </td>

       </tr>

      ))}

     </tbody>

    </table>

   </div>

  </div>

 )

}