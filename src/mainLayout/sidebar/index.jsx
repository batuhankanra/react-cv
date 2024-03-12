import React from 'react'
import Logo from './logo'
import Search from './search';
import LoginBasket from './login-basket';


export default function SideBar() {
   
  return (
    <div className='flex items-center justify-between pt-2 sticky'>
        <Logo />
        <Search />
        <LoginBasket />
    </div>
  )
}
