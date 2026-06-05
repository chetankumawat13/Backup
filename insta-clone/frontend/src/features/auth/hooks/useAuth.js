import { useContext } from "react"
import { AuthContext } from "../auth.context"
import { login, register } from "../services/auth.api"



export const useAuth = () => {
    const context = useContext(AuthContext)

    const {user,setUser,loading, setLoading,fetchUser} = context

    const handleLogin = async (identifier,password) => {
        try{
            setLoading(true)

            const response = await login(identifier,password)
            // console.log(response);
            setUser(response)
        }finally{
            setLoading(false)
        }

      

    }

    const handleRegister = async (username,email,password,accountType,bio) =>{
        try{
            setLoading(true)

            const response = await register(username,email,password,accountType,bio)
            setUser(response)
        }finally{
            setLoading(false)
        }



    }


    return {
        user,loading,handleLogin,handleRegister,fetchUser
    }

}