import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

    const [notes, setNotes] = useState([])

  const fetchData = () => {
      axios.get('http://localhost:3000/api/notes')
      .then(res => {
          setNotes(res.data.notes)
          console.log(res.data.notes);
      }) 
  }

useEffect(() => { 
  fetchData()
},[])

  return (
    <div>
       {notes.map((data,idx) => {
          return(
             <div key={idx}>
                 <h1>{data.title}</h1>
                 <p>{data.description}</p>
             </div>
          )
       })}
    </div>
  )
}

export default App
