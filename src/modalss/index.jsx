import React from 'react'
import { useSelector } from 'react-redux'
import modalsa from '../routes/modal'

export default function Modal() {
    const modal=useSelector(state=>state.modal.modal)
    const currentModal =modalsa.find(m=>m.name===modal.name)
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center  justify-center z-20'>
        <div className='bg-white p-3 text-black max-w-[900wh] max-h-[90vh] overflow-auto rounded-2xl '>
            {currentModal && <currentModal.element />}
        </div>
    </div>
  )
}
