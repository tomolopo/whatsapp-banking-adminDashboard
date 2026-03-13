"use client"

import { useEffect, useState } from "react"
import { fetchBanks } from "@/lib/api"

export default function Banks(){

 const [banks,setBanks] = useState<any[]>([])

 async function loadBanks(){

  const data = await fetchBanks()

  setBanks(data)

 }

 useEffect(()=>{

  loadBanks()

 },[])


 return (

 <div>

  <h1 className="text-2xl font-bold mb-6">
   Supported Banks
  </h1>


  <table className="w-full">

   <thead>
    <tr>
     <th>Code</th>
     <th>Bank Name</th>
    </tr>
   </thead>

   <tbody>

    {banks.map((b:any)=>(

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