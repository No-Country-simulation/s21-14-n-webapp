
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";




export const Footer = () => {


    return (
        <footer className='w-full h-10 lg:h-28 text-secundary bg-primary flex justify-between items-center px-2 lg:gap-10 xl:gap-0 xl:px-20'>
            <div className="flex  items-center gap-10 lg:gap-[160px] xl:gap-[500px]">
                <span className=' text-xs lg:text-lg  xl:text-2xl  flex '>Copyright &copy; 2025 Urbania. </span>
                <div>
                    <img src="/public/logo_Urbania-04.png" className="w-12 hidden xl:flex" alt="" />
                    <img src="/public/logo_Urbania-03.png" className="w-20 lg:w-40 flex xl:hidden  " alt="" />
                </div>

            </div>
            <div className='flex gap-2 lg:gap-10 text-2xl lg:text-5xl xl:text-7xl'>
                <PiFacebookLogoLight className=' rounded-3xl'/>
                <PiInstagramLogoLight className=''/>
                <PiWhatsappLogoLight className='' />
            </div>
        </footer>
    )
}