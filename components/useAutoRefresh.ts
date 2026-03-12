import { useEffect } from "react"

export default function useAutoRefresh(
 fn:()=>void,
 interval:number = 5000
){

 useEffect(()=>{

  fn()

  const timer = setInterval(()=>{

   fn()

  },interval)

  return ()=>clearInterval(timer)

 },[])

}