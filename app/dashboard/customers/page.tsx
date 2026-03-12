"use client";

import { useEffect,useState } from "react";
import Table from "@/components/Table";

export default function Customers(){

 const [customers,setCustomers] = useState<any[]>([]);

 async function load(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=customers`
  );

  const data = await res.json();

  setCustomers(data.customers);

 }

 useEffect(()=>{

  load();

 },[]);

 return(

  <div>

   <h1 className="text-3xl font-semibold mb-6">
    Customers
   </h1>

   <Table headers={["Name","Phone","Created"]}>

    {customers.map((c:any)=>(
     <tr
      key={c.id}
      className="border-b border-[#1b2a45] hover:bg-[#14213b]"
     >

      <td className="px-6 py-4 font-medium text-white">
       {c.name}
      </td>

      <td className="px-6 py-4 text-gray-300">
       {c.phone}
      </td>

      <td className="px-6 py-4 text-gray-400">
       {c.created_at}
      </td>

     </tr>
    ))}

   </Table>

  </div>

 )

}