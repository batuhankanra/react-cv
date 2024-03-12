import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className=' text-3xl font-bold hover:bg-gray-800 p-2  rounded-full'>BATUHAN KANRA/<span className='text-lg text-gray-400 '>v1</span></Link>
  )
}
