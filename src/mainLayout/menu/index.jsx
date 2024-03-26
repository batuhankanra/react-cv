import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCategoryy } from "../../store/category"




export default function Menu() {
  const dispatch = useDispatch()
  const {category,categoryStatus}=useSelector(state=>state.category)

  useEffect(()=>{
    dispatch(getCategoryy())
  },[dispatch])
    
  return (
   <div className='  pt-6 h-10 flex items-center justify-center gap-x-6  border-b border-gray-600 pb-6 '>
    {categoryStatus==="SUCCESS" && category?.length>0 && category.map(cat=>(
      
      cat.category_stat === 1 && (
       <Link to={cat.category_name} className="hover:bg-gray-600 p-2 rounded-md" key={cat.category_id}>{cat.category_name} </Link>
      )
     
   ))}
   {categoryStatus==="LOADING" && (
    <div>Loading ...</div>
   )}
   {
    categoryStatus==="FAIL" && (
      <div>hata verdi</div>
    )
   }
   </div>
  )
}