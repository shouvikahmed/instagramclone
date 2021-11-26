import faker from "faker"
import { useEffect, useState } from "react"
import Story from "./Story"

function Stories() {

    const [suggestions, setSuggestions] = useState([])

    // Need to understand the following code.
    // generating an array from faker by mapping through it. 
    useEffect(() => {       
        const suggestions= [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }))
        setSuggestions(suggestions)
    }, [])
    return (
        <div className='flex space-x-2 p-6 bg-white mt-2 md:mt-8 border-gray-200 border rounded-sm overflow-scroll scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-black shadow-sm '>
            {
                suggestions.map(profile=>(
                    <Story key={profile.id}
                    img={profile.avatar} 
                    username={profile.username}
                     />
                ))
            }
            
        </div>
    )
}

export default Stories
