import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../store/product'
import { Link } from 'react-router-dom'

export default function Product() {
  const dispatch =useDispatch()
  const {product,productStatus} = useSelector(state=>state.product)
  const {user} =useSelector(state=>state.login)
  let loginQuery=false
  if(user.length>0){
    loginQuery=true
  }
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  return (
    <div>
      {productStatus==="SUCCESS" && (
        <div className="flex flex-wrap gap-x-6 pt-4 items-center justify-center">
          {product.map(pro=>(
            <div key={pro.p_id} className='pb-4'>
              <Link to={`detail/${pro.p_id}`}  className='py-3 border border-gray-300 w-[280px] h-[500px] flex items-center flex-col justify-between rounded-md  gap-y-1 '>
              <img src={pro.p_img} className=' h-[230px]  rounded-md p-3 h-[280px] ' alt={pro.p_name} />
              <span>{pro.p_name} </span>
              <p className='break-all px-2 '>{pro.p_description} </p>
              <span>{pro.p_price} TL </span>
              <button disabled={!loginQuery} className='p-2 bg-red-700 text-white rounded-md disabled:bg-gray-300'>sepete ekle</button>

              </Link>
            </div>
          ))}
        </div>
      )}
      {productStatus==="LOADING" && (
        <div>loading...</div>
      )}
      {productStatus==="FAIL" && (
        <div>fail</div>
      )}
    </div>
  )
}
