export default function StatusBadge({status}:{status:string}){

 const styles:any = {

  completed:"bg-green-500/20 text-green-400",
  success:"bg-green-500/20 text-green-400",

  pending:"bg-blue-500/20 text-blue-400",

  failed:"bg-red-500/20 text-red-400",

  flagged:"bg-orange-500/20 text-orange-400"

 }

 const style = styles[status?.toLowerCase()] || "bg-gray-500/20 text-gray-300"

 return(

  <span
   className={`px-3 py-1 rounded-full text-xs font-medium ${style}`}
  >
   {status}
  </span>

 )

}