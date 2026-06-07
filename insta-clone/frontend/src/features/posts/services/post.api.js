import axios from "axios";


const api = axios.create({
    baseURL:'http://localhost:3000/api',
    withCredentials:true,

})


export async function homeFeed(){
    const response = await api.get('/home')


    return response.data
}

export async function profileData(username){
    const response = await api.get(`/profile/${username}`)
    console.log(response);
    return response.data
}

