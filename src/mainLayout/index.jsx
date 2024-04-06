import React from 'react'
import SideBar from './sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modal from '../modalss'
import Menu from './menu'
import Footer from './footer'

export default function MainLayout() {
  const modal =useSelector(state=>state.modal.modal)
  return (
    <div className='container mx-auto'>
        {modal && <Modal />}
        <SideBar />
        <Menu />
        <Outlet />
        <Footer />
        
    </div>
  )
}
