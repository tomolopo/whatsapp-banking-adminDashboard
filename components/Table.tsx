export default function Table({
 headers,
 children
}:{
 headers:string[]
 children:React.ReactNode
}){

 return(

  <div className="bg-[#111c34] rounded-xl border border-[#1b2a45]">

   <table className="w-full text-left">

    <thead className="text-gray-400 text-sm border-b border-[#1b2a45]">

     <tr>

      {headers.map((h)=>(
       <th key={h} className="px-6 py-4">
        {h}
       </th>
      ))}

     </tr>

    </thead>

    <tbody>

     {children}

    </tbody>

   </table>

  </div>

 )

}