import { useContext } from "react"
import { PostContext } from "../post.context"
import { homeFeed, profileData } from "../services/post.api"


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

    const fetchProfileData = async (username) => {
        try{
            setLoading(true)
            const response = await profileData(username)
            setData(response)
        }finally{
            setLoading(false)
        }
    }


    return {
        data,loading,fetchHomeFeed,fetchProfileData
    }

}