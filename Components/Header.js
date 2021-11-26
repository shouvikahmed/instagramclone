import Image from "next/image"
import {SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon,} from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid"

function Header() {
    return (
        <div className='shadow-sm border-b sticky top-0 z-50'>
            <div className='flex justify-between max-w-4xl mx-5 xl:mx-auto'>
           {/* Header Left */}
                <div className='relative hidden lg:inline-grid  w-24 cursor-pointer '>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                    layout='fill'
                    objectFit='contain'
                    className='items-center mt-3' />
                </div>
                <div className='relative w-10  lg:hidden flex-shrink-0 cursor-pointer'>
                <Image src="https://links.papareact.com/jjm"
                    layout='fill'
                    objectFit='contain' />
                </div>

           {/* Header Middle */}

                <div className='mt-1 relative p-2 rounded-md'>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                        <SearchIcon className='h-5 w-5 text-gray-500' />
                    </div>
                    <input className='pl-10 block md:w-full sm:text-sm border-gray focus:ring-black focus:border-black searchwidth' type="text" placeholder='Search' />
                </div>

           {/* Header Right */}
           <div className="items-center flex justify-end space-x-4">
               <HomeIcon className='headerbtn' />
               <MenuIcon className='h-6 md:hidden cursor-pointer flex-shrink-0'/>
               <PaperAirplaneIcon className='headerbtn rotate-45' />
               <PlusCircleIcon className='headerbtn'/>
               <UserGroupIcon className='headerbtn'/>
               <HeartIcon className='headerbtn'/>
                <img src="https://yt3.ggpht.com/yti/APfAmoE_KFUTP635S10XQ06Hl03euB2pKI6NyNOPqDzTEA=s108-c-k-c0x00ffffff-no-rj" alt="profile pic" className='h-8 md:h-10 rounded-full' />
           </div>
        </div>
        </div>
        
    )
}

export default Header
