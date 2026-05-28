import React, { useEffect } from 'react'
import '../style/form.css'
import {useForm} from 'react-hook-form'
import api from '../config/api'


const Form = ({fetchData, selectedUser, setSelectedUser}) => {

    const {register,handleSubmit,reset,setValue} = useForm()

    const handleFormSubmit = (data) => {

        if(selectedUser){
    
            api.patch(`/${selectedUser._id}`, {
                description: data.description
            })
            .then(() => {
                fetchData()
                reset()
                setSelectedUser(null)
            })
    
        }else{
    
            api.post('', {
                username: data.username,
                description: data.description
            })
            .then(() => {
                fetchData()
                reset()
            })
    
        }
    
    }

    useEffect(() => {
        if(selectedUser){
            setValue("username", selectedUser.username)
            setValue("description", selectedUser.description)

        }
    },[selectedUser])

  return (

    <form onSubmit={handleSubmit(handleFormSubmit)} className="form">

      <h1>Create User</h1>

      <input
      {...register("username")}
        disabled={selectedUser ? true : false}
        type="text"
        placeholder="Enter username"
      />

      <textarea
      {...register("description")}
        placeholder="Enter description"
      ></textarea>

      <button type="submit">
        {selectedUser ? "update" :"create"}
      </button>

    </form>

  )
}

export default Form