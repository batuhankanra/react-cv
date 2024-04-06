import React from 'react'

export default function Menu() {
  return (
    <div>
        <ul className='flex flex-col gap-y-1 pl-6 text-lg font-semibold'>
            <li><a href='/' className='hover:underline hover:decoration-solid p-1 rounded-md'>Öz Geçmişim</a></li>
            <li><a href='/' className='hover:underline hover:decoration-solid p-1 rounded-md'>İleşitim Bilgileri</a></li>
            <li><a href='/' className='hover:underline hover:decoration-solid p-1 rounded-md'>Projelerim</a></li>
        </ul>
    </div>
  )
}
