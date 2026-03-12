"use client"

import { useState } from "react"
import Table from "@/components/Table"
import SearchBar from "@/components/SearchBar"
import StatusBadge from "@/components/StatusBadge"
import useAutoRefresh from "@/components/useAutoRefresh"

export default function Transactions(){

 const [transactions,setTransactions] = useState<any[]>([])
 const [search,setSearch] = useState("")

 async function load(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=transactions`
  )

  const data = await res.json()

  setTransactions(data.transactions)

 }

 useAutoRefresh(load,5000)

 const filtered = transactions.filter((t:any)=>

  t.reference?.toLowerCase().includes(search.toLowerCase()) ||
  t.status?.toLowerCase().includes(search.toLowerCase())

 )

 return(

  <div>

   <h1 className="text-3xl font-semibold mb-6">
    Transactions
   </h1>

   <SearchBar
    value={search}
    onChange={setSearch}
    placeholder="Search transactions..."
   />

   <Table headers={[
    "Reference",
    "Amount",
    "Status",
    "Date"
   ]}>

    {filtered.map((t:any)=>(
     <tr
      key={t.id}
      className="border-b border-[#1b2a45] hover:bg-[#14213b]"
     >

      <td className="px-6 py-4 font-medium">
       {t.reference}
      </td>

      <td className="px-6 py-4 text-gray-300">
       ₦{t.amount}
      </td>

      <td className="px-6 py-4">
       <StatusBadge status={t.status}/>
      </td>

      <td className="px-6 py-4 text-gray-400">
       {t.created_at}
      </td>

     </tr>
    ))}

   </Table>

  </div>

 )

}