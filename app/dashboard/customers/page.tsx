"use client"

import { useEffect, useState } from "react"
import { fetchCustomers } from "../../../lib/api"

export default function Customers(){

 const [customers,setCustomers] = useState<any[]>([])
 const [search,setSearch] = useState("")
 const [page,setPage] = useState(1)

 async function loadCustomers(){

  const data = await fetchCustomers(search,page)

  setCustomers(data)

 }

 useEffect(()=>{

  loadCustomers()

 },[page])


 return (

 <div>

  <h1 className="text-2xl font-bold mb-4">
   Customers
  </h1>


  <input
   placeholder="Search customers..."
   value={search}
   onChange={(e)=>setSearch(e.target.value)}
   className="w-full p-3 mb-6 rounded bg-slate-800"
  />


  <table className="w-full text-left">

   <thead>
    <tr>
     <th>First Name</th>
     <th>Last Name</th>
     <th>Phone</th>
     <th>Account</th>
     <th>Balance</th>
     <th>Transactions</th>
    </tr>
   </thead>

   <tbody>

    {customers.map((c:any)=>(

     <tr key={c.id}>

      <td>{c.first_name}</td>
      <td>{c.last_name}</td>
      <td>{c.phone}</td>
      <td>{c.account_number || "-"}</td>
      <td>{c.balance || 0}</td>
      <td>{c.transaction_count}</td>

     </tr>

    ))}

   </tbody>

  </table>


  <div className="flex gap-4 mt-6">

   <button
    onClick={()=>setPage(page-1)}
    disabled={page===1}
   >
    Previous
   </button>

   <span>Page {page}</span>

   <button
    onClick={()=>setPage(page+1)}
   >
    Next
   </button>

  </div>


 </div>

 )

}