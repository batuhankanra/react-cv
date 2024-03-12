
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div>
        <div className='flex items-center justify-center gap-x-2 p-3 m-1 rounded-full bg-gray-600'>
          <input type="text" className='text-lg bg-gray-600 outline-none px-6' />
          <button><IoSearch size={28} /></button>
        </div>
    </div>
  )
}
