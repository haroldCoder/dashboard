import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='p-10 panel'>
            <Routes>
              <Route path='/' element={localStorage.getItem("user") == null ? <Login logp={true} post={false} /> : <Home/>} />
                <Route path='/profile' element={<Profile/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
