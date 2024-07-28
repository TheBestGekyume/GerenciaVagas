import { useState } from 'react'
import { Login } from './components/Login/Login'
import "./App.scss"

export function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}
