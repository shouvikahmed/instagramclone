function MiniProfile() {
    return (
        <div className=' flex items-center justify-between mt-14 ml-10'>
            <img 
            className='rounded-full border p-{2px} w-16 h-16'
            src='https://yt3.ggpht.com/yti/APfAmoE_KFUTP635S10XQ06Hl03euB2pKI6NyNOPqDzTEA=s108-c-k-c0x00ffffff-no-rj' alt="" />

            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>_Shouvik__</h2>
                <h3 className='text-sm text-gray-400 '>Welcome to Instagram</h3>
            </div>

            <button className='text-blue-400 text-sm font-semibold hover:text-blue-700'>Sign Out</button>
        </div>
    )
}

export default MiniProfile
