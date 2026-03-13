"use client"

import { useEffect, useState } from "react"

export default function Customers(){

 const [customers,setCustomers] = useState<any[]>([])
 const [loading,setLoading] = useState(true)

 async function loadCustomers(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=customers`
  )

  const data = await res.json()

  setCustomers(data.customers || [])
  setLoading(false)

 }

 useEffect(()=>{
  loadCustomers()
 },[])


 if(loading){
  return <div className="p-6 text-white">Loading customers...</div>
 }

 return (

  <div className="p-6 text-white">

   <h1 className="text-2xl font-semibold mb-6">
    Customers
   </h1>

   <div className="bg-[#0f172a] rounded-xl p-4">

    <table className="w-full text-left">

     <thead>

      <tr className="border-b border-gray-700 text-gray-400">

       <th className="py-3">First Name</th>
       <th className="py-3">Last Name</th>
       <th className="py-3">Address</th>
       <th className="py-3">Phone</th>
       <th className="py-3">Created Date</th>

      </tr>

     </thead>

     <tbody>

      {customers.map((c:any)=>(

       <tr
        key={c.id}
        className="border-b border-gray-800 hover:bg-[#1e293b]"
       >

        <td className="py-3">{c.first_name}</td>
        <td className="py-3">{c.last_name}</td>
        <td className="py-3">{c.address}</td>
        <td className="py-3">{c.phone}</td>
        <td className="py-3">
         {new Date(c.created_at).toLocaleDateString()}
        </td>

       </tr>

      ))}

     </tbody>

    </table>

   </div>

  </div>

 )

}