import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoryy } from "../../../store/product"




export default function Product() {
  const dispatch = useDispatch()
  const {category,categoryStatus}=useSelector(state=>state.category)
  console.log(category,categoryStatus)

  useEffect(()=>{
    dispatch(getCategoryy())
  },[dispatch])
   
    
  return (
   <div>
    
   </div>
  )
}