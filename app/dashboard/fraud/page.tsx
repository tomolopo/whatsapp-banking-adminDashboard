"use client";

import { useEffect, useState } from "react";

export default function Fraud(){

 const [alerts,setAlerts] = useState([]);

 async function loadAlerts(){

  const res = await fetch(
   `${process.env.NEXT_PUBLIC_API_URL}/api/admin?resource=fraud`
  );

  const data = await res.json();

  setAlerts(data.alerts || []);

 }

 useEffect(()=>{

  loadAlerts();

 },[]);

 return(

  <div>

   <h1 className="text-2xl font-bold mb-6">
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