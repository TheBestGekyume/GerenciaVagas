import { useState } from 'react'
import { Login } from './components/Login/Login'
import "./App.css"

export function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}
