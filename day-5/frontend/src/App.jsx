import React, { useEffect, useState } from 'react'
import api from './config/api'
import Card from './components/Card'
import './style/base.css'
import Form from './components/Form'

const App = () => {
   

  const [user, setUser] = useState([ ])
  const [selectedUser, setSelectedUser] = useState(null)

 const fetchData = () => {
    api.get('')
    .then((res) => {
      setUser(res.data.users)
    })
}
 useEffect(() => {
    fetchData()
 },[ ])


  return (

    <div className='main'>

      <Form selectedUser={selectedUser} setSelectedUser={setSelectedUser} fetchData={fetchData} /> 
        <div className="cards">
          {user.map((data,idx) => (
              <Card setSelectedUser={setSelectedUser} fetchData={fetchData} key={idx} data={data} />
          ))}
        </div>
    </div>
  )
}

export default App