import { useContext, useEffect } from "react"
import { AuthContext } from "../auth.context"
import { getMe, login, logout, register } from "../services/auth.api"



export const useAuth = () => {
    const context = useContext(AuthContext)
    const {user,setUser,loading,setLoading} =  context

    async function handleLogin(username,password){
        setLoading(true)
        const data = await login(username,password)
        setUser(data.user)
        setLoading(false)
    }

    async function handleRegister(username,email,password){
        setLoading(true)
        const data = await register(username,email,password)
        setUser(data.user)
        setLoading(false)
    }

    async function handleGetMe(){
        setLoading(true)
        const data = await getMe()
        setUser(data.user)
        setLoading(false)
    }
    
    async function handleLogout(){
        setLoading(true)
        const data = await logout()
        setUser(null)
        setLoading(false)
    }

    // useEffect(() => {
    //     handleGetMe()
    // },[])

    return (
        {handleLogin,handleGetMe,handleLogout,handleRegister,user,loading}
    )

}