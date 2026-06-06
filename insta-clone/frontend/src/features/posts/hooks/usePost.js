import { useContext } from "react"
import { PostContext } from "../post.context"
import { homeFeed } from "../services/post.api"


export const usePost = () => {
    const context = useContext(PostContext)

    const{data,setData,loading,setLoading} = context

    const fetchHomeFeed = async () => {
        try{
            setLoading(true)
            const response = await homeFeed()
            setData(response)
        }finally{
            setLoading(false)
        }
    }


    return {
        data,loading,fetchHomeFeed
    }

}