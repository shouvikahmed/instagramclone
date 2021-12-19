import faker from "faker"
import { Profiler, useEffect, useState } from "react"

function Suggestions() {

    const [suggestions, setSugesstions] = useState([])

    useEffect(() => {
       const suggestions = [...Array(5)].map((_, i)=>({
           ...faker.helpers.contextualCard(),
           id: i,
       }))

       setSugesstions(suggestions)
    }, [])

    return (

    <div className='mt-4 ml-10'>
        <div className='flex justify-between text-sm mb-5'>
            <h3 className='font-bond text-sm text-gray-400'>Suggestions for you</h3>
            <button className='font-semibold text-gray-600'>See all</button>
        </div>
        
        
        
        <div>
            {suggestions.map(profile=>(
                    <div className='flex justify-between mt-3' 
                        key={Profiler.id} >
                            
                            <img className='rounded-full border p-{2px} h-10 w-10' src={profile.avatar} alt="" />

                    <div className='flex-1 ml-4'>
                        <h2 className='text-sm font-semibold text-gray-700'>{profile.username}</h2>
                        <h3 className='text-xs text-gray-500'>Works at {profile.company.name}</h3>
                    </div>
                    <button className='text-blue-400 text-sm hover:text-blue-700'>Follow</button>


                    </div>
            ))}
        </div>
    </div>
    )
}

export default Suggestions
