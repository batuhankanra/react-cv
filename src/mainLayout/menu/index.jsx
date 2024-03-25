import { useDispatch, useSelector } from "react-redux"
import { getCategory } from "../../store/categories"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export default function Menu() {
    const dispatch = useDispatch()
    const {categories}=useSelector(state=>state.categories)

    useEffect(()=>{
        dispatch(getCategory())
    },[dispatch])
  return (
    <div className='  pt-6 h-10 flex items-center justify-center gap-x-6  '>
    {categories.length>0 && categories.map((category,i)=>(
        <Link to={category} className="hover:bg-gray-600 p-2 rounded-md" key={i}>{category} </Link>
    ))}
    </div>
  )
}
