
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductPhp } from '../../store/getProduct'
import { _addBasket } from '../../store/basket'

export default function Detail() {
    const id=useParams()
    const dispatch=useDispatch()
    const {getProduct} = useSelector(state=>state.getProduct)

    useEffect(()=>{
      dispatch(getProductPhp(id.id))
    },[dispatch])
    console.log(getProduct)
    const product=getProduct[0]
    
  
  

    
    
  return (
    <div className='flex justify-center' >
        <div>
          <img src={product?.p_img} alt="" />
        </div>
        <div className=''>
        
          <h3>{product?.p_name} </h3>
        </div>
    </div>
  )
}
