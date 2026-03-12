"use client";

import { useEffect, useState } from "react";

export default function Banks() {

 const [banks, setBanks] = useState<any[]>([]);

 async function loadBanks() {

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=banks`
  );

  const data = await res.json();

  // FIX HERE
  setBanks(data.banks);

 }

 useEffect(() => {

  loadBanks();

 }, []);

 return (

  <div>

   <h1 className="text-2xl mb-6">
    Supported Banks
   </h1>

   <table className="w-full border">

    <thead>

     <tr>
      <th>Code</th>
      <th>Name</th>
     </tr>

    </thead>

    <tbody>

     {banks.map((b: any) => (

      <tr key={b.code}>
       <td>{b.code}</td>
       <td>{b.name}</td>
      </tr>

     ))}

    </tbody>

   </table>

  </div>

 )

}