import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

axios
.get('/whoami')
.then((response) => {
  console.log(response.data)
})

function App() {

  useEffect(() => {
    axios.get('/whoami', response => console.log(response.data))
  })
  return (
 <>
 <div>Welcome to Mars!</div>
 </>
  )
}

export default App
