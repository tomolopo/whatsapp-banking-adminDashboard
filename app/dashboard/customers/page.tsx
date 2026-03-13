"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Customers(){

 const router = useRouter()

 const [customers,setCustomers] = useState<any[]>([])
 const [search,setSearch] = useState("")
 const [page,setPage] = useState(1)

 async function loadCustomers(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=customers&search=${search}&page=${page}`
  )

  const data = await res.json()

  setCustomers(data.customers || [])

 }

 useEffect(()=>{
  loadCustomers()
 },[search,page])


 return(

  <div className="p-6 text-white">

   <h1 className="text-2xl font-semibold mb-6">
    Customers
   </h1>

{/* SEARCH */}

   <input
    placeholder="Search customers..."
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    className="mb-4 p-2 bg-slate-800 rounded w-full"
   />

{/* TABLE */}

   <div className="bg-[#0f172a] rounded-xl p-4">

    <table className="w-full">

     <thead>

      <tr className="border-b border-gray-700 text-gray-400">

       <th>First Name</th>
       <th>Last Name</th>
       <th>Phone</th>
       <th>Account</th>
       <th>Balance</th>
       <th>Transactions</th>
       <th>Fraud</th>

      </tr>

     </thead>

     <tbody>

      {customers.map((c:any)=>(

       <tr
        key={c.id}
        className="border-b border-gray-800 hover:bg-[#1e293b] cursor-pointer"
        onClick={()=>router.push(`/dashboard/customers/${c.id}`)}
       >

        <td>{c.first_name}</td>
        <td>{c.last_name}</td>
        <td>{c.phone}</td>
        <td>{c.account_number || "-"}</td>
        <td>₦{c.balance || 0}</td>
        <td>{c.transaction_count}</td>

        <td>
         {c.has_fraud_flag
          ? <span className="text-red-500">⚠️</span>
          : "—"}
        </td>

       </tr>

      ))}

     </tbody>

    </table>

   </div>

{/* PAGINATION */}

   <div className="flex gap-4 mt-6">

    <button
     onClick={()=>setPage(page-1)}
     disabled={page === 1}
     className="px-4 py-2 bg-slate-800 rounded"
    >
     Previous
    </button>

    <span>Page {page}</span>

    <button
     onClick={()=>setPage(page+1)}
     className="px-4 py-2 bg-slate-800 rounded"
    >
     Next
    </button>

   </div>

  </div>

 )

}