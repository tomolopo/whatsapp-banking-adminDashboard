"use client";

import { useEffect,useState } from "react";
import Table from "@/components/Table";

export default function Accounts(){

 const [accounts,setAccounts] = useState<any[]>([]);

 async function load(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=accounts`
  );

  const data = await res.json();

  setAccounts(data.accounts);

 }

 useEffect(()=>{

  load();

 },[]);

 return(

  <div>

   <h1 className="text-3xl font-semibold mb-6">
    Accounts
   </h1>

   <Table headers={["Account Number","User","Balance","Created"]}>

    {accounts.map((a:any)=>(
     <tr
      key={a.id}
      className="border-b border-[#1b2a45] hover:bg-[#14213b]"
     >

      <td className="px-6 py-4 font-medium text-white">
       {a.account_number}
      </td>

      <td className="px-6 py-4 text-gray-300">
       {a.user_id}
      </td>

      <td className="px-6 py-4 text-gray-300">
       ₦{a.balance}
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