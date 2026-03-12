"use client"

import { useState } from "react"
import Table from "@/components/Table"
import SearchBar from "@/components/SearchBar"
import StatusBadge from "@/components/StatusBadge"
import useAutoRefresh from "@/components/useAutoRefresh"

export default function Fraud(){

 const [alerts,setAlerts] = useState<any[]>([])
 const [search,setSearch] = useState("")

 async function load(){

  try{

   const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=fraud`
   )

   const data = await res.json()

   setAlerts(data.alerts || [])

  }catch(err){

   console.log("Fraud API error",err)

   setAlerts([])

  }

 }

 useAutoRefresh(load,5000)

 const filtered = (alerts || []).filter((a:any)=>

  a.account_id?.toLowerCase().includes(search.toLowerCase()) ||
  a.reason?.toLowerCase().includes(search.toLowerCase())

 )

 return(

  <div>

   <h1 className="text-3xl font-semibold mb-6">
    Fraud Alerts
   </h1>

   <SearchBar
    value={search}
    onChange={setSearch}
    placeholder="Search alerts..."
   />

   <Table headers={[
    "Account",
    "Reason",
    "Severity",
    "Date"
   ]}>

    {filtered.map((a:any)=>(
     <tr
      key={a.id}
      className="border-b border-[#1b2a45] hover:bg-[#14213b]"
     >

      <td className="px-6 py-4">
       {a.account_id}
      </td>

      <td className="px-6 py-4 text-gray-300">
       {a.reason}
      </td>

      <td className="px-6 py-4">
       <StatusBadge status={a.severity}/>
      </td>

      <td className="px-6 py-4 text-gray-400">
       {a.created_at}
      </td>

     </tr>
    ))}

   </Table>

  </div>

 )

}