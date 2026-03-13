"use client"

import { useEffect, useState } from "react"

export default function CustomerProfile({ params }: any){

 const [customer,setCustomer] = useState<any>(null)

 async function load(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=customer&id=${params.id}`
  )

  const data = await res.json()

  setCustomer(data.customer)

 }

 useEffect(()=>{
  load()
 },[])


 if(!customer) return <div>Loading...</div>


 return(

  <div className="p-6 text-white">

   <h1 className="text-2xl mb-6">
    Customer Profile
   </h1>

   <div className="space-y-4">

    <p><b>Name:</b> {customer.first_name} {customer.last_name}</p>
    <p><b>Phone:</b> {customer.phone}</p>
    <p><b>Address:</b> {customer.address}</p>
    <p><b>Account:</b> {customer.account_number}</p>
    <p><b>Balance:</b> ₦{customer.balance}</p>

   </div>

  </div>

 )

}