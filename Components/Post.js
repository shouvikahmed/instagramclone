import {
    BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HearctIcon, HeartIcon, PaperAirplaneIcon,} from "@heroicons/react/outline"
import {HeartIcon as HeartIconSolid} from "@heroicons/react/solid"




function Post({id, username, userImage, caption, img}) {
    return (
        <div className='bg-white my-5 border rounded-sm'>
            {/* Header */}
            <div className='flex items-center p-3'>
                <img src={userImage} className='rounded-full h-12 w-12 object-contain border p-1 mr-3' alt="" />
                <p className='flex-1 font-bold' >{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>
            {/* image */}
            <img src={img} clasName='object-cover w-full' alt="" />


            {/* button */}
            <div className='flex justify-between px-3 mt-2'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn rotate-45' />
                </div>
                <BookmarkIcon className='btn' />
            </div>
            
       
            {/* {caption} */}
            <p className="p-5 truncate">
                <span className='font-bold mr-1'>{username} </span>
                {caption}
            </p>

            {/* comment */}
            {/* input */}
            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='btn' />
                <input 
                className='border-none flex-1 focus:ring-0'
                placeholder="Add a comment..." 
                type="text" />
                <button className='font-semibold text-blue-400'>Post</button>
            </form>
        </div>
    )
}

export default Post
