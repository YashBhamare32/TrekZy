import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Headers/Headers'
import List from './components/List/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-500">
      <Header />
      <List />

    </div>
  )
}

export default App
