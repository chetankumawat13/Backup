import React from 'react'
import '../style/card.css'
import api from '../config/api'

const Card = ({data , fetchData, setSelectedUser}) => {

    const handleDelete = () => {
        api.delete(`/${data._id}`)
        .then(res => {
            fetchData()
        })
    }



  return (
    <div className='card'>
        <img src="https://ik.imagekit.io/ad6av31ld/HOCCO/Screenshot%202026-05-28%20at%201.00.05%E2%80%AFPM.png" alt="" />
        <h1>{data.username}</h1>
        <p>{data.description}</p>
        <div className="buttons">
            <button onClick={() => setSelectedUser(data)} className='edt'>edit</button>
            <button onClick={handleDelete} className='dlt'>delete</button>
        </div>
    </div>
  )
}

export default Card