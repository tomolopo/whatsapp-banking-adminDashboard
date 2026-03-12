"use client";

import { useEffect,useState } from "react";

export default function Fraud(){

 const [alerts,setAlerts] = useState([]);

 async function load(){

  const res = await fetch(
   "https://whatsapp-banking-api.vercel.app/api/admin/fraud"
  );

  const data = await res.json();

  setAlerts(data);

 }

 useEffect(()=>{

  load();

 },[]);

 return(

  <div>

   <h1 className="text-2xl mb-6">
    Fraud Alerts
   </h1>

   <table className="w-full border">

    <thead>

     <tr>

      <th>Account</th>
      <th>Reason</th>
      <th>Severity</th>
      <th>Date</th>

     </tr>

    </thead>

    <tbody>

     {alerts.map((a:any)=>(
      <tr key={a.id}>

       <td>{a.account_id}</td>
       <td>{a.reason}</td>
       <td>{a.severity}</td>
       <td>{a.created_at}</td>

      </tr>
     ))}

    </tbody>

   </table>

  </div>

 )

}