import { useContext } from "react"
import { AuthContext } from "../auth.context"
import { login } from "../services/auth.api"



export const useAuth = () => {
    const context = useContext(AuthContext)

    const {user,setUser,loading, setLoading} = context

    const handleLogin = async (identifier,password) => {
        try{
            setLoading(true)

            const response = await login(identifier,password)

            setUser(response)
        }finally{
            setLoading(false)
        }

      

    }


    return {
        user,loading,handleLogin
    }

}