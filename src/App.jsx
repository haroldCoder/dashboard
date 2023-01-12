import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='p-10 panel'>
        {
          localStorage.getItem("user") == null ? <Login logp={true} post={false} /> : <Home/>
        }
      </div>
    </div>
  )
}

export default App
