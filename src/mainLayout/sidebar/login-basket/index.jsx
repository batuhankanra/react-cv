import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { _setModal } from '../../../store/modals'
import { Popover } from '@headlessui/react'
import { CiUser } from "react-icons/ci";
import { SlBasket  } from "react-icons/sl";
import { _destroyUser } from '../../../store/login';

export default function LoginBasket() {
    const dispatch=useDispatch()
    const {user} = useSelector(state=>state.login)
    let m=false
    if(user.length>0){
      m=true
    }else{
      m=false
    }
  return (
    <div className='flex items-center justify-center gap-x-3'>
        {m ? (
          <Popover className="relative">
          <Popover.Button className="flex items-center justify-center gap-x-1 hover:bg-gray-600 py-3 px-2 rounded-full"><CiUser size={22} /> {user} </Popover.Button>
    
          <Popover.Panel className="absolute z-10">
            <div className="flex flex-col items-center justify-center gap-y-2 w-[200px] bg-[#fff] text-black rounded-md  -translate-x-12 overflow-hidden border border-gray-300 ">
              <a href="/profile" className='py-2 hover:bg-zinc-300 w-full text-center'>Profil Düzenle</a>
              <button onClick={()=>dispatch(_destroyUser())} className='py-2 hover:bg-zinc-300  w-full text-center'>Çıkış Yap</button>
            </div>
    
            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>
        ):(
          <button className='flex items-center justify-center gap-x-1 hover:bg-gray-600 py-3 px-2 rounded-full' onClick={()=>dispatch(_setModal({name:'login'}))}> <CiUser size={22} /> Giriş Yap </button>

        )}
        
        <button className='flex items-center justify-center gap-x-1 hover:bg-gray-600 py-3 px-2 rounded-full'> 
            <SlBasket size={22} /> 
            Sepetim
        </button>
    </div>
  )
}
