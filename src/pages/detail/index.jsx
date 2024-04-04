
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductPhp } from '../../store/getProduct'

export default function Detail() {
    const id=useParams()
    const dispatch=useDispatch()
    const {getProduct} = useSelector(state=>state.getProduct)

    useEffect(()=>{
      dispatch(getProductPhp(id.id))
    },[dispatch])
    console.log(getProduct)

    
    
  return (
    <div>
        {getProduct.map(pro=>(
          <div key={pro.p_id} className='flex  justify-between pt-3'>
            <div>
              <img src={pro.p_img} className='w-[700px] h-[700px]' />
            </div>
            <div className='flex flex-col'>
              <span className='text-4xl font-bold border-b p-3'>{pro.p_name} </span>
              <p className='text-gray-500 text-lg p-2'>{pro.p_description} </p>
              <span>Rating :{pro.p_rating} </span>
              <span className=''>Price:{pro.p_price}TL </span>

            </div>
            
          </div>
        ))}
    </div>
  )
}
