import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { _destroyUser, _setUser } from '../../store/login'
import  { _removeModal, _setModal } from '../../store/modals'

export default function LoginModal() {
  const [username,setUsername]=useState('')
  const [apassword,setApassword]=useState('')
  const [password,setPassword]=useState('')
  
  const dispatch =useDispatch()
 
  const submitHandle =(e)=>{
    e.preventDefault()
    if(password === apassword){
      const formData = new FormData()
    formData.append('register',null)
    formData.append('username',username)
    formData.append('password',password)
    formData.append('apassword',apassword)
    fetch('http://localhost/learn-backend/register.php',{
      method:'POST',
      body:formData
    })
    }else {
      alert("şifreler uymiyor")
    }



  }
 
  const registerHandle=()=>{
    dispatch(_removeModal())
    dispatch(_setModal({name:'login'}))
  }
  

  return (
    <div className='flex flex-col  w-[400px]'>
      <div className=' flex items-center justify-between text-xl font-semi bold border-b w-full  p-2 border-zinc-400 '>
        Kayıt Ol
        <button className='hover:bg-zinc-100 text-base  rounded-full p-3' onClick={()=>dispatch(_removeModal())}>X</button>
      </div>
      <form onSubmit={submitHandle}  className='py-3 flex flex-col gap-y-3 '>
        <input type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder='Kullanıcı adını giriniz' className='w-full p-2 outline-none border focus:border-gray-500 rounded-md ' />
        <input type="password" value={apassword} onChange={e=>setApassword(e.target.value)} placeholder='Şifrenizi giriniz' className='w-full p-2 outline-none border focus:border-gray-500 rounded-md ' />
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Şifrenizi tekrar giriniz' className='w-full p-2  outline-none border focus:border-gray-500 rounded-md ' />
        <button type='submit' className='bg-indigo-600 text-white p-2 rounded-md'>Kayıt Ol</button>
      </form>
      <div className='text-center'>
        <span>Giriş yapmak için <button onClick={registerHandle} className='text-blue-400'>Tıklayınız</button> </span>
      </div>
      
    </div>
  )
}
