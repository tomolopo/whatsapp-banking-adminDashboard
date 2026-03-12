"use client"

export default function SearchBar({
 value,
 onChange,
 placeholder
}:{
 value:string
 onChange:(v:string)=>void
 placeholder:string
}){

 return(

  <input
   value={value}
   onChange={(e)=>onChange(e.target.value)}
   placeholder={placeholder}
   className="
   w-full
   bg-[#111c34]
   border border-[#1b2a45]
   rounded-lg
   px-4 py-3
   mb-6
   text-sm
   focus:outline-none
   focus:border-orange-500
   "
  />

 )

}