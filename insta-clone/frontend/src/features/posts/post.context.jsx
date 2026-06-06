import { createContext, useState } from "react";


export const PostContext = createContext()

export const PostProvider = ({children}) =>{

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    
    return (
        <PostContext.Provider value={{data,setData,loading,setLoading}}>
            {children}
        </PostContext.Provider>
    )

}   