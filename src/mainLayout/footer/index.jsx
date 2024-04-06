import Logo from "./logo";
import Menu from "./menu";


export default function Footer() {
  return (
    <div className='flex   border-t border-gray-500 py-4'>
        <div className="w-1/2  flex  flex-col  justify-center ">
            <Logo />
            <Menu />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
            yardım
        </div>
    </div>
  )
}
